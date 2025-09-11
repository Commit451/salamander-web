import React, { useState, useEffect } from 'react';
import Welcome from './Welcome';
import Auth from './Auth';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('welcome');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'auth') {
        setCurrentPage('auth');
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
    return <Auth />;
  }

  return <Welcome />;
};

export default App;
