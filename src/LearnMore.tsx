import React from 'react';
import './LearnMore.css';
import { useAuth } from './AuthContext';
import Footer from './Footer';

const LearnMore: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="learn-more">
      <header className="learn-more-header">
        <nav className="learn-more-nav">
          <div className="nav-logo">
            <img src="/images/logo_salamander.png" alt="Salamander" className="logo-image" />
            <h1>Salamander</h1>
          </div>
          <div className="nav-links">
            <button onClick={() => window.location.hash = ''} className="nav-link">Back to Home</button>
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
          </div>
        </nav>
      </header>

      <main className="learn-more-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="page-title">How Salamander Works</h1>
            <p className="page-subtitle">
              Set up your AI-powered workflow in minutes and stay productive from anywhere
            </p>
          </div>
        </section>

        <section className="setup-overview">
          <div className="content-container">
            <h2>Complete Setup Guide</h2>
            <p className="overview-text">
              Salamander connects your mobile device with your computer through AI, allowing you to manage tasks,
              run commands, and monitor progress remotely. Here's everything you need to get started.
            </p>
          </div>
        </section>

        <section className="setup-steps">
          <div className="content-container">
            <div className="steps-grid">

              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Download the Mobile App</h3>
                  <p>Get the Salamander app on your mobile device to control your computer remotely.</p>
                  <div className="app-downloads">
                    <a href="https://play.google.com/store/apps/details?id=com.commit451.salamander" className="app-store-link" target="_blank" rel="noopener noreferrer">
                      <img src="/images/play_store.png" alt="Get it on Google Play" className="app-store-badge" />
                    </a>
                    <a href="https://apps.apple.com" className="app-store-link" target="_blank" rel="noopener noreferrer">
                      <img src="/images/app_store.svg" alt="Download on the App Store" className="app-store-badge" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Install the CLI Tool</h3>
                  <p>Install the Salamander CLI on your computer to enable AI-powered task execution.</p>
                  <div className="code-block">
                    <code>npm install -g salamander-cli</code>
                  </div>
                  <p className="step-note">Requires Node.js 18 or higher</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Authenticate & Connect</h3>
                  <p>Link your mobile app with your computer using your Salamander account.</p>
                  <div className="code-block">
                    <code>salamander auth login</code>
                  </div>
                  <p className="step-note">This will open a browser to complete authentication</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Create a Runner</h3>
                  <p>Set up a runner in your project directory to enable AI task execution.</p>
                  <div className="code-block">
                    <code>cd /path/to/your/project</code>
                    <code>salamander runner create</code>
                  </div>
                  <p className="step-note">Choose a directory where you want AI assistance</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Start Your Runner</h3>
                  <p>Launch the runner to begin accepting commands from your mobile device.</p>
                  <div className="code-block">
                    <code>salamander runner start</code>
                  </div>
                  <p className="step-note">Keep this running to maintain connectivity</p>
                </div>
              </div>

              <div className="step-card">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Control from Mobile</h3>
                  <p>Open your mobile app and start giving commands to your AI assistant.</p>
                  <ul className="feature-list">
                    <li>Send text commands</li>
                    <li>Monitor task progress</li>
                    <li>Receive push notifications</li>
                    <li>View command outputs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="features-detail">
          <div className="content-container">
            <h2>What You Can Do</h2>
            <div className="features-grid">
              <div className="feature-item">
                <h4>Code & Development</h4>
                <p>Run builds, execute tests, commit changes, and deploy applications - all from your phone.</p>
              </div>
              <div className="feature-item">
                <h4>File Management</h4>
                <p>Create, edit, move, and organize files and directories through natural language commands.</p>
              </div>
              <div className="feature-item">
                <h4>System Tasks</h4>
                <p>Monitor system resources, manage processes, and execute system administration tasks.</p>
              </div>
              <div className="feature-item">
                <h4>Custom Workflows</h4>
                <p>Set up automated workflows and let AI handle complex multi-step processes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="troubleshooting">
          <div className="content-container">
            <h2>Troubleshooting</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>Connection Issues?</h4>
                <p>Ensure both devices are connected to the internet and you're logged into the same account on both the mobile app and CLI.</p>
              </div>
              <div className="faq-item">
                <h4>Commands Not Working?</h4>
                <p>Check that your runner is active and the CLI has the necessary permissions for the requested operations.</p>
              </div>
              <div className="faq-item">
                <h4>Need Help?</h4>
                <p>Visit our documentation or contact support through the mobile app for additional assistance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="content-container">
            <h2>Ready to Get Started?</h2>
            <p>Download the app and install the CLI to begin your AI-powered productivity journey.</p>
            <div className="cta-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.commit451.salamander" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Download Mobile App
              </a>
              <button onClick={() => window.location.hash = 'auth'} className="btn btn-secondary">
                Create Account
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LearnMore;