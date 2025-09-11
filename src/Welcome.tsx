import React from 'react';
import './Welcome.css';

const Welcome: React.FC = () => {
  return (
    <div className="welcome">
      <header className="welcome-header">
        <nav className="welcome-nav">
          <div className="nav-logo">
            <img src="/images/logo_salamander.png" alt="Salamander" className="logo-image" />
            <h1>Salamander</h1>
          </div>
          <div className="nav-links">
            <a href="https://play.google.com/store" className="nav-link" target="_blank" rel="noopener noreferrer">Android App</a>
            <a href="https://apps.apple.com" className="nav-link" target="_blank" rel="noopener noreferrer">iOS App</a>
            <a href="#login" className="nav-link">Log In</a>
            <a href="#signup" className="nav-link nav-link-primary">Sign Up</a>
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
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">Get Started</button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="features-grid">
            <div className="feature-card">
              <h3>AI-Powered Workflow</h3>
              <p>Connect your phone to your computer and let Claude CLI enhance your productivity workflow.</p>
            </div>
            <div className="feature-card">
              <h3>Remote Execution</h3>
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
            <a href="#about">About</a>
            <a href="#support">Support</a>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
          <p>&copy; 2024 Commit 451. Powered by Anthropic Claude.</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;