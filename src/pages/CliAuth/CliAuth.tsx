import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../config/firebase';
import './CliAuth.css';

interface GenerateCustomTokenResponse {
    customToken: string;
    uid: string;
    email: string | null;
    displayName: string | null;
}

const CliAuth: React.FC = () => {
    const { user, loginWithApple, isLoading } = useAuth();
    const [customToken, setCustomToken] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isRedirecting, setIsRedirecting] = useState(false);

    // Get auth type and callback URL from URL params
    const urlParams = new URLSearchParams(window.location.search);
    const authType = urlParams.get('type') || 'apple';
    const callbackUrl = urlParams.get('callback');

    useEffect(() => {
        // If user is already signed in and we have a callback URL, generate custom token and redirect
        if (user && callbackUrl && !customToken && !isGenerating) {
            generateTokenAndRedirect();
        }
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
                    <p>Authenticate your CLI with {authType === 'apple' ? 'Apple ID' : 'Google'}</p>
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
                        ) : (
                            <div className="auth-message">
                                <p>Google authentication is not yet supported in this CLI auth flow.</p>
                                <p>Please use the standard Google OAuth flow in your CLI.</p>
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