import React, {useCallback, useEffect, useState} from 'react';
import './Auth.css';
import {useAuth} from '../../contexts/AuthContext';

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
    const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);
    const {login, loginWithApple} = useAuth();

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
        if (!isGoogleLoaded) {
            alert('Google Sign-In not loaded. Please try again in a moment.');
            return;
        }

        try {
            // Trigger the One Tap flow
            window.google.accounts.id.prompt();
        } catch (error) {
            console.error('Google sign-in failed:', error);
            alert('Sign-in failed. Please try again.');
        }
    };

    const handleAppleAuth = async () => {
        try {
            await loginWithApple();
            // Redirect to account page after successful login
            window.location.hash = 'account';
        } catch (error) {
            console.error('Apple sign-in failed:', error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <img src="images/logo_salamander.png" alt="Salamander" className="auth-logo"/>
                    <h1 className="auth-title">Salamander</h1>
                    <p className="auth-tagline">Never be AFK</p>
                </div>

                <div className="auth-content">
                    <h2 className="auth-heading">Welcome</h2>
                    <p className="auth-description">
                        Use Salamander to manage your AI-powered workflow
                    </p>

                    <div className="auth-buttons">
                        <button
                            className="google-auth-button"
                            onClick={handleGoogleAuth}
                        >
                            <div className="google-auth-content">
                                <svg className="google-icon" viewBox="0 0 24 24" width="18" height="18">
                                    <path fill="#4285F4"
                                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853"
                                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05"
                                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335"
                                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                <span>Continue with Google</span>
                            </div>
                        </button>

                        <button
                            className="apple-auth-button"
                            onClick={handleAppleAuth}
                        >
                            <div className="apple-auth-content">
                                <svg className="apple-icon" viewBox="0 0 24 24" width="18" height="18">
                                    <path fill="#000" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                                </svg>
                                <span>Continue with Apple</span>
                            </div>
                        </button>
                    </div>

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