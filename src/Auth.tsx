import React, { useState, useEffect, useCallback } from 'react';
import './Auth.css';
import { useAuth } from './AuthContext';

const CLIENT_ID = '87955960620-dv9h8pfv4a97mno598dcc3m1nlt0h6u4.apps.googleusercontent.com';

// Declare Google Identity Services types
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          prompt: () => void;
          renderButton: (element: HTMLElement, config: any) => void;
        };
      };
    };
  }
}

const Auth: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
  const { login } = useAuth();

  const handleCredentialResponse = useCallback(async (response: any) => {
    console.log('Encoded JWT ID token: ' + response.credential);
    
    try {
      await login(response.credential);
      // Redirect to account page after successful login
      window.location.hash = 'account';
    } catch (error) {
      console.error('Failed to process login:', error);
      alert(error instanceof Error ? error.message : 'Sign-in failed. Please try again.');
    }
  }, [login]);

  useEffect(() => {
    const initializeGoogle = () => {
      if (window.google && window.google.accounts) {
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: handleCredentialResponse,
        });
        setIsGoogleLoaded(true);
      } else {
        // Retry after a short delay if Google hasn't loaded yet
        setTimeout(initializeGoogle, 100);
      }
    };

    initializeGoogle();
  }, [handleCredentialResponse]);

  const handleGoogleAuth = async () => {
    setIsLoading(true);

    if (!isGoogleLoaded) {
      alert('Google Sign-In not loaded. Please try again in a moment.');
      setIsLoading(false);
      return;
    }
    
    try {
      // Trigger the One Tap flow
      window.google.accounts.id.prompt();
    } catch (error) {
      console.error('Google sign-in failed:', error);
      alert('Sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <img src="/images/logo_salamander.png" alt="Salamander" className="auth-logo" />
          <h1 className="auth-title">Salamander</h1>
          <p className="auth-tagline">Never be AFK</p>
        </div>

        <div className="auth-content">
          <h2 className="auth-heading">Welcome</h2>
          <p className="auth-description">
            Use Salamander to manage your AI-powered workflow
          </p>

          <button
            className={`google-auth-button ${isLoading ? 'loading' : ''}`}
            onClick={handleGoogleAuth}
            disabled={isLoading}
          >
            <div className="google-auth-content">
              {!isLoading && (
                <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              )}
              {isLoading ? (
                <span className="loading-spinner"></span>
              ) : (
                <span>Continue with Google</span>
              )}
            </div>
          </button>

        </div>

        <div className="auth-footer">
          <p>
            By continuing, you agree to Salamander's{' '}
            <a href="#terms" className="auth-link">Terms of Service</a> and{' '}
            <a href="#privacy" className="auth-link">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;