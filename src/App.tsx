import React, {useEffect, useState} from 'react';
import Welcome from './pages/Welcome';
import Auth from './pages/Auth';
import Account from './pages/Account';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import LearnMore from './pages/LearnMore';
import Pricing from './pages/Pricing';
import CliAuth from './pages/CliAuth/CliAuth';

const AppContent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('welcome');

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.slice(1);
            // Extract the page name before any query parameters
            const pageName = hash.split('?')[0];

            if (pageName === 'auth') {
                setCurrentPage('auth');
            } else if (pageName === 'account') {
                setCurrentPage('account');
            } else if (pageName === 'terms') {
                setCurrentPage('terms');
            } else if (pageName === 'privacy') {
                setCurrentPage('privacy');
            } else if (pageName === 'learn-more') {
                setCurrentPage('learn-more');
            } else if (pageName === 'pricing') {
                setCurrentPage('pricing');
            } else if (pageName === 'cli-auth') {
                setCurrentPage('cli-auth');
            } else if (pageName === 'welcome') {
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
        <AppContent/>
    );
};

export default App;
