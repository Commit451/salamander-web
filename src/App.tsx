import React, {useEffect, useState} from 'react';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import LearnMore from './pages/LearnMore';
import Pricing from './pages/Pricing';
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
                fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
                <div style={{textAlign: 'center'}}>
                    <div style={{
                        width: '3rem',
                        height: '3rem',
                        border: '4px solid #e2e8f0',
                        borderTop: '4px solid #2563eb',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite',
                        margin: '0 auto 1rem'
                    }}></div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    // If user is logged in and trying to access auth page, redirect to account
    if (user && currentPage === 'auth') {
        window.location.hash = 'account';
        return null;
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
