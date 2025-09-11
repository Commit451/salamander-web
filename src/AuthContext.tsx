import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  displayName?: string;
  email: string;
  tier: 'free' | 'premium' | 'unlimited';
  remainingMessages: number;
  lastMessageReset?: Date;
  picture?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (credential: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
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
      // Decode the JWT token to get user info
      const payload = JSON.parse(atob(credential.split('.')[1]));
      
      // Create user object from Google JWT
      const userData: User = {
        id: payload.sub,
        displayName: payload.name,
        email: payload.email,
        picture: payload.picture,
        tier: 'free', // Default to free tier
        remainingMessages: 10, // Default for free tier
        lastMessageReset: new Date(),
      };
      
      // Store user data and token
      localStorage.setItem('salamander_user', JSON.stringify(userData));
      localStorage.setItem('salamander_token', credential);
      
      setUser(userData);
      
      // Here you would typically send the credential to your backend
      // and get proper user data including subscription tier, etc.
      console.log('User signed in:', userData);
      
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
      
      // Redirect to home
      window.location.hash = '';
      
      console.log('User signed out');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const updateUser = (updatedUser: User) => {
    setUser(updatedUser);
    localStorage.setItem('salamander_user', JSON.stringify(updatedUser));
  };

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    logout,
    updateUser,
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