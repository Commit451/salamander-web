import React, {createContext, ReactNode, useCallback, useContext, useEffect, useState} from 'react';
import {GoogleAuthProvider, OAuthProvider, signInWithCredential, signInWithPopup, onAuthStateChanged} from 'firebase/auth';
import {auth} from '../config/firebase';
import {getUserFromFirestore, User} from '../services/userService';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (credential: string, provider?: 'google' | 'apple') => Promise<void>;
    loginWithApple: () => Promise<void>;
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
        // Listen to Firebase auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                // User is signed in, fetch their profile data
                try {
                    const userData = await getUserFromFirestore(firebaseUser.uid);
                    const appUser: User = {
                        id: userData.id,
                        displayName: userData.displayName,
                        email: userData.email,
                        plan: userData.plan,
                        messagesRemaining: userData.messagesRemaining,
                    };
                    setUser(appUser);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                    setUser(null);
                }
            } else {
                // User is signed out
                setUser(null);
            }
            setIsLoading(false);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const login = async (credential: string, provider: 'google' | 'apple' = 'google'): Promise<void> => {
        try {
            let authCredential;
            if (provider === 'apple') {
                // For Apple, the credential might be an authorization object
                const appleProvider = new OAuthProvider('apple.com');
                if (typeof credential === 'string') {
                    authCredential = appleProvider.credential({
                        idToken: credential,
                    });
                } else {
                    // Handle Apple authorization response object
                    const appleAuth = credential as any;
                    authCredential = appleProvider.credential({
                        idToken: appleAuth.id_token,
                        accessToken: appleAuth.access_token,
                    });
                }
            } else {
                // Sign in with Firebase Auth using Google credential
                authCredential = GoogleAuthProvider.credential(credential);
            }

            await signInWithCredential(auth, authCredential);

        } catch (error) {
            console.error('Failed to process login:', error);
            throw new Error('Sign-in failed. Please try again.');
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();

            // Redirect to welcome page
            window.location.hash = 'welcome';
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const updateUser = (updatedUser: User) => {
        setUser(updatedUser);
    };

    const refreshUserData = useCallback(async (): Promise<void> => {
        const firebaseUser = auth.currentUser;
        if (!firebaseUser) return;

        try {
            const userData = await getUserFromFirestore(firebaseUser.uid);
            if (userData) {
                const appUser: User = {
                    id: userData.id,
                    displayName: userData.displayName,
                    email: userData.email,
                    plan: userData.plan,
                    messagesRemaining: userData.messagesRemaining,
                };

                setUser(appUser);
            }
        } catch (error) {
            console.error('Failed to refresh user data:', error);
        }
    }, []);

    const loginWithApple = async (): Promise<void> => {
        try {
            // Create Apple provider
            const appleProvider = new OAuthProvider('apple.com');
            appleProvider.addScope('name');
            appleProvider.addScope('email');

            // Sign in with popup
            await signInWithPopup(auth, appleProvider);

        } catch (error: any) {
            console.error('Failed to process Apple login:', error);

            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/operation-not-allowed') {
                throw new Error('Apple Sign-In is not enabled. Please configure it in Firebase Console.');
            } else if (errorCode === 'auth/popup-closed-by-user') {
                throw new Error('Sign-in was cancelled by user.');
            } else if (errorCode === 'auth/popup-blocked') {
                throw new Error('Popup was blocked by browser. Please allow popups and try again.');
            } else if (errorCode === 'auth/invalid-credential') {
                throw new Error('Apple Sign-In configuration error. Please check your Firebase and Apple Developer Console settings.');
            }

            throw new Error(`Apple sign-in failed: ${errorMessage}`);
        }
    };

    const value: AuthContextType = {
        user,
        isLoading,
        login,
        loginWithApple,
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