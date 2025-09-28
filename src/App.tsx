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
            // Extract just the route part before any query parameters
            const route = hash.split('?')[0];

            if (route === 'auth') {
                setCurrentPage('auth');
            } else if (route === 'account') {
                setCurrentPage('account');
            } else if (route === 'terms') {
                setCurrentPage('terms');
            } else if (route === 'privacy') {
                setCurrentPage('privacy');
            } else if (route === 'learn-more') {
                setCurrentPage('learn-more');
            } else if (route === 'pricing') {
                setCurrentPage('pricing');
            } else if (route === 'welcome') {
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
