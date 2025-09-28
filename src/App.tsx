import React, {useEffect, useState} from 'react';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import LearnMore from './pages/LearnMore';
import Pricing from './pages/Pricing';
import {AuthProvider} from './contexts/AuthContext';

const AppContent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('welcome');

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

    // No global auth checks - let individual pages handle their own auth requirements

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
