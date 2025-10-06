import React from 'react';
import './LearnMore.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const LearnMore: React.FC = () => {
    const [isIOS, setIsIOS] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);

        // Detect iOS
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
        setIsIOS(isIOSDevice);
    }, []);

    return (
        <div className="learn-more">
            <Header isSubpage={true}/>

            <main className="learn-more-main">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="page-title">Get Started in 10 Minutes</h1>
                        <p className="page-subtitle">
                            Set up your AI-powered workflow and start working from anywhere
                        </p>
                    </div>
                </section>

                {/* Prerequisites Section */}
                <section className="prerequisites-section">
                    <div className="content-container">
                        <h2 className="section-title">What You'll Need</h2>
                        <div className="prerequisites-grid">
                            <div className="prereq-card">
                                <div className="prereq-icon">📦</div>
                                <h3>Node.js 18+</h3>
                                <p>Required to run the Salamander CLI</p>
                            </div>
                            <div className="prereq-card">
                                <div className="prereq-icon">🔑</div>
                                <h3>Anthropic API key or Claude Pro subscription</h3>
                                <p>Powers Claude Code CLI</p>
                            </div>
                            <div className="prereq-card">
                                <div className="prereq-icon">📁</div>
                                <h3>Git Project</h3>
                                <p>A directory with git initialized (recommended for safety)</p>
                            </div>
                            <div className="prereq-card">
                                <div className="prereq-icon">💻</div>
                                <h3>Computer That Stays On</h3>
                                <p>Your machine must be awake to run tasks</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Start vs Detailed Setup */}
                <section className="setup-options">
                    <div className="content-container">
                        <div className="options-toggle">
                            <h2 className="section-title">Setup Guide</h2>
                            <p className="options-description">
                                Follow these steps to get Salamander running on your machine
                            </p>
                        </div>
                    </div>
                </section>

                <section className="setup-steps">
                    <div className="content-container">
                        <div className="steps-grid">

                            <div className="step-card">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Install Claude Code CLI</h3>
                                    <p>First, install the Claude Code CLI which powers the AI capabilities.</p>
                                    <div className="code-block">
                                        <code>Visit <a href="https://docs.anthropic.com/en/docs/claude-code/overview"
                                                       target="_blank" rel="noopener noreferrer" style={{
                                            color: 'var(--primary-color)',
                                            textDecoration: 'underline'
                                        }}>Claude Code Documentation</a> for installation instructions</code>
                                    </div>
                                    <div className="step-tips">
                                        <div className="tip-item">
                                            <span className="tip-icon">💡</span>
                                            <span>Follow the setup guide for your operating system</span>
                                        </div>
                                        <div className="tip-item">
                                            <span className="tip-icon">✅</span>
                                            <span>Run the <code className="inline-code">claude</code> command for initial setup once installed</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Download the Mobile App</h3>
                                    <p>Get the Salamander app on your phone to control your computer remotely.</p>
                                    <div className="app-downloads">
                                        {!isIOS && (
                                            <a href="https://play.google.com/store/apps/details?id=com.commit451.salamander"
                                               className="app-store-link" target="_blank" rel="noopener noreferrer">
                                                <img src="images/play_store.png" alt="Get it on Google Play"
                                                     className="app-store-badge"/>
                                            </a>
                                        )}
                                        <a href="https://apps.apple.com/app/salamander-ai/id6752116173" className="app-store-link" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="images/app_store.svg" alt="Download on the App Store"
                                                 className="app-store-badge"/>
                                        </a>
                                    </div>
                                    <div className="step-tips">
                                        <div className="tip-item">
                                            <span className="tip-icon">📱</span>
                                            <span>Available on both iOS and Android</span>
                                        </div>
                                        <div className="tip-item">
                                            <span className="tip-icon">🔐</span>
                                            <span>Sign in with Google to create your account</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Install & Authenticate Salamander CLI</h3>
                                    <p>Install the Salamander CLI and link it with your mobile app.</p>
                                    <div className="code-block">
                                        <code>npm install -g @commit451/salamander</code>
                                    </div>
                                    <p className="step-note">Then authenticate:</p>
                                    <div className="code-block">
                                        <code>salamander</code>
                                    </div>
                                    <div className="step-tips">
                                        <div className="tip-item">
                                            <span className="tip-icon">⚠️</span>
                                            <span>Requires Node.js 18 or higher</span>
                                        </div>
                                        <div className="tip-item">
                                            <span className="tip-icon">🌐</span>
                                            <span>Authentication opens a browser to complete setup with your Google account</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Create a Runner</h3>
                                    <p>Set up a runner in your project directory to enable AI task execution.</p>
                                    <div className="code-block">
                                        <code>cd /path/to/your/project</code>
                                    </div>
                                    <div className="step-tips">
                                        <div className="tip-item">
                                            <span className="tip-icon">🔄</span>
                                            <span>If you have multiple projects, you can set up multiple runners</span>
                                        </div>
                                        <div className="tip-item">
                                            <span className="tip-icon">💾</span>
                                            <span>We highly recommend using git so you can always roll back changes</span>
                                        </div>
                                        <div className="tip-item">
                                            <span className="tip-icon">📂</span>
                                            <span>The runner monitors this directory for AI tasks from your phone</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Keep Your Machine Awake</h3>
                                    <p>Your computer needs to stay awake for the AI to execute tasks.
                                        We recommend these tools:</p>
                                    <ul className="feature-list">
                                        <li><a href="https://dlaa.me/Insomnia/" target="_blank"
                                               rel="noopener noreferrer" style={{
                                            color: 'var(--primary-color)',
                                            textDecoration: 'underline'
                                        }}>Insomnia</a> for Windows
                                        </li>
                                        <li><a href="https://www.caffeine-app.net/" target="_blank"
                                               rel="noopener noreferrer" style={{
                                            color: 'var(--primary-color)',
                                            textDecoration: 'underline'
                                        }}>Caffeine</a> for macOS
                                        </li>
                                        <li><a href="https://codeberg.org/WhyNotHugo/caffeine-ng" target="_blank"
                                               rel="noopener noreferrer" style={{
                                            color: 'var(--primary-color)',
                                            textDecoration: 'underline'
                                        }}>Caffeine-ng</a> for Linux
                                        </li>
                                    </ul>
                                    <div className="step-tips">
                                        <div className="tip-item">
                                            <span className="tip-icon">🖱️</span>
                                            <span>If these apps are not permitted, you can use a <a
                                                href="https://a.co/d/cygzeFj" target="_blank" rel="noopener noreferrer" style={{
                                                color: 'var(--primary-color)',
                                                textDecoration: 'underline'
                                            }}>mouse mover</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">6</div>
                                <div className="step-content">
                                    <h3>Start Using Salamander!</h3>
                                    <p>Open the mobile app and start sending prompts to your computer.</p>
                                    <div className="final-steps">
                                        <div className="final-step-item">
                                            <span className="final-icon">1️⃣</span>
                                            <span>Select your runner in the mobile app</span>
                                        </div>
                                        <div className="final-step-item">
                                            <span className="final-icon">2️⃣</span>
                                            <span>Send a prompt from your phone</span>
                                        </div>
                                        <div className="final-step-item">
                                            <span className="final-icon">3️⃣</span>
                                            <span>Get notified when the task is complete</span>
                                        </div>
                                    </div>
                                    <div className="step-tips">
                                        <div className="tip-item">
                                            <span className="tip-icon">🎉</span>
                                            <span>That's it! You can now work from anywhere</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tips & Tricks */}
                <section className="tips-section">
                    <div className="content-container">
                        <h2 className="section-title">Pro Tips</h2>
                        <div className="tips-grid">
                            <div className="tip-card">
                                <div className="tip-card-icon">🚀</div>
                                <h3>Start Simple</h3>
                                <p>Begin with simple tasks like "run tests" or "check git status" to get familiar
                                   with how Salamander works.</p>
                            </div>
                            <div className="tip-card">
                                <div className="tip-card-icon">📝</div>
                                <h3>Use Git</h3>
                                <p>Always use git in your projects. This allows you to easily roll back any changes
                                   made by the AI if needed.</p>
                            </div>
                            <div className="tip-card">
                                <div className="tip-card-icon">🔔</div>
                                <h3>Enable Notifications</h3>
                                <p>Make sure push notifications are enabled in the mobile app so you know instantly
                                   when tasks complete.</p>
                            </div>
                            <div className="tip-card">
                                <div className="tip-card-icon">💻</div>
                                <h3>Multiple Runners</h3>
                                <p>Set up different runners for different projects to manage multiple codebases
                                   simultaneously.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="help-section">
                    <div className="content-container">
                        <div className="help-content">
                            <h2 className="help-title">Need Help?</h2>
                            <p className="help-description">
                                Running into issues or have questions? We're here to help!
                            </p>
                            <div className="help-options">
                                <a
                                    href="https://github.com/Commit451/salamander-issue-tracker/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="help-button help-button-github"
                                >
                                    📝 Report an Issue on GitHub
                                </a>
                                <a
                                    href="mailto:commit451@gmail.com"
                                    className="help-button help-button-email"
                                >
                                    ✉️ Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer/>
        </div>
    );
};

export default LearnMore;
