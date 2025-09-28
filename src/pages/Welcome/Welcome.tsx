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
                <section className="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Never be AFK
                        </h1>
                        <p className="hero-description">
                            With the power of AI, you can always have a presence at your computer.
                            Create a runner, choose a directory, and start a conversation with your AI.
                            While it's working, you can be out and about doing something you love.
                            Powered by Anthropic Claude and your imagination.
                        </p>

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
                                <div className="connection-label">Real-time sync</div>
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
                                        <div className="notification-icon">📱</div>
                                    </div>
                                </div>
                                <div className="connection-label">Push notification</div>
                            </div>

                            {/* Step 3: Mobile Notification */}
                            <div className="hero-image-container step-3">
                                <img src="images/notification.png" alt="Mobile Notification"
                                     className="hero-image hero-image-mobile"/>
                                <div className="step-label">3. Get notified</div>
                            </div>
                        </div>

                        <section className="byom-section">
                            <div className="byom-content">
                                <h3 className="byom-title">Bring Your Own Machine</h3>
                                <p className="byom-description">
                                    Break free from cloud sandbox limitations and pricing tiers.
                                    Run your AI on your own hardware with your configured environment,
                                    your set of tools, and complete control over your development setup.
                                    And best of all, all work can be attributed to you, not a GitHub bot.
                                </p>
                                <div className="byom-benefits">
                                    <div className="benefit-item">
                                        <div className="benefit-icon">💰</div>
                                        <span>No cloud pricing</span>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">⚙️</div>
                                        <span>Full environment access</span>
                                    </div>
                                    <div className="benefit-item">
                                        <div className="benefit-icon">🔧</div>
                                        <span>Give AI your favorite tools</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <div className="hero-actions">
                            <button onClick={() => window.location.hash = 'learn-more'}
                                    className="btn btn-secondary">Get Started
                            </button>
                        </div>
                    </div>
                </section>


                <section className="cta">
                    <div className="cta-content">
                        <h2>Ready to enhance your workflow?</h2>
                        <p>Download the Salamander app and start your AI-powered productivity journey today.</p>
                        <div className="cta-buttons">
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
                </section>
            </main>

            <Footer/>
        </div>
    );
};

export default Welcome;