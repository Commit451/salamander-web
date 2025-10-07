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
                    <p style={{color: '#6b7280'}}>Last updated: 9/28/2025</p>
                </header>

                <div style={{lineHeight: '1.6', color: '#374151'}}>
                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using Salamander ("Service", "Platform", "App"), you accept and agree to be
                            bound by these Terms of Service ("Terms").
                            Salamander is a platform that enables remote AI-powered command execution on your local
                            machine through multiple interfaces including
                            mobile applications, web interface, and command-line tools. If you do not agree to these
                            Terms, please do not use this Service.
                        </p>
                        <p style={{marginTop: '1rem'}}>
                            These Terms constitute a legally binding agreement between you and Commit 451 ("we", "us",
                            "our").
                            By creating an account or using any part of our Service, you acknowledge that you have read,
                            understood, and agree to be bound by these Terms.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>2. Description of Service</h2>
                        <p>
                            Salamander is a comprehensive AI-powered productivity platform that provides:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Remote AI Command Execution:</strong> Execute AI commands on your local machine
                                from mobile or web interfaces
                            </li>
                            <li><strong>Multi-Platform AI Integration:</strong> Support for Claude (Anthropic) and Codex (OpenAI) AI models, with Gemini (Google) coming at a later date
                            </li>
                            <li><strong>Cross-Device Synchronization:</strong> Access your AI runners from mobile apps,
                                web browser, and command-line tools
                            </li>
                            <li><strong>Real-time Communication:</strong> Push notifications and real-time messaging via
                                Firebase Cloud Messaging (FCM)
                            </li>
                            <li><strong>Secure Authentication:</strong> Google OAuth 2.0 integration for account
                                management
                            </li>
                            <li><strong>Data Storage and Analytics:</strong> Firebase Firestore for data persistence and
                                Firebase Analytics for usage insights
                            </li>
                            <li><strong>Error Monitoring:</strong> Firebase Crashlytics for crash reporting and service
                                reliability improvement
                            </li>
                            <li><strong>Command History and Management:</strong> Track and manage AI command
                                interactions across all your devices
                            </li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            The Service allows you to create "runners" - AI agents that can execute commands in
                            specified directories on your local machine.
                            You can interact with these runners remotely through our mobile apps or web interface while
                            they operate with administrative privileges on your system.
                        </p>
                        <p style={{marginTop: '1rem'}}>
                            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any
                            time, with or without notice.
                            We may also impose limits on certain features or restrict access to parts of the Service
                            without notice or liability.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>3. User Accounts and Authentication</h2>
                        <p>
                            To use Salamander, you must create an account by authenticating with Google Sign-In. By
                            creating an account, you represent and warrant that:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>You are at least 18 years old and have the legal capacity to enter into these Terms</li>
                            <li>All information you provide is accurate, current, and complete</li>
                            <li>You will maintain and update your information to keep it accurate and current</li>
                            <li>You are the rightful owner of the Google account used for authentication</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>You are responsible for:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Maintaining the security and confidentiality of your Google account credentials</li>
                            <li>All activities that occur under your account, including commands executed by your
                                runners
                            </li>
                            <li>Notifying us immediately of any unauthorized use of your account or security breaches
                            </li>
                            <li>Ensuring compliance with all applicable laws when using the Service</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            We use Firebase Authentication to manage user sessions and store minimal user profile
                            information
                            in Firebase Firestore for service functionality. Your account includes usage quotas and
                            limits that may vary based on your subscription level.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>4. Runner Installation and System
                            Access</h2>
                        <p>
                            <strong>CRITICAL SECURITY NOTICE:</strong> Salamander's CLI tool ("Runner") executes
                            commands with elevated privileges on your local machine,
                            including the use of flags like <code>--dangerously-skip-permissions</code>. By installing
                            and using the Runner, you acknowledge and accept that:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Full System Access:</strong> The Runner can read, write, modify, and delete
                                files in the directories you specify
                            </li>
                            <li><strong>Command Execution:</strong> AI-generated commands will be executed directly on
                                your system with your user privileges
                            </li>
                            <li><strong>Security Bypasses:</strong> Permission checks are intentionally bypassed for
                                functionality
                            </li>
                            <li><strong>Remote Control:</strong> Commands sent from mobile interfaces will execute on
                                your local machine
                            </li>
                            <li><strong>No Sandboxing:</strong> There are no built-in restrictions on what commands can
                                be executed
                            </li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            <strong>YOU USE THE RUNNER AT YOUR OWN RISK.</strong> We strongly recommend only running the
                            service in isolated environments
                            or directories that do not contain sensitive data. Never run the service with
                            administrative/root privileges or in system directories.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>5. Acceptable Use and AI Service
                            Integration</h2>
                        <p>You agree to use Salamander responsibly and in compliance with:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>All applicable local, state, federal, and international laws and regulations</li>
                            <li>Anthropic's Claude API terms of service and usage policies</li>
                            <li>OpenAI's Codex API terms of service and usage policies</li>
                            <li>Google's terms of service for Firebase, OAuth, and related services</li>
                            <li>Google's AI principles and usage policies (for Gemini integration)</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>You expressly agree NOT to use the Service to:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Execute illegal, harmful, malicious, or destructive commands</li>
                            <li>Access, modify, or destroy data without proper authorization</li>
                            <li>Circumvent security measures, usage quotas, or licensing restrictions</li>
                            <li>Reverse engineer, decompile, or attempt to extract underlying AI models</li>
                            <li>Generate harmful, discriminatory, threatening, or misleading content</li>
                            <li>Spam, abuse, or overload the Service infrastructure or third-party APIs</li>
                            <li>Violate intellectual property rights or privacy of third parties</li>
                            <li>Interfere with or disrupt other users' access to the Service</li>
                            <li>Impersonate others or misrepresent your identity or affiliation</li>
                            <li>Collect personal information from other users without consent</li>
                        </ul>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>6. Data Processing and Privacy</h2>
                        <p>
                            Your privacy is important to us. Our Service processes data through multiple third-party
                            services and systems:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Google Firebase:</strong> Authentication, Firestore database, Cloud Messaging,
                                Analytics, and Crashlytics
                            </li>
                            <li><strong>AI Service Providers:</strong> Anthropic Claude API, Google Gemini API, and
                                OpenAI Codex for command processing
                            </li>
                            <li><strong>Local Machine Data:</strong> Commands are executed on your local machine with
                                access to your file system
                            </li>
                            <li><strong>Communication Data:</strong> Messages, commands, and responses are transmitted
                                and stored
                            </li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            <strong>Important:</strong> Commands you send through the Service may contain sensitive
                            information from your local file system.
                            This data is processed by third-party AI services and may be subject to their data retention
                            and processing policies.
                            Please review our Privacy Policy and the privacy policies of Google, Anthropic, and OpenAI
                            to understand how your data is handled.
                        </p>
                        <p style={{marginTop: '1rem'}}>
                            We implement Firebase Crashlytics to monitor application stability and performance. This
                            service may collect
                            technical information about crashes and errors, including device information and usage
                            patterns.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>7. Subscription Terms</h2>
                        <p>
                            Salamander offers an optional subscription service that provides enhanced features and
                            increased usage limits.
                        </p>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1.5rem'}}>Subscription
                            Details</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Cost:</strong> $4.99 USD per month</li>
                            <li><strong>Billing Frequency:</strong> Monthly recurring subscription</li>
                            <li><strong>Auto-Renewal:</strong> Your subscription automatically renews each month unless
                                cancelled
                            </li>
                            <li><strong>Payment Processing:</strong> Handled securely through Google Play Store or Apple
                                App Store
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1.5rem'}}>Subscription
                            Benefits</h3>
                        <p>The subscription provides:</p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Increased daily message limits</li>
                            <li>Additional AI runner instances</li>
                            <li>Priority support and faster response times</li>
                            <li>Enhanced data storage and transfer limits</li>
                            <li>Early access to new features and AI models</li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1.5rem'}}>Important Notes
                            About the Subscription</h3>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Optional Service:</strong> A subscription is NOT required to use Salamander. The
                                core functionality of the app is available to all users with a free account
                            </li>
                            <li><strong>Cancellation:</strong> You may cancel your subscription at any time through your
                                Google Play Store or Apple App Store account settings
                            </li>
                            <li><strong>Effective Period:</strong> Cancellations take effect at the end of your current
                                billing cycle
                            </li>
                            <li><strong>No Refunds:</strong> Subscription fees are non-refundable, except as required by
                                applicable law
                            </li>
                            <li><strong>Price Changes:</strong> We may change subscription pricing with 30 days' advance
                                notice
                            </li>
                            <li><strong>Geographic Availability:</strong> Subscription availability and pricing may vary
                                by region
                            </li>
                        </ul>

                        <h3 style={{color: '#374151', marginBottom: '0.5rem', marginTop: '1.5rem'}}>Free Tier
                            Limitations</h3>
                        <p>
                            Users without an active subscription have access to the full Salamander platform with the
                            following limitations:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Reduced daily message and command limits</li>
                            <li>Limited number of concurrent AI runners</li>
                            <li>Standard support response times</li>
                            <li>Basic data storage and transfer allowances</li>
                        </ul>

                        <p style={{marginTop: '1rem'}}>
                            <strong>Subscription Management:</strong> All subscription billing, cancellations, and
                            refund requests must be handled
                            through the respective app store (Google Play Store or Apple App Store) where you purchased
                            the subscription.
                            Salamander does not directly process subscription payments or handle billing inquiries.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>8. Usage Quotas and Service Levels</h2>
                        <p>
                            Your account includes usage quotas that may vary based on your subscription status and may
                            limit:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Number of messages or commands per period</li>
                            <li>Number of active runners per account</li>
                            <li>API calls to third-party AI services</li>
                            <li>Data storage and transfer limits</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            We reserve the right to modify quotas, implement rate limiting, or suspend access for
                            accounts that exceed
                            reasonable usage patterns or violate these Terms.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>9. Third-Party Services and
                            Integration</h2>
                        <p>
                            Salamander relies heavily on third-party services. Your use of the Service involves
                            interaction with:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li><strong>Google Services:</strong> Firebase, OAuth, Analytics, Crashlytics, and Gemini AI
                            </li>
                            <li><strong>Anthropic:</strong> Claude AI API for natural language processing</li>
                            <li><strong>OpenAI:</strong> Codex API for code generation and analysis</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            <strong>Third-Party Terms Apply:</strong> Your use of these integrated services is subject
                            to their respective terms of service,
                            privacy policies, and usage guidelines. We are not responsible for the availability,
                            practices, content, or policies of these third-party services.
                            Service disruptions or changes to third-party APIs may affect Salamander's functionality.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>10. DISCLAIMER OF WARRANTIES</h2>
                        <p>
                            <strong>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND,
                                EXPRESS OR IMPLIED.</strong>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT
                            LIMITED TO:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
                            <li>THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE</li>
                            <li>THAT AI-GENERATED COMMANDS WILL BE ACCURATE, SAFE, OR APPROPRIATE</li>
                            <li>THAT DATA WILL NOT BE LOST, CORRUPTED, OR COMPROMISED</li>
                            <li>THAT THIRD-PARTY SERVICES WILL REMAIN AVAILABLE OR UNCHANGED</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            <strong>AI ACCURACY DISCLAIMER:</strong> AI-generated content and commands may be
                            inaccurate, incomplete, or inappropriate.
                            Always review and validate AI outputs before execution, especially for critical operations.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>11. LIMITATION OF LIABILITY</h2>
                        <p>
                            <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMMIT 451 AND ITS AFFILIATES, OFFICERS,
                                EMPLOYEES, AGENTS, PARTNERS,
                                AND LICENSORS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                                PUNITIVE, OR EXEMPLARY DAMAGES,
                                INCLUDING BUT NOT LIMITED TO:</strong>
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>LOSS OF PROFITS, REVENUE, DATA, USE, OR OTHER ECONOMIC ADVANTAGE</li>
                            <li>DAMAGE TO YOUR COMPUTER SYSTEM, SOFTWARE, OR FILES</li>
                            <li>UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR DATA</li>
                            <li>DAMAGES RESULTING FROM AI-EXECUTED COMMANDS</li>
                            <li>BUSINESS INTERRUPTION OR LOSS OF PRODUCTIVITY</li>
                            <li>THIRD-PARTY SERVICE FAILURES OR DATA BREACHES</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            <strong>AGGREGATE LIABILITY CAP:</strong> OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
                            FROM OR RELATING TO THE SERVICE
                            SHALL NOT EXCEED THE AMOUNT YOU PAID TO US FOR THE SERVICE IN THE 12 MONTHS PRECEDING THE
                            CLAIM, OR $100, WHICHEVER IS GREATER.
                        </p>
                        <p style={{marginTop: '1rem'}}>
                            <strong>SECURITY AND DATA LOSS:</strong> WE ARE NOT LIABLE FOR ANY SECURITY BREACHES, DATA
                            LOSS, OR DAMAGE
                            RESULTING FROM THE USE OF THE RUNNER ON YOUR LOCAL MACHINE OR THE EXECUTION OF AI-GENERATED
                            COMMANDS.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>12. Indemnification</h2>
                        <p>
                            You agree to indemnify, defend, and hold harmless Commit 451, its affiliates, officers,
                            directors, employees,
                            agents, and licensors from and against any claims, liabilities, damages, losses, costs, or
                            expenses (including
                            reasonable attorneys' fees) arising from or relating to:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Your use or misuse of the Service</li>
                            <li>Commands executed by your runners on your local machine</li>
                            <li>Your violation of these Terms or applicable laws</li>
                            <li>Your violation of third-party rights, including intellectual property rights</li>
                            <li>Data breaches or security incidents originating from your local machine</li>
                            <li>Any content you submit through the Service</li>
                        </ul>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>13. Termination</h2>
                        <p>
                            Either party may terminate your access to the Service at any time, with or without cause or
                            notice.
                            Upon termination:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Your access to the Service will be immediately revoked</li>
                            <li>Any outstanding usage quotas or credits may be forfeited</li>
                            <li>We may delete your account data according to our data retention policies</li>
                            <li>You must immediately stop using all components of the Service, including the CLI tool
                            </li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            We reserve the right to terminate accounts that violate these Terms, exceed usage quotas,
                            or engage in prohibited activities without prior notice.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>14. Service Availability and Changes</h2>
                        <p>
                            We strive to maintain service availability but cannot guarantee uninterrupted access.
                            The Service may be temporarily or permanently unavailable due to:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Scheduled maintenance or updates</li>
                            <li>Third-party service outages (Firebase, AI APIs, etc.)</li>
                            <li>Technical issues or security incidents</li>
                            <li>Changes to third-party APIs or policies</li>
                            <li>Legal or regulatory requirements</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any
                            time
                            without prior notice or liability.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>15. Governing Law and Dispute
                            Resolution</h2>
                        <p>
                            These Terms are governed by and construed in accordance with the laws of the jurisdiction
                            where
                            Commit 451 is located, without regard to conflict of law principles. Any disputes arising
                            from
                            these Terms or your use of the Service shall be resolved through binding arbitration in
                            accordance
                            with the rules of the American Arbitration Association, except for claims seeking injunctive
                            relief.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>16. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these Terms at any time. When we make material changes, we
                            will:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Update the "Last updated" date at the top of these Terms</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            Your continued use of the Service after changes become effective constitutes acceptance of
                            the new Terms.
                            If you do not agree to the changes, you must stop using the Service and may terminate your
                            account.
                        </p>
                    </section>

                    <section style={{marginBottom: '2rem'}}>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>17. Miscellaneous</h2>
                        <p>
                            These Terms constitute the entire agreement between you and Commit 451 regarding the
                            Service.
                            If any provision is deemed invalid or unenforceable, the remaining provisions will remain in
                            full effect.
                            Our failure to enforce any provision does not waive our right to do so later. These Terms
                            are binding
                            on your heirs, successors, and assigns.
                        </p>
                    </section>

                    <section>
                        <h2 style={{color: '#1f2937', marginBottom: '1rem'}}>18. Contact Information</h2>
                        <p>
                            If you have questions about these Terms of Service, please contact Commit 451:
                        </p>
                        <ul style={{marginLeft: '1.5rem', marginTop: '0.5rem'}}>
                            <li>Through our official support channels in the Salamander application</li>
                            <li>Via the contact methods provided in your account settings</li>
                            <li>Through our website at salamander.space</li>
                        </ul>
                        <p style={{marginTop: '1rem'}}>
                            For legal matters, please mark your communication as "Legal Notice" and allow up to 30 days
                            for response.
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