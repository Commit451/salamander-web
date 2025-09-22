import React, {createContext, ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import {auth} from '../config/firebase';
import {getUserFromFirestore, User} from '../services/userService';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (credential: string) => Promise<void>;
    logout: () => void;
    updateUser: (user: User) => void;
    refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Load user from localStorage on app start
        loadUserFromStorage();
    }, []);

    const loadUserFromStorage = () => {
        try {
            const storedUser = localStorage.getItem('salamander_user');
            const storedToken = localStorage.getItem('salamander_token');

            if (storedUser && storedToken) {
                const userData = JSON.parse(storedUser);
                setUser(userData);
            }
        } catch (error) {
            console.error('Error loading user from storage:', error);
            // Clear invalid data
            localStorage.removeItem('salamander_user');
            localStorage.removeItem('salamander_token');
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (credential: string): Promise<void> => {
        try {
            console.log('Starting login process...');

            // Sign in with Firebase Auth using Google credential
            const googleCredential = GoogleAuthProvider.credential(credential);
            const userCredential = await signInWithCredential(auth, googleCredential);
            const firebaseUser = userCredential.user;

            console.log('Firebase Auth successful for user:', firebaseUser.uid);

            // Try to get existing user from Firestore
            let userData = await getUserFromFirestore(firebaseUser.uid);

            // Convert Firestore user to AppUser
            const appUser: User = {
                id: userData.id,
                displayName: userData.displayName,
                email: userData.email,
                plan: userData.plan,
                messagesRemaining: userData.messagesRemaining, // Map messagesRemaining to remainingMessages
            };

            // Store user data and token
            localStorage.setItem('salamander_user', JSON.stringify(appUser));
            localStorage.setItem('salamander_token', credential);

            setUser(appUser);

            console.log('User signed in:', appUser);

        } catch (error) {
            console.error('Failed to process login:', error);
            throw new Error('Sign-in failed. Please try again.');
        }
    };

    const logout = () => {
        try {
            // Clear stored data
            localStorage.removeItem('salamander_user');
            localStorage.removeItem('salamander_token');

            setUser(null);

            // Redirect to welcome page
            window.location.hash = 'welcome';

            console.log('User signed out');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const updateUser = (updatedUser: User) => {
        setUser(updatedUser);
        localStorage.setItem('salamander_user', JSON.stringify(updatedUser));
    };

    const refreshUserData = useCallback(async (): Promise<void> => {
        if (!user) return;

        try {
            const userData = await getUserFromFirestore(user.id);
            if (userData) {
                const appUser: User = {
                    id: userData.id,
                    displayName: userData.displayName,
                    email: userData.email,
                    plan: userData.plan,
                    messagesRemaining: userData.messagesRemaining,
                };

                setUser(appUser);
                localStorage.setItem('salamander_user', JSON.stringify(appUser));
            }
        } catch (error) {
            console.error('Failed to refresh user data:', error);
        }
    }, [user]);

    const value: AuthContextType = {
        user,
        isLoading,
        login,
        logout,
        updateUser,
        refreshUserData,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};