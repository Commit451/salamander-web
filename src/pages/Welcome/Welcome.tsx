import React from 'react';
import './Welcome.css';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Welcome: React.FC = () => {
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
                            While it's doing the work, you can be out and about doing something you love.
                            Powered by Anthropic Claude, the best in the business.
                        </p>

                        <div className="hero-images">
                            <div className="hero-image-container">
                                <img src="images/chat.png" alt="Chat Interface" className="hero-image"/>
                            </div>
                            <div className="hero-arrow">
                                <span className="arrow">⟷</span>
                            </div>
                            <div className="hero-image-container">
                                <img src="images/cli.png" alt="CLI Interface" className="hero-image hero-image-cli"/>
                            </div>
                        </div>

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