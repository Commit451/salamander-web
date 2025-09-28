import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../config/firebase';
import './CliAuth.css';

const CLIENT_ID = '87955960620-dv9h8pfv4a97mno598dcc3m1nlt0h6u4.apps.googleusercontent.com';

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

interface GenerateCustomTokenResponse {
    customToken: string;
    uid: string;
    email: string | null;
    displayName: string | null;
}

const CliAuth: React.FC = () => {
    const { user, login, loginWithApple, isLoading } = useAuth();
    const [customToken, setCustomToken] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const [isGoogleLoaded, setIsGoogleLoaded] = useState(false);

    // Get auth type and callback URL from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const authType = urlParams.get('type') || 'apple';
    const callbackUrl = urlParams.get('callback');

    const handleCredentialResponse = useCallback(async (response: any) => {
        console.log('Encoded JWT ID token: ' + response.credential);

        try {
            await login(response.credential);
            // generateTokenAndRedirect will be called automatically via useEffect when user state updates
        } catch (error) {
            console.error('Failed to process login:', error);
            setError(error instanceof Error ? error.message : 'Google sign-in failed. Please try again.');
        }
    }, [login]);

    useEffect(() => {
        // Initialize Google Sign-In if needed
        if (authType === 'google') {
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
        }
    }, [authType, handleCredentialResponse]);

    useEffect(() => {
        // If user is already signed in and we have a callback URL, generate custom token and redirect
        if (user && callbackUrl && !customToken && !isGenerating) {
            generateTokenAndRedirect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, callbackUrl, customToken, isGenerating]);

    const generateToken = async (): Promise<string | null> => {
        if (!user) return null;

        setIsGenerating(true);
        setError(null);

        try {
            // Get the current user's ID token
            const idToken = await auth.currentUser?.getIdToken();
            if (!idToken) {
                throw new Error('Failed to get authentication token');
            }

            // Call the salamander-service to generate custom token
            const response = await fetch('https://api.salamander.space/v1/generate-custom-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firebaseIdToken: idToken
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate custom token');
            }

            const result: GenerateCustomTokenResponse = await response.json();
            setCustomToken(result.customToken);
            return result.customToken;
        } catch (err: any) {
            console.error('Error generating custom token:', err);
            setError(err.message || 'Failed to generate authentication token');
            return null;
        } finally {
            setIsGenerating(false);
        }
    };

    const generateTokenAndRedirect = async () => {
        if (!callbackUrl) return;

        const token = await generateToken();
        if (token) {
            setIsRedirecting(true);
            // Since Apple doesn't allow localhost redirects, we need to redirect to localhost from here
            // The callbackUrl will be something like "http://localhost:8080/cli-auth-callback"
            window.location.href = `${callbackUrl}?token=${encodeURIComponent(token)}`;
        }
    };

    const handleAppleLogin = async () => {
        setError(null);
        try {
            await loginWithApple();
            // generateTokenAndRedirect will be called automatically via useEffect when user state updates
        } catch (err: any) {
            setError(err.message || 'Apple sign-in failed');
        }
    };

    const handleGoogleLogin = async () => {
        if (!isGoogleLoaded) {
            setError('Google Sign-In not loaded. Please try again in a moment.');
            return;
        }

        setError(null);
        try {
            // Trigger the One Tap flow
            window.google.accounts.id.prompt();
        } catch (error) {
            console.error('Google sign-in failed:', error);
            setError('Google sign-in failed. Please try again.');
        }
    };


    if (isLoading) {
        return (
            <div className="cli-auth-container">
                <div className="cli-auth-card">
                    <div className="cli-auth-spinner"></div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="cli-auth-container">
            <div className="cli-auth-card">
                <div className="cli-auth-header">
                    <div className="cli-auth-logo">S</div>
                    <h1>Salamander CLI Authentication</h1>
                    <p>Authenticate your CLI with {authType === 'apple' ? 'Apple ID' : authType === 'google' ? 'Google' : authType}</p>
                </div>

                {!user && (
                    <div className="cli-auth-login">
                        {authType === 'apple' ? (
                            <button
                                className="apple-login-btn"
                                onClick={handleAppleLogin}
                                disabled={isLoading}
                            >
                                <span className="apple-icon">🍎</span>
                                Sign in with Apple
                            </button>
                        ) : authType === 'google' ? (
                            <button
                                className="google-login-btn"
                                onClick={handleGoogleLogin}
                                disabled={isLoading || !isGoogleLoaded}
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
                                    <span>Sign in with Google</span>
                                </div>
                            </button>
                        ) : (
                            <div className="auth-message">
                                <p>Unknown authentication type: {authType}</p>
                                <p>Supported types: apple, google</p>
                            </div>
                        )}
                    </div>
                )}

                {user && callbackUrl && (isGenerating || isRedirecting) && (
                    <div className="cli-auth-generating">
                        <div className="cli-auth-spinner"></div>
                        <p>{isRedirecting ? 'Redirecting to CLI...' : 'Generating authentication token...'}</p>
                        {isRedirecting && (
                            <p className="redirect-info">
                                If the redirect doesn't work, you can close this window and return to your terminal.
                            </p>
                        )}
                    </div>
                )}

                {user && !callbackUrl && (
                    <div className="cli-auth-success">
                        <div className="success-icon">✅</div>
                        <h2>Authentication Successful!</h2>
                        <p className="user-info">
                            Welcome, {user?.displayName || user?.email}
                        </p>
                        <div className="auth-message">
                            <p>You are now authenticated with Apple.</p>
                            <p>You can close this window and return to your terminal.</p>
                        </div>
                    </div>
                )}

                {error && (
                    <div className="cli-auth-error">
                        <span className="error-icon">❌</span>
                        <p>{error}</p>
                        <button className="retry-btn" onClick={() => window.location.reload()}>
                            Try Again
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CliAuth;