import React from 'react';
import './Setup.css';

const Setup: React.FC = () => {
  return (
    <div className="setup-container">
      <header className="setup-header">
        <button 
          className="back-button"
          onClick={() => window.location.hash = 'welcome'}
          title="Back to Home"
        >
          ← Back to Home
        </button>
        <h1>Runner Setup</h1>
        <p>Get started with Salamander CLI to run AI-powered commands on your machine</p>
      </header>

      <div className="setup-content">
        <section className="setup-section">
          <h2>Prerequisites</h2>
          <div className="prerequisite-item">
            <h3>1. Install Node.js 18+</h3>
            <p>Ensure you have Node.js version 18 or higher installed on your system:</p>
            <div className="code-block">
              <code>node --version</code>
            </div>
            <p>If you need to install or upgrade Node.js, visit: <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a></p>
          </div>
          
          <div className="prerequisite-item">
            <h3>2. Install Claude CLI</h3>
            <p>Install Claude's CLI so your machine has the <code>claude</code> command available:</p>
            <div className="code-block">
              <code>Visit: <a href="https://docs.anthropic.com/en/docs/claude-code/cli-reference" target="_blank" rel="noopener noreferrer">Claude CLI Documentation</a></code>
            </div>
            <div className="setup-note">
              <strong>Important:</strong> After installing Claude CLI, run the <code>claude</code> command at least once to set up your account and authenticate. This is required before proceeding with Salamander CLI installation.
            </div>
          </div>
        </section>

        <section className="setup-section">
          <h2>Installation</h2>
          <div className="step">
            <h3>Install Salamander CLI globally</h3>
            <div className="code-block">
              <code>npm install -g @commit451/salamander</code>
            </div>
            <p>This installs the Salamander CLI globally on your system, making the <code>salamander</code> command available from anywhere.</p>
          </div>
        </section>

        <section className="setup-section">
          <h2>Quick Start</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Launch the main interface</h3>
                <div className="code-block">
                  <code>salamander</code>
                </div>
                <p>This opens the main Salamander CLI interface.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Create a new runner</h3>
                <div className="code-block">
                  <code>salamander create</code>
                </div>
                <p>Follow the prompts to set up a new runner with a name and configuration.</p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Start your runner</h3>
                <div className="code-block">
                  <code>salamander start</code>
                </div>
                <p>Select and start your runner. Once running, it will listen for commands from the Salamander app.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="setup-section">
          <h2>Available Commands</h2>
          <div className="commands-grid">
            <div className="command-item">
              <h3><code>salamander</code></h3>
              <p>Start the main CLI interface</p>
            </div>
            <div className="command-item">
              <h3><code>salamander create</code></h3>
              <p>Create a new runner configuration</p>
            </div>
            <div className="command-item">
              <h3><code>salamander start</code></h3>
              <p>Start runner selection and execution</p>
            </div>
            <div className="command-item">
              <h3><code>salamander logout</code></h3>
              <p>Logout from your Salamander account</p>
            </div>
          </div>
        </section>

        <section className="setup-section">
          <h2>Usage Tips</h2>
          <div className="tips-container">
            <div className="tip">
              <h3>🚀 Keep Your Runner Active</h3>
              <p>For best results, keep your runner active and connected. The CLI will handle incoming commands automatically.</p>
            </div>
            <div className="tip">
              <h3>🔧 Multiple Runners</h3>
              <p>You can create multiple runners for different projects or environments. Use descriptive names to identify them easily.</p>
            </div>
            <div className="tip">
              <h3>🔐 Authentication</h3>
              <p>Make sure you're logged into your Salamander account through the web interface before setting up runners.</p>
            </div>
            <div className="tip">
              <h3>📝 Command History</h3>
              <p>The CLI maintains logs of executed commands. Check the output for debugging and monitoring.</p>
            </div>
          </div>
        </section>

        <section className="setup-section">
          <h2>Troubleshooting</h2>
          <div className="troubleshooting-item">
            <h3>Command not found: salamander</h3>
            <p>Make sure you've installed the CLI globally with <code>npm install -g @commit451/salamander</code> and that your npm global bin directory is in your PATH.</p>
          </div>
          <div className="troubleshooting-item">
            <h3>Command not found: claude</h3>
            <p>Install Claude CLI first by following the <a href="https://docs.anthropic.com/en/docs/claude-code/cli-reference" target="_blank" rel="noopener noreferrer">official documentation</a>.</p>
          </div>
          <div className="troubleshooting-item">
            <h3>Runner not receiving commands</h3>
            <p>Ensure you're logged in and your runner is properly connected. Try restarting the runner with <code>salamander start</code>.</p>
          </div>
        </section>

        <div className="setup-footer">
          <p>Need more help? Check the <a href="#" onClick={() => window.location.hash = 'welcome'}>documentation</a> or contact support.</p>
        </div>
      </div>
    </div>
  );
};

export default Setup;