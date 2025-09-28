import React, {useEffect, useState} from 'react';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import LearnMore from './pages/LearnMore';
import Pricing from './pages/Pricing';
import CliAuth from './pages/CliAuth/CliAuth';
import {AuthProvider, useAuth} from './contexts/AuthContext';

const AppContent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('welcome');
    const {user, isLoading} = useAuth();

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            if (hash === 'auth') {
                setCurrentPage('auth');
            } else if (hash === 'account') {
                setCurrentPage('account');
            } else if (hash === 'terms') {
                setCurrentPage('terms');
            } else if (hash === 'privacy') {
                setCurrentPage('privacy');
            } else if (hash === 'learn-more') {
                setCurrentPage('learn-more');
            } else if (hash === 'pricing') {
                setCurrentPage('pricing');
            } else if (hash === 'cli-auth') {
                setCurrentPage('cli-auth');
            } else if (hash === 'welcome') {
                setCurrentPage('welcome');
            } else {
                setCurrentPage('welcome');
            }
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    // Show loading while checking auth state
    if (isLoading) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#111827',
                padding: '20px',
                fontFamily: '"Fira Code", "JetBrains Mono", "Monaco", "Menlo", "Ubuntu Mono", "Consolas", "source-code-pro", monospace'
            }}>
                <div style={{
                    background: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '16px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    padding: '48px 40px',
                    textAlign: 'center',
                    maxWidth: '400px',
                    width: '100%'
                }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        margin: '0 auto 24px',
                        background: '#ff6b35',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        S
                    </div>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#f9fafb',
                        margin: '0 0 8px 0'
                    }}>
                        Salamander
                    </h1>
                    <p style={{
                        fontSize: '14px',
                        color: '#d1d5db',
                        margin: '0 0 32px 0',
                        fontWeight: '500'
                    }}>
                        Never be AFK
                    </p>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        border: '3px solid #374151',
                        borderTop: '3px solid #ff6b35',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto'
                    }}></div>
                </div>
            </div>
        );
    }

    // If user is logged in and trying to access auth page, redirect to account
    // UNLESS there's a callback/redirect_url parameter (CLI auth flow)
    if (user && currentPage === 'auth') {
        // Parse URL parameters from the hash (e.g., #auth?callback=...)
        const hashParts = window.location.hash.split('?');
        const urlParams = new URLSearchParams(hashParts[1] || '');
        const hasCallback = urlParams.get('callback') || urlParams.get('redirect_url');

        if (!hasCallback) {
            window.location.hash = 'account';
            return null;
        }
    }

    // If user is not logged in and trying to access account page, redirect to welcome
    if (!user && currentPage === 'account') {
        window.location.hash = 'welcome';
        return null;
    }

    if (currentPage === 'auth') {
        return <Auth/>;
    }

    if (currentPage === 'account') {
        return <Account/>;
    }

    if (currentPage === 'terms') {
        return <Terms/>;
    }

    if (currentPage === 'privacy') {
        return <Privacy/>;
    }

    if (currentPage === 'learn-more') {
        return <LearnMore/>;
    }

    if (currentPage === 'pricing') {
        return <Pricing/>;
    }

    if (currentPage === 'cli-auth') {
        return <CliAuth/>;
    }

    return <Welcome/>;
};

const App: React.FC = () => {
    return (
        <AuthProvider>
            <AppContent/>
            <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
        </AuthProvider>
    );
};

export default App;
