import React from 'react';
import './Header.css';
import { useAuth } from './AuthContext';

interface HeaderProps {
  isSubpage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isSubpage = false }) => {
  const { user } = useAuth();

  return (
    <header className="app-header">
      <nav className="app-nav">
        {isSubpage && (
          <button onClick={() => window.location.hash = ''} className="back-arrow" title="Back to Home">
            ←
          </button>
        )}
        <div className="nav-logo" onClick={() => window.location.hash = ''} style={{cursor: 'pointer'}}>
          <img src="/images/logo_salamander.png" alt="Salamander" className="logo-image" />
          <h1>Salamander</h1>
        </div>
        <div className="nav-links">
          {user ? (
            <button
              className="profile-button"
              onClick={() => window.location.hash = 'account'}
              title={`${user.displayName || user.email} - View Account`}
            >
              {user.picture ? (
                <img src={user.picture} alt="Profile" className="profile-image" />
              ) : (
                <div className="profile-avatar">
                  {user.displayName ? user.displayName[0].toUpperCase() : user.email[0].toUpperCase()}
                </div>
              )}
            </button>
          ) : (
            <>
              <button onClick={() => window.location.hash = 'auth'} className="nav-link">Log In</button>
              <button onClick={() => window.location.hash = 'auth'} className="nav-link nav-link-primary">Sign Up</button>
            </>
          )}
          <a href="#premium" className="nav-link nav-link-premium">Get Premium</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;