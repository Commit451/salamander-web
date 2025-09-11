import React from 'react';
import './Welcome.css';
import { useAuth } from './AuthContext';

const Welcome: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div className="welcome">
      <header className="welcome-header">
        <nav className="welcome-nav">
          <div className="nav-logo">
            <img src="/images/logo_salamander.png" alt="Salamander" className="logo-image" />
            <h1>Salamander</h1>
          </div>
          <div className="nav-links">
            {user ? (
              <div className="user-menu">
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
                <div className="user-dropdown">
                  <div className="user-info">
                    <div className="user-name">{user.displayName || 'User'}</div>
                    <div className="user-email">{user.email}</div>
                  </div>
                  <div className="dropdown-divider"></div>
                  <button 
                    className="dropdown-item" 
                    onClick={() => window.location.hash = 'account'}
                  >
                    👤 Account Settings
                  </button>
                  <button className="dropdown-item logout-item" onClick={logout}>
                    🚪 Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <button onClick={() => window.location.hash = 'auth'} className="nav-link">Log In</button>
                <button onClick={() => window.location.hash = 'auth'} className="nav-link nav-link-primary">Sign Up</button>
              </>
            )}
            <button onClick={() => window.location.hash = 'setup'} className="nav-link">Setup</button>
            <a href="#premium" className="nav-link nav-link-premium">Get Premium</a>
          </div>
        </nav>
      </header>

      <main className="welcome-main">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              Never be AFK
            </h1>
            <p className="hero-description">
              With the power of AI, you can always have a presence at your computer. 
              Create a runner, choose a directory, and start a conversation with your AI. 
              While it's doing the work, you can be out and about doing something you love.
              Powered by Anthropic Claude, the best in the business.
            </p>
            <div className="hero-actions">
              <button 
                className="btn btn-primary"
                onClick={() => window.location.hash = 'setup'}
              >
                Setup Runner
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <h3>AI-Powered Workflow</h3>
              <p>Using our app, you can let an AI agent enhance your productivity workflow.</p>
            </div>
            <div className="feature-card">
              <h3>Coding from afar</h3>
              <p>Execute tasks remotely while you're away. Get push notifications when work is complete.</p>
            </div>
            <div className="feature-card">
              <h3>Always Available</h3>
              <p>Your AI assistant is ready to work 24/7, optimizing your output even when you're not at your desk.</p>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
            <h2>Ready to enhance your workflow?</h2>
            <p>Download the Salamander app and start your AI-powered productivity journey today.</p>
            <div className="cta-buttons">
              <a href="https://play.google.com/store" className="app-store-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/play_store.png" alt="Get it on Google Play" className="app-store-badge" />
              </a>
              <a href="https://apps.apple.com" className="app-store-link" target="_blank" rel="noopener noreferrer">
                <img src="/images/app_store.svg" alt="Download on the App Store" className="app-store-badge" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="welcome-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          <p>&copy; 2024 Commit 451</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;