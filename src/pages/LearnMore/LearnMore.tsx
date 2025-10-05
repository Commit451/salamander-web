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
                                    <p className="step-note">You should run the `claude` command for initial setup once
                                        installed</p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Install & Authenticate Salamander CLI</h3>
                                    <p>Install the Salamander CLI and link it with your mobile app using your
                                        account.</p>
                                    <div className="code-block">
                                        <code>npm install -g @commit451/salamander</code>
                                    </div>
                                    <p className="step-note">and then</p>
                                    <div className="code-block">
                                        <code>salamander</code>
                                    </div>
                                    <p className="step-note">Requires Node.js 18 or higher. Authentication opens a
                                        browser to complete setup.</p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Create a Runner</h3>
                                    <p>Set up a runner in your project directory to enable AI task execution.</p>
                                    <div className="code-block">
                                        <code>/path/to/your/git/enabled/project</code>
                                    </div>
                                    <p>If you have multiple projects you want to manage remotely, you can set up
                                        multiple runners.</p>
                                    <p className="step-note">Choose a directory where you want AI assistance. We highly
                                        recommend you have git set up, so that you can always roll back if needed.</p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Start your runner on your machine & control it from your phone</h3>
                                    <p>Launch the runner and start giving commands from your mobile app.</p>
                                    <ul className="feature-list">
                                        <li>Send prompts from the mobile app</li>
                                        <li>Receive push notifications</li>
                                        <li>View command outputs</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">5</div>
                                <div className="step-content">
                                    <h3>Keep your machine awake</h3>
                                    <p>You will need to keep your machine from going to sleep.
                                        We recommend the following:</p>
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
                                    <p className="step-note">If these apps are not permitted, you can always get a <a
                                        href="https://a.co/d/cygzeFj" target="_blank" rel="noopener noreferrer" style={{
                                        color: 'var(--primary-color)',
                                        textDecoration: 'underline'
                                    }}>mouse mover</a></p>
                                </div>
                            </div>

                            <div className="step-card">
                                <div className="step-number">6</div>
                                <div className="step-content">
                                    <h3>Download the Mobile App</h3>
                                    <p>Get the Salamander app on your phone to control your computer
                                        remotely and get notified when work is complete.</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="help-section">
                    <div className="content-container">
                        <div className="help-content">
                            <h2 className="help-title">Stuck? Reach out to us!</h2>
                            <p className="help-description">
                                Need assistance getting set up or running into issues? We're here to help!
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