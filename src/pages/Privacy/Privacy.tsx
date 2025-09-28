import React, {useEffect} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Privacy: React.FC = () => {
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
                    <h1 style={{color: '#1f2937', marginBottom: '0.5rem'}}>Privacy Policy</h1>
                    <p style={{color: '#6b7280'}}>Last updated: 9/28/2025</p>
                </header>

                <div style={{lineHeight: '1.6', color: '#374151'}}>
                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>1. Information We Collect</h2>
                        <p>
                            Salamander collects various types of information to provide and improve our AI-powered
                            productivity service.
                            This section describes what data we collect, how it's collected, and the legal basis for
                            processing.
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Account and
                            Authentication Information</h3>
                        <p>
                            When you sign in with Google OAuth, we collect and store:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Google Account Details:</strong> Email address, display name, profile picture
                                (if available)
                            </li>
                            <li><strong>Unique Identifiers:</strong> Google user ID, Firebase user ID, and internal
                                account IDs
                            </li>
                            <li><strong>Authentication Data:</strong> OAuth tokens, refresh tokens, and session
                                information
                            </li>
                            <li><strong>Account Metadata:</strong> Account creation date, last login, subscription
                                status, and usage quotas
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Command and AI
                            Interaction Data</h3>
                        <p>
                            Our core functionality involves processing AI commands, which includes:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Commands and Queries:</strong> All text you send to AI models (Claude, Gemini,
                                Codex)
                            </li>
                            <li><strong>AI Responses:</strong> Generated content, code, and command outputs from AI
                                services
                            </li>
                            <li><strong>Local File Content:</strong> File contents accessed by AI commands on your
                                machine
                            </li>
                            <li><strong>Execution History:</strong> Command history, timestamps, success/failure status
                            </li>
                            <li><strong>Runner Configuration:</strong> Directory paths, machine identifiers, runner
                                names and types
                            </li>
                            <li><strong>Message Metadata:</strong> Sender information, message types, conversation
                                context
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Device and Technical
                            Information</h3>
                        <p>
                            We collect technical data to ensure service functionality:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Device Information:</strong> Operating system, device type, browser information,
                                IP address
                            </li>
                            <li><strong>Machine Identifiers:</strong> Unique machine IDs for CLI tool identification
                            </li>
                            <li><strong>App Performance:</strong> App crashes, errors, performance metrics via Firebase
                                Crashlytics
                            </li>
                            <li><strong>Usage Analytics:</strong> Feature usage, user interactions, session duration via
                                Firebase Analytics
                            </li>
                            <li><strong>Network Data:</strong> API call logs, response times, error rates</li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Firebase Services
                            Data</h3>
                        <p>
                            We use comprehensive Google Firebase services that collect:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Firebase Authentication:</strong> Login sessions, authentication state, security
                                events
                            </li>
                            <li><strong>Firebase Firestore:</strong> All application data, user preferences, message
                                history
                            </li>
                            <li><strong>Firebase Cloud Messaging:</strong> Device tokens, notification delivery status
                            </li>
                            <li><strong>Firebase Analytics:</strong> User behavior, feature adoption, demographic
                                insights
                            </li>
                            <li><strong>Firebase Crashlytics:</strong> Crash reports, stack traces, device state at
                                crash time
                            </li>
                            <li><strong>Firebase Performance:</strong> App startup times, network request performance
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Third-Party API
                            Data</h3>
                        <p>
                            When you use AI features, your data is processed by:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Anthropic Claude:</strong> Your commands and file contents for AI processing
                            </li>
                            <li><strong>Google Gemini:</strong> Queries and context data for AI responses</li>
                            <li><strong>OpenAI Codex:</strong> Code-related commands and file contents</li>
                        </ul>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>2. How We Use Your Information</h2>
                        <p>
                            We process your information for various purposes based on legitimate interests, contractual
                            necessity,
                            and your consent. Here's how we use different types of data:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Core Service
                            Functionality</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Account Management:</strong> Authenticate users, manage sessions, and maintain
                                account security
                            </li>
                            <li><strong>AI Command Processing:</strong> Send your commands to appropriate AI services
                                and return responses
                            </li>
                            <li><strong>Remote Execution:</strong> Coordinate command execution between mobile apps and
                                local machines
                            </li>
                            <li><strong>Data Synchronization:</strong> Keep your runners, messages, and settings
                                synchronized across devices
                            </li>
                            <li><strong>Push Notifications:</strong> Send real-time updates about command completion and
                                system status
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Service Improvement
                            and Analytics</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Performance Monitoring:</strong> Track app performance, identify bottlenecks,
                                and optimize user experience
                            </li>
                            <li><strong>Usage Analytics:</strong> Understand feature adoption, user behavior patterns,
                                and service usage trends
                            </li>
                            <li><strong>Error Detection:</strong> Identify, diagnose, and fix bugs through crash reports
                                and error logs
                            </li>
                            <li><strong>Feature Development:</strong> Analyze usage patterns to prioritize new features
                                and improvements
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Support and
                            Communication</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Customer Support:</strong> Troubleshoot issues, respond to inquiries, and
                                provide technical assistance
                            </li>
                            <li><strong>Service Announcements:</strong> Notify users of updates, maintenance, and
                                important changes
                            </li>
                            <li><strong>Security Alerts:</strong> Communicate security incidents, suspicious activity,
                                or account issues
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Legal and
                            Security</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Compliance:</strong> Meet legal obligations, respond to legal requests, and
                                enforce our Terms of Service
                            </li>
                            <li><strong>Security Monitoring:</strong> Detect fraud, abuse, and unauthorized access
                                attempts
                            </li>
                            <li><strong>Data Protection:</strong> Implement security measures and protect against data
                                breaches
                            </li>
                        </ul>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>3. Information Sharing and Third-Party
                            Services</h2>
                        <p>
                            <strong>We do not sell, rent, or trade your personal information.</strong> We only share
                            data with third parties
                            as necessary to provide our services, comply with legal obligations, or with your explicit
                            consent.
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Google Firebase
                            Platform</h3>
                        <p>
                            Your data is extensively processed through Google's Firebase platform:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Firebase Authentication:</strong> Google manages your login sessions,
                                authentication tokens, and account security
                            </li>
                            <li><strong>Firebase Firestore:</strong> All application data, messages, and settings are
                                stored in Google's database
                            </li>
                            <li><strong>Firebase Cloud Messaging:</strong> Google handles push notification delivery to
                                your devices
                            </li>
                            <li><strong>Firebase Analytics:</strong> Google processes usage data and provides anonymized
                                insights when possible
                            </li>
                            <li><strong>Firebase Crashlytics:</strong> Google collects and analyzes crash reports and
                                performance data
                            </li>
                            <li><strong>Firebase Performance:</strong> Google monitors app performance and user
                                experience metrics
                            </li>
                        </ul>
                        <p style={{marginTop: '0.5rem'}}>
                            <strong>Data Location:</strong> Your data may be stored in Google's global infrastructure.
                            Google provides enterprise-grade
                            security and compliance with international data protection standards.
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>AI Service
                            Providers</h3>
                        <p>
                            <strong>Critical Data Sharing:</strong> Your commands, queries, and local file contents are
                            sent to AI providers:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Anthropic Claude:</strong> Commands, context, and file contents for AI
                                processing. Subject to Anthropic's privacy policy and data retention practices.
                            </li>
                            <li><strong>Google Gemini:</strong> Queries and interaction data processed according to
                                Google's AI privacy policies.
                            </li>
                            <li><strong>OpenAI Codex:</strong> Code-related commands and file contents subject to
                                OpenAI's usage policies and data handling.
                            </li>
                        </ul>
                        <p style={{marginTop: '0.5rem'}}>
                            <strong>Important:</strong> These AI services may use your data to improve their models
                            unless you specifically opt out
                            through their respective platforms. Each provider has different data retention and usage
                            policies.
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Google OAuth and
                            Authentication</h3>
                        <p>
                            Authentication is exclusively handled through Google's OAuth 2.0 system. Google provides
                            your basic profile
                            information (email, name, profile picture) and manages the authentication process. We only
                            request the minimum
                            necessary permissions for account creation and management.
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Legal and Compliance
                            Sharing</h3>
                        <p>
                            We may disclose your information when required by law or to protect our rights:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>In response to valid legal process (subpoenas, court orders, search warrants)</li>
                            <li>To investigate suspected fraud, abuse, or violations of our Terms of Service</li>
                            <li>To protect the safety, rights, or property of Salamander, our users, or the public</li>
                            <li>In connection with business transfers (acquisitions, mergers, or asset sales)</li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Service Providers and
                            Vendors</h3>
                        <p>
                            We may share data with trusted service providers who assist in operating our service:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Cloud infrastructure providers for hosting and data storage</li>
                            <li>Analytics providers for usage monitoring and service improvement</li>
                            <li>Customer support tools for handling user inquiries</li>
                            <li>Security services for fraud detection and prevention</li>
                        </ul>
                        <p style={{marginTop: '0.5rem'}}>
                            All service providers are contractually required to protect your data and use it only for
                            specified purposes.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>4. Data Security and Storage</h2>
                        <p>
                            We implement comprehensive security measures to protect your information, though the nature
                            of our service
                            involves inherent security considerations given the local machine access requirements.
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Technical Security
                            Measures</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Encryption in Transit:</strong> All data transmission uses HTTPS/TLS encryption
                                between your devices and our servers
                            </li>
                            <li><strong>Encryption at Rest:</strong> Firebase provides encryption for data stored in
                                databases and file systems
                            </li>
                            <li><strong>Access Controls:</strong> Role-based access controls limit who can view your
                                personal information
                            </li>
                            <li><strong>Authentication Security:</strong> Google OAuth provides secure,
                                industry-standard authentication
                            </li>
                            <li><strong>API Security:</strong> Secure API endpoints with rate limiting and
                                authentication requirements
                            </li>
                            <li><strong>Network Security:</strong> Firewalls, intrusion detection, and network
                                monitoring
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Operational
                            Security</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Regular Audits:</strong> Security assessments and vulnerability testing</li>
                            <li><strong>Monitoring:</strong> 24/7 monitoring for suspicious activity and security
                                incidents
                            </li>
                            <li><strong>Incident Response:</strong> Procedures for handling and reporting security
                                breaches
                            </li>
                            <li><strong>Employee Training:</strong> Regular security training for team members with data
                                access
                            </li>
                            <li><strong>Third-Party Security:</strong> Firebase and Google provide enterprise-grade
                                security infrastructure
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Local Machine Security
                            Considerations</h3>
                        <p>
                            <strong>Important Security Disclaimer:</strong> The Salamander CLI tool operates with
                            elevated privileges on your local machine
                            and intentionally bypasses certain security restrictions. This creates inherent security
                            risks:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Local Access:</strong> The CLI can read and modify files in directories you
                                specify
                            </li>
                            <li><strong>Command Execution:</strong> AI-generated commands are executed directly on your
                                system
                            </li>
                            <li><strong>Network Communication:</strong> Commands and responses are transmitted over the
                                internet
                            </li>
                            <li><strong>No Sandboxing:</strong> There are no built-in restrictions on command execution
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Security
                            Limitations</h3>
                        <p>
                            <strong>No Security is Absolute:</strong> While we implement robust security measures, you
                            should be aware of limitations:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>No method of transmission over the Internet is 100% secure</li>
                            <li>Third-party services (Firebase, AI APIs) have their own security considerations</li>
                            <li>Local machine security depends on your system configuration and practices</li>
                            <li>AI-generated commands may have unintended security implications</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            <strong>User Responsibility:</strong> You are responsible for securing your local machine,
                            using appropriate directory permissions,
                            and reviewing AI-generated commands before execution. We strongly recommend running the
                            service only in isolated environments
                            with non-sensitive data.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>5. Crash Reporting and Performance
                            Monitoring</h2>
                        <p>
                            We use Firebase Crashlytics and Performance Monitoring to maintain service quality and
                            reliability:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Firebase
                            Crashlytics</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Crash Reports:</strong> Automatic collection of app crashes and fatal errors
                            </li>
                            <li><strong>Stack Traces:</strong> Technical details about where and why crashes occurred
                            </li>
                            <li><strong>Device Information:</strong> Device model, OS version, memory usage at time of
                                crash
                            </li>
                            <li><strong>User Actions:</strong> Sequence of actions leading up to crashes (anonymized)
                            </li>
                            <li><strong>Performance Issues:</strong> App startup times, memory leaks, and performance
                                bottlenecks
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Performance
                            Monitoring</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>App Performance:</strong> Launch times, screen rendering, and user interface
                                responsiveness
                            </li>
                            <li><strong>Network Performance:</strong> API response times, network request failures,
                                timeout rates
                            </li>
                            <li><strong>Custom Metrics:</strong> Command execution times, AI processing delays, runner
                                connectivity
                            </li>
                        </ul>

                        <p style={{marginTop: '1rem'}}>
                            <strong>Data Anonymization:</strong> Crash reports and performance data are typically
                            anonymized and aggregated.
                            However, they may contain device identifiers and technical information that could be
                            considered personal data
                            under some privacy regulations.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>6. Push Notifications and
                            Communication</h2>
                        <p>
                            We use Firebase Cloud Messaging (FCM) to send push notifications across all platforms:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Types of
                            Notifications</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Command Completion:</strong> Real-time updates when AI commands finish executing
                            </li>
                            <li><strong>Runner Status:</strong> Notifications about runner connectivity and availability
                            </li>
                            <li><strong>Service Updates:</strong> Important announcements about features and maintenance
                            </li>
                            <li><strong>Security Alerts:</strong> Account security warnings and suspicious activity
                                notifications
                            </li>
                            <li><strong>Error Notifications:</strong> Alerts about command failures or system errors
                            </li>
                            <li><strong>Usage Limits:</strong> Warnings about approaching quota limits or restrictions
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Notification Data</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Device Tokens:</strong> Unique identifiers for delivering notifications to your
                                devices
                            </li>
                            <li><strong>Delivery Status:</strong> Whether notifications were successfully delivered</li>
                            <li><strong>Interaction Data:</strong> Whether you opened or dismissed notifications</li>
                        </ul>

                        <p style={{marginTop: '1rem'}}>
                            <strong>Notification Control:</strong> You can disable push notifications through your
                            device settings, browser preferences,
                            or app settings. Disabling notifications may affect your ability to receive important
                            service updates and command completion alerts.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>7. Data Retention and Deletion</h2>
                        <p>
                            We retain your information for different periods based on data type, legal requirements, and
                            service necessity:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Account and Profile
                            Data</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Active Accounts:</strong> Retained while your account remains active and you
                                continue using the service
                            </li>
                            <li><strong>Account Deletion:</strong> Personal data deleted within 30 days of account
                                deletion request
                            </li>
                            <li><strong>Inactive Accounts:</strong> Accounts inactive for 2+ years may be subject to
                                deletion with prior notice
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Message and Command
                            History</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Message History:</strong> Retained for up to 1 year or until account deletion
                            </li>
                            <li><strong>Command Logs:</strong> Execution history retained for up to 6 months for
                                debugging and support
                            </li>
                            <li><strong>AI Interactions:</strong> May be retained by third-party AI providers according
                                to their policies
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Technical and
                            Analytics Data</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Error Logs:</strong> Retained for up to 12 months for service improvement and
                                debugging
                            </li>
                            <li><strong>Usage Analytics:</strong> Aggregated and anonymized data may be retained
                                indefinitely
                            </li>
                            <li><strong>Crash Reports:</strong> Retained for up to 18 months for stability improvements
                            </li>
                            <li><strong>Performance Data:</strong> Retained for up to 6 months for optimization purposes
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Legal and Compliance
                            Data</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Legal Holds:</strong> Data may be retained longer if required by legal process
                            </li>
                            <li><strong>Backup Systems:</strong> Data in backups may persist for up to 90 days after
                                deletion
                            </li>
                            <li><strong>Financial Records:</strong> Payment and billing data retained as required by law
                            </li>
                        </ul>

                        <p style={{marginTop: '1rem'}}>
                            <strong>Third-Party Retention:</strong> Data processed by Firebase, AI providers, and other
                            third-party services
                            is subject to their respective retention policies, which may differ from ours.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>8. Your Privacy Rights</h2>
                        <p>
                            Depending on your location and applicable privacy laws (GDPR, CCPA, etc.), you may have the
                            following rights
                            regarding your personal data:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Data Access and
                            Portability</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Access:</strong> Request a copy of all personal data we hold about you</li>
                            <li><strong>Portability:</strong> Request your data in a machine-readable format for
                                transfer to another service
                            </li>
                            <li><strong>Transparency:</strong> Request information about how your data is processed and
                                shared
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Data Correction and
                            Deletion</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete personal
                                data
                            </li>
                            <li><strong>Erasure:</strong> Request deletion of your personal data ("right to be
                                forgotten")
                            </li>
                            <li><strong>Account Deletion:</strong> Delete your entire account and associated data</li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Data Processing
                            Control</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Objection:</strong> Object to certain types of data processing</li>
                            <li><strong>Restriction:</strong> Request limitation of data processing in certain
                                circumstances
                            </li>
                            <li><strong>Consent Withdrawal:</strong> Withdraw consent for processing where consent is
                                the legal basis
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Exercising Your
                            Rights</h3>
                        <p>To exercise your privacy rights:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Contact us through the methods provided in Section 12</li>
                            <li>Include sufficient information to verify your identity</li>
                            <li>Specify which rights you want to exercise and for what data</li>
                            <li>We will respond within 30 days (or as required by local law)</li>
                        </ul>

                        <p style={{marginTop: '1rem'}}>
                            <strong>Limitations:</strong> Some rights may be limited by legal requirements, technical
                            constraints,
                            or the need to maintain service functionality. We will explain any limitations when
                            responding to your request.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>9. International Data Transfers</h2>
                        <p>
                            Salamander is a global service that involves data transfers across international borders.
                            Your data may be processed and stored in various locations:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Data Processing
                            Locations</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Google Firebase:</strong> Global infrastructure including data centers in the
                                US, EU, and Asia
                            </li>
                            <li><strong>Anthropic Claude:</strong> Primarily processed in the United States</li>
                            <li><strong>Google Gemini:</strong> Google's global infrastructure with data residency
                                options
                            </li>
                            <li><strong>OpenAI Codex:</strong> Primarily processed in the United States</li>
                            <li><strong>Commit 451:</strong> May process data from various global locations</li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Transfer
                            Safeguards</h3>
                        <p>International data transfers are protected by appropriate safeguards:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Standard Contractual Clauses:</strong> EU-approved contract terms for data
                                protection
                            </li>
                            <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate data
                                protection
                            </li>
                            <li><strong>Privacy Frameworks:</strong> Participation in international privacy frameworks
                                where applicable
                            </li>
                            <li><strong>Encryption:</strong> Data encrypted in transit and at rest across all locations
                            </li>
                        </ul>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>10. Children's Privacy and Age
                            Requirements</h2>
                        <p>
                            <strong>Minimum Age Requirement:</strong> Salamander is intended for users 18 years and
                            older due to the nature
                            of the service and the potential security risks involved in remote command execution.
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>No Children Under 13:</strong> We do not knowingly collect personal information
                                from children under 13
                            </li>
                            <li><strong>Teen Users (13-17):</strong> Users between 13-17 require parental consent and
                                supervision
                            </li>
                            <li><strong>Adult Verification:</strong> We may implement age verification measures</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            If we discover that we have collected information from a child under 13 without appropriate
                            consent,
                            we will delete that information immediately. Parents who believe their child's information
                            has been
                            collected should contact us immediately.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>11. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy periodically to reflect changes in our practices,
                            services,
                            or applicable laws. Our update process includes:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Notification
                            Methods</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Policy Updates:</strong> Update the "Last updated" date at the top of this
                                policy
                            </li>
                            <li><strong>Email Notifications:</strong> Send notices to your registered email address for
                                material changes
                            </li>
                            <li><strong>Push Notifications:</strong> In-app notifications for significant privacy
                                changes
                            </li>
                            <li><strong>Service Notices:</strong> Prominent notices on our website and applications</li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Notice Periods</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Material Changes:</strong> At least 30 days' advance notice for changes
                                affecting your rights
                            </li>
                            <li><strong>Minor Updates:</strong> Immediate effect for clarifications and non-material
                                changes
                            </li>
                            <li><strong>Legal Requirements:</strong> Changes required by law may take effect immediately
                                with notice
                            </li>
                        </ul>

                        <p style={{marginTop: '1rem'}}>
                            <strong>Consent to Changes:</strong> Your continued use of Salamander after the effective
                            date of changes
                            constitutes acceptance of the updated Privacy Policy. If you do not agree to changes, you
                            should
                            discontinue use and may delete your account.
                        </p>
                    </section>

                    <section>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>12. Contact Information and Privacy
                            Support</h2>
                        <p>
                            If you have questions about this Privacy Policy, your data, privacy rights, or need support
                            with privacy-related matters:
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Contact Methods</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>In-App Support:</strong> Use the support features within the Salamander
                                application
                            </li>
                            <li><strong>Account Settings:</strong> Access privacy controls and contact options in your
                                account settings
                            </li>
                            <li><strong>Website:</strong> Visit salamander.space for contact information and support
                                resources
                            </li>
                            <li><strong>Official Channels:</strong> Contact Commit 451 through our official support
                                channels
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Privacy-Specific
                            Requests</h3>
                        <p>For privacy-related requests, please include:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Your full name and email address associated with your account</li>
                            <li>Specific nature of your privacy request or concern</li>
                            <li>Any relevant details or documentation</li>
                            <li>Preferred method of response</li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1rem'}}>Response
                            Commitments</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Acknowledgment:</strong> We will acknowledge receipt of your inquiry within 48
                                hours
                            </li>
                            <li><strong>Response Time:</strong> Complete response within 30 days (or as required by
                                local law)
                            </li>
                            <li><strong>Complex Requests:</strong> May require additional time with prior notification
                            </li>
                            <li><strong>Transparency:</strong> Clear explanation of any limitations or constraints</li>
                        </ul>

                        <p style={{marginTop: '1rem'}}>
                            <strong>Privacy Commitment:</strong> We are committed to protecting your privacy and
                            addressing your concerns
                            promptly, transparently, and in accordance with applicable privacy laws. Your privacy
                            matters to us,
                            and we strive to maintain the highest standards of data protection and user trust.
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

export default Privacy;