import React, { useEffect } from 'react';
import './Welcome.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useAuth } from '../../contexts/AuthContext';

const Welcome: React.FC = () => {
    const { loadUserState } = useAuth();

    useEffect(() => {
        // Load user state when Welcome page mounts
        loadUserState();
    }, [loadUserState]);

    return (
        <div className="welcome">
            <Header/>

            <main className="welcome-main">
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <div className="hero-badge">Powered by Anthropic Claude</div>
                        <h1 className="hero-title">
                            Your Computer's AI Assistant,<br/>In Your Pocket
                        </h1>
                        <p className="hero-description">
                            Start AI coding tasks on your computer, from your phone.
                            Get notified when they're done. All using your own machine and your own tools. Attributed to you.
                        </p>

                        <div className="hero-actions">
                            <button onClick={() => window.location.hash = 'learn-more'}
                                    className="btn btn-primary">Get Started Free
                            </button>
                            <button onClick={() => window.location.hash = 'pricing'}
                                    className="btn btn-secondary">View Pricing
                            </button>
                        </div>

                        <p className="hero-tagline">Never be AFK</p>

                        <div className="hero-images">
                            {/* Step 1: Mobile Prompt */}
                            <div className="hero-image-container step-1">
                                <img src="images/prompt.png" alt="Mobile Prompt"
                                     className="hero-image hero-image-mobile"/>
                                <div className="step-label">1. Send prompt</div>
                            </div>

                            {/* Realtime Connection */}
                            <div className="connection-flow realtime-connection">
                                <div className="connection-curve">
                                    <div className="curve-line"></div>
                                    <div className="flow-dots">
                                        <div className="flow-dot dot-1"></div>
                                        <div className="flow-dot dot-2"></div>
                                        <div className="flow-dot dot-3"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2: CLI Processing */}
                            <div className="hero-image-container step-2">
                                <img src="images/cli.png" alt="CLI Processing" className="hero-image hero-image-cli"/>
                                <div className="step-label">2. AI processes</div>
                            </div>

                            {/* Push Notification Connection */}
                            <div className="connection-flow push-connection">
                                <div className="connection-curve push-curve">
                                    <div className="curve-line push-line"></div>
                                    <div className="notification-pulse">
                                        <div className="pulse-ring ring-1"></div>
                                        <div className="pulse-ring ring-2"></div>
                                        <div className="pulse-ring ring-3"></div>
                                        <div className="notification-icon">🔔</div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3: Mobile Notification */}
                            <div className="hero-image-container step-3">
                                <img src="images/notification.png" alt="Mobile Notification"
                                     className="hero-image hero-image-mobile"/>
                                <div className="step-label">3. Get notified</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Problem/Solution Section */}
                <section className="problem-solution">
                    <div className="content-container">
                        <div className="problem-solution-grid">
                            <div className="problem-card">
                                <div className="card-icon">😓</div>
                                <h3>The Problem</h3>
                                <p>Stuck waiting for AI tasks to complete? Need to step away but want to stay productive?
                                   Long-running builds, tests, and code reviews keeping you tethered to your desk?</p>
                            </div>
                            <div className="solution-card">
                                <div className="card-icon">✨</div>
                                <h3>The Solution</h3>
                                <p>Salamander lets you run AI tasks from your phone and get notified when
                                   they're done. Work from anywhere while your machine handles the heavy lifting.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="use-cases">
                    <div className="content-container">
                        <h2 className="section-title">Perfect For...</h2>
                        <div className="use-cases-grid">
                            <div className="use-case-card">
                                <div className="use-case-icon">☕</div>
                                <h3>Running Test Suites</h3>
                                <p>Start your test suite and grab coffee. Get notified when tests complete or fail.</p>
                            </div>
                            <div className="use-case-card">
                                <div className="use-case-icon">🌮</div>
                                <h3>Code Reviews</h3>
                                <p>Analyze pull requests during your lunch break. Review AI suggestions on the go.</p>
                            </div>
                            <div className="use-case-card">
                                <div className="use-case-icon">🛋️</div>
                                <h3>Debugging Sessions</h3>
                                <p>Let AI debug from your couch. Monitor progress and jump in when needed.</p>
                            </div>
                            <div className="use-case-card">
                                <div className="use-case-icon">🏢</div>
                                <h3>Long Builds</h3>
                                <p>Deploy a build before signing off for the day. Know when it's done or if there are issues without having to stay at your keyboard.</p>
                            </div>
                            <div className="use-case-card">
                                <div className="use-case-icon">💻</div>
                                <h3>Multi-Project Management</h3>
                                <p>Manage multiple projects simultaneously with separate runners for each.</p>
                            </div>
                            <div className="use-case-card">
                                <div className="use-case-icon">🔄</div>
                                <h3>Background Refactoring</h3>
                                <p>Let AI handle refactoring tasks while you focus on new features.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Salamander Section */}
                <section className="why-salamander">
                    <div className="content-container">
                        <h2 className="section-title">Why Salamander?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-icon-large">🖥️</div>
                                <h3>Your Hardware, Your Rules</h3>
                                <p>No usage limits, no cloud pricing tiers. Use your own computational resources.</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon-large">⚙️</div>
                                <h3>Your Environment</h3>
                                <p>Full compatibility with your tools, configurations, and development setup.</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon-large">✍️</div>
                                <h3>Your Commits</h3>
                                <p>Work is attributed to you, not a bot. Maintain proper commit history.</p>
                            </div>
                            <div className="benefit-card">
                                <div className="benefit-icon-large">📱</div>
                                <h3>Work Anywhere</h3>
                                <p>Control everything from your phone. Stay productive from anywhere.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BYOM Section */}
                <section className="byom-section-enhanced">
                    <div className="content-container">
                        <h2 className="byom-title">Bring Your Own Machine</h2>
                        <p className="byom-description">
                            Break free from cloud sandbox limitations and pricing tiers.
                            Run your AI on your own hardware with your configured environment,
                            your set of tools, and complete control over your development setup.
                        </p>

                        <div className="comparison-highlight">
                            <div className="comparison-col before-col">
                                <h4>Cloud AI IDEs</h4>
                                <ul>
                                    <li className="negative">Limited environment access</li>
                                    <li className="negative">Heavy fees</li>
                                    <li className="negative">Bot-attributed commits</li>
                                    <li className="negative">Restricted tool access</li>
                                </ul>
                            </div>
                            <div className="vs-divider">
                                <span>VS</span>
                            </div>
                            <div className="comparison-col after-col">
                                <h4>Salamander</h4>
                                <ul>
                                    <li className="positive">Full environment control</li>
                                    <li className="positive">Pay only for Claude API usage or Claude Pro</li>
                                    <li className="positive">Your commits, your credit</li>
                                    <li className="positive">Use any tool you want</li>
                                </ul>
                            </div>
                        </div>

                        <div className="byom-benefits">
                            <div className="benefit-item">
                                <div className="benefit-icon">💰</div>
                                <span>No cloud pricing limits</span>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🔧</div>
                                <span>Your favorite tools always available</span>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🔒</div>
                                <span>Your code stays on your machine</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Table */}
                <section className="comparison-table-section">
                    <div className="content-container">
                        <h2 className="section-title">How We Compare</h2>
                        <div className="comparison-table-wrapper">
                            <table className="comparison-table">
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th className="highlight-col">Salamander</th>
                                        <th>Cloud AI IDEs</th>
                                        <th>GitHub Copilot</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Use your own machine</td>
                                        <td className="highlight-col"><span className="check">✓</span></td>
                                        <td><span className="cross">✗</span></td>
                                        <td><span className="cross">✗</span></td>
                                    </tr>
                                    <tr>
                                        <td>Mobile control</td>
                                        <td className="highlight-col"><span className="check">✓</span></td>
                                        <td><span className="cross">✗</span></td>
                                        <td><span className="cross">✗</span></td>
                                    </tr>
                                    <tr>
                                        <td>Your tools & environment</td>
                                        <td className="highlight-col"><span className="check">✓</span></td>
                                        <td><span className="partial">Limited</span></td>
                                        <td><span className="partial">Limited</span></td>
                                    </tr>
                                    <tr>
                                        <td>Direct commit attribution</td>
                                        <td className="highlight-col"><span className="check">✓</span></td>
                                        <td><span className="cross">Bot commits</span></td>
                                        <td><span className="cross">Bot commits</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ/Security Section */}
                <section className="faq-section">
                    <div className="content-container">
                        <h2 className="section-title">Frequently Asked Questions</h2>
                        <div className="faq-grid">
                            <div className="faq-item">
                                <h3>Is my code sent anywhere?</h3>
                                <p>Your code stays on your machine. Only the prompts and responses are transmitted
                                   through our secure servers to enable mobile communication. The actual AI processing
                                   happens locally via Claude Code CLI.</p>
                            </div>
                            <div className="faq-item">
                                <h3>How secure is the connection?</h3>
                                <p>All communications are encrypted end-to-end. We use industry-standard security
                                   protocols and Firebase authentication to ensure your data is protected.</p>
                            </div>
                            <div className="faq-item">
                                <h3>What data do you collect?</h3>
                                <p>We collect minimal data: your account information, runner status, and message
                                   metadata for notifications. We never store your code or access your files.</p>
                            </div>
                            <div className="faq-item">
                                <h3>Do I need to keep my computer on?</h3>
                                <p>Yes, your computer needs to be awake and running for the AI to execute tasks.
                                   We recommend using tools like Caffeine (macOS) or Insomnia (Windows) to prevent sleep.</p>
                            </div>
                            <div className="faq-item">
                                <h3>What do I need to get started?</h3>
                                <p>You'll need Node.js 18+, Claude Code CLI installed, a Claude API key or Pro subscription,
                                   and (we recommend) a git-enabled project directory. Setup takes about 10 minutes.</p>
                            </div>
                            <div className="faq-item">
                                <h3>Can I run multiple projects?</h3>
                                <p>Yes! You can set up multiple runners for different projects and manage them
                                   all from the mobile app. Our Pro plan supports 25 concurrent runners.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta">
                    <div className="cta-content">
                        <h2>Ready to work smarter, from anywhere?</h2>
                        <p>Download Salamander and start your AI-powered productivity journey today. Setup takes 10 minutes.</p>
                        <div className="cta-stats">
                            <div className="stat-item">
                                <div className="stat-number">10 min</div>
                                <div className="stat-label">Setup time</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">Free</div>
                                <div className="stat-label">To start</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">∞</div>
                                <div className="stat-label">Possibilities</div>
                            </div>
                        </div>
                        <div className="cta-buttons">
                            <a href="https://play.google.com/store/apps/details?id=com.commit451.salamander"
                               className="app-store-link" target="_blank" rel="noopener noreferrer">
                                <img src="images/play_store.png" alt="Get it on Google Play"
                                     className="app-store-badge"/>
                            </a>
                            <a href="https://apps.apple.com/app/salamander-ai/id6752116173" className="app-store-link" target="_blank"
                               rel="noopener noreferrer">
                                <img src="images/app_store.svg" alt="Download on the App Store"
                                     className="app-store-badge"/>
                            </a>
                        </div>
                        <button onClick={() => window.location.hash = 'learn-more'}
                                className="btn btn-secondary cta-learn-more">
                            View Setup Guide
                        </button>
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Welcome;
