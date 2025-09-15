import React, {useEffect} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div style={{
            minHeight: '100vh',
            fontFamily: "'Fira Code', 'JetBrains Mono', 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace",
            backgroundColor: '#f8fafc',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Header isSubpage={true}/>
            <div style={{
                flex: 1,
                maxWidth: '800px',
                margin: '0 auto',
                padding: '2rem',
                backgroundColor: 'white',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                marginTop: '7rem',
                marginBottom: '2rem',
                borderRadius: '8px'
            }}>
                <header style={{marginBottom: '2rem', textAlign: 'center'}}>
                    <h1 style={{color: '#1f2937', marginBottom: '0.5rem'}}>Terms of Service</h1>
                    <p style={{color: '#6b7280'}}>Last updated: {new Date().toLocaleDateString()}</p>
                </header>

                <div style={{lineHeight: '1.6', color: '#374151'}}>
                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Salamander, you accept and agree to be bound by these terms of
                            service.
                            Salamander is an application that integrates with Claude CLI (Anthropic's command-line
                            interface)
                            to provide AI-powered development tools and services. If you do not agree to these terms,
                            please do not use this service.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>2. Description of Service</h2>
                        <p>
                            Salamander provides an interface for Claude CLI functionality, including but not limited to:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>AI-powered code assistance and development tools</li>
                            <li>Integration with Google Firebase services for authentication and data storage</li>
                            <li>Push notifications via Firebase Cloud Messaging (FCM)</li>
                            <li>User account management through Google Sign-In</li>
                            <li>Data synchronization across devices</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            We reserve the right to modify, suspend, or discontinue any aspect of the service at any
                            time.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>3. User Accounts and Authentication</h2>
                        <p>
                            To use Salamander, you must authenticate using Google Sign-In. By doing so, you agree to:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Provide accurate and current information</li>
                            <li>Maintain the security of your Google account credentials</li>
                            <li>Accept responsibility for all activities under your account</li>
                            <li>Notify us immediately of any unauthorized use of your account</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            We use Firebase Authentication to manage user sessions and may store user profile
                            information
                            in Firebase Firestore for service functionality.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>4. Acceptable Use and AI Service
                            Integration</h2>
                        <p>You agree to use Salamander responsibly and in compliance with:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>All applicable laws and regulations</li>
                            <li>Anthropic's Claude usage policies and terms of service</li>
                            <li>Google's terms of service for Firebase and related services</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>You agree NOT to:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Use the service for illegal, harmful, or malicious purposes</li>
                            <li>Attempt to circumvent usage limitations or security measures</li>
                            <li>Reverse engineer or attempt to extract the underlying AI models</li>
                            <li>Use the service to generate harmful, discriminatory, or misleading content</li>
                            <li>Overload or abuse the service infrastructure</li>
                        </ul>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>5. Data and Privacy</h2>
                        <p>
                            Your privacy is important to us. Our service processes data through multiple third-party
                            services:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Google Firebase (authentication, database, push notifications)</li>
                            <li>Anthropic Claude API (AI processing)</li>
                            <li>Your interactions may be subject to the privacy policies of these services</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            Please review our Privacy Policy and the privacy policies of Google and Anthropic
                            to understand how your data is handled.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>6. Push Notifications</h2>
                        <p>
                            Salamander may send push notifications via Firebase Cloud Messaging (FCM) for:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Service updates and important announcements</li>
                            <li>Task completion notifications</li>
                            <li>Security alerts</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            You can manage notification preferences through your device settings or our application
                            settings.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>7. Third-Party Services</h2>
                        <p>
                            Salamander integrates with third-party services including Google Firebase and Anthropic
                            Claude.
                            Your use of these integrated services is subject to their respective terms of service and
                            privacy policies. We are not responsible for the practices or content of these third-party
                            services.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>8. Limitation of Liability</h2>
                        <p>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, SALAMANDER AND ITS OPERATORS SHALL NOT BE LIABLE
                            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT
                            LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE
                            OF THE SERVICE.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>9. Service Availability</h2>
                        <p>
                            We strive to maintain service availability but cannot guarantee uninterrupted access.
                            The service may be temporarily unavailable due to maintenance, updates, or issues with
                            third-party dependencies including Firebase, Google services, or Anthropic's Claude API.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>10. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. Material changes will be
                            communicated through the service, via email, or push notifications. Continued use
                            of the service after changes constitutes acceptance of the new terms.
                        </p>
                    </section>

                    <section>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>11. Contact Information</h2>
                        <p>
                            If you have questions about these Terms of Service, please contact Commit 451
                            through our official support channels or via the contact methods provided in the
                            application.
                        </p>
                    </section>
                </div>

                <div style={{marginTop: '2rem', textAlign: 'center'}}>
                    <button
                        onClick={() => window.location.hash = 'welcome'}
                        style={{
                            backgroundColor: '#2563eb',
                            color: 'white',
                            border: 'none',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '1rem'
                        }}
                    >
                        Back to Home
                    </button>
                </div>
            </div>

            <Footer/>
        </div>
    );
};

export default Terms;