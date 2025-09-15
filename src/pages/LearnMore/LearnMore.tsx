import React from 'react';
import './LearnMore.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const LearnMore: React.FC = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="learn-more">
            <Header isSubpage={true}/>

            <main className="learn-more-main">
                <section className="hero-section">
                    <div className="hero-content">
                        <h1 className="page-title">How Salamander Works</h1>
                        <p className="page-subtitle">
                            Set up your AI-powered workflow in minutes and stay productive from anywhere
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
                                    <p>Get the Salamander app on your mobile device to control your computer
                                        remotely.</p>
                                    <div className="app-downloads">
                                        <a href="https://play.google.com/store/apps/details?id=com.commit451.salamander"
                                           className="app-store-link" target="_blank" rel="noopener noreferrer">
                                            <img src="images/play_store.png" alt="Get it on Google Play"
                                                 className="app-store-badge"/>
                                        </a>
                                        <a href="https://apps.apple.com" className="app-store-link" target="_blank"
                                           rel="noopener noreferrer">
                                            <img src="images/app_store.svg" alt="Download on the App Store"
                                                 className="app-store-badge"/>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">2</div>
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
                                    <p className="step-note">Follow the setup guide for your operating system</p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Install & Authenticate Salamander CLI</h3>
                                    <p>Install the Salamander CLI and link it with your mobile app using your
                                        account.</p>
                                    <div className="code-block">
                                        <code>npm install -g @commit451/salamander</code>
                                        <code>salamander auth login</code>
                                    </div>
                                    <p className="step-note">Requires Node.js 18 or higher. Authentication opens a
                                        browser to complete setup.</p>
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
                                    <h3>Start Your Runner & Control from Mobile</h3>
                                    <p>Launch the runner and start giving commands from your mobile app.</p>
                                    <div className="code-block">
                                        <code>salamander runner start</code>
                                    </div>
                                    <ul className="feature-list">
                                        <li>Send text commands from mobile app</li>
                                        <li>Monitor task progress</li>
                                        <li>Receive push notifications</li>
                                        <li>View command outputs</li>
                                    </ul>
                                    <p className="step-note">Keep the runner running to maintain connectivity</p>
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
                                <p>Run builds, execute tests, commit changes, and deploy applications - all from your
                                    phone.</p>
                            </div>
                            <div className="feature-item">
                                <h4>File Management</h4>
                                <p>Create, edit, move, and organize files and directories through natural language
                                    commands.</p>
                            </div>
                            <div className="feature-item">
                                <h4>System Tasks</h4>
                                <p>Monitor system resources, manage processes, and execute system administration
                                    tasks.</p>
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
                                <p>Ensure both devices are connected to the internet and you're logged into the same
                                    account on both the mobile app and CLI.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Commands Not Working?</h4>
                                <p>Check that your runner is active and the CLI has the necessary permissions for the
                                    requested operations.</p>
                            </div>
                            <div className="faq-item">
                                <h4>Need Help?</h4>
                                <p>Visit our documentation or contact support through the mobile app for additional
                                    assistance.</p>
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