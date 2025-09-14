import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import {auth} from './firebase';
import {getUserFromFirestore} from './services/userService';

interface AppUser {
    id: string;
    displayName?: string;
    email: string;
    tier: 'free' | 'premium' | 'unlimited';
    remainingMessages: number;
    lastMessageReset?: Date;
    picture?: string;
}

interface AuthContextType {
    user: AppUser | null;
    isLoading: boolean;
    login: (credential: string) => Promise<void>;
    logout: () => void;
    updateUser: (user: AppUser) => void;
    refreshUserData: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<AppUser | null>(null);
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
            const appUser: AppUser = {
                id: userData.id,
                displayName: userData.displayName,
                email: userData.email,
                picture: userData.picture,
                tier: userData.tier,
                remainingMessages: userData.messagesRemaining, // Map messagesRemaining to remainingMessages
                lastMessageReset: userData.lastMessageReset,
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

    const updateUser = (updatedUser: AppUser) => {
        setUser(updatedUser);
        localStorage.setItem('salamander_user', JSON.stringify(updatedUser));
    };

    const refreshUserData = async (): Promise<void> => {
        if (!user) return;

        try {
            const userData = await getUserFromFirestore(user.id);
            if (userData) {
                const appUser: AppUser = {
                    id: userData.id,
                    displayName: userData.displayName,
                    email: userData.email,
                    picture: userData.picture,
                    tier: userData.tier,
                    remainingMessages: userData.messagesRemaining,
                    lastMessageReset: userData.lastMessageReset,
                };

                setUser(appUser);
                localStorage.setItem('salamander_user', JSON.stringify(appUser));
            }
        } catch (error) {
            console.error('Failed to refresh user data:', error);
        }
    };

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