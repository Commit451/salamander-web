import React, { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';

const Privacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f8fafc',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header isSubpage={true} />
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
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1 style={{ color: '#1f2937', marginBottom: '0.5rem' }}>Privacy Policy</h1>
          <p style={{ color: '#6b7280' }}>Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div style={{ lineHeight: '1.6', color: '#374151' }}>
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>1. Information We Collect</h2>
            
            <h3 style={{ color: '#374151', marginBottom: '0.5rem', marginTop: '1rem' }}>Account Information</h3>
            <p>
              When you sign in with Google, we collect and store:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Your Google account email address</li>
              <li>Your display name and profile picture (if provided by Google)</li>
              <li>Unique user identifier from Google</li>
              <li>Authentication tokens for maintaining your session</li>
            </ul>

            <h3 style={{ color: '#374151', marginBottom: '0.5rem', marginTop: '1rem' }}>Usage Data</h3>
            <p>
              We automatically collect information about how you use Salamander:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Interactions with Claude CLI through our interface</li>
              <li>Commands and queries you submit to the AI service</li>
              <li>Usage patterns and feature utilization</li>
              <li>Error logs and diagnostic information</li>
              <li>Device and browser information</li>
            </ul>

            <h3 style={{ color: '#374151', marginBottom: '0.5rem', marginTop: '1rem' }}>Firebase Data</h3>
            <p>
              We use Google Firebase services which may collect:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Device tokens for push notifications (FCM)</li>
              <li>App usage analytics and crash reports</li>
              <li>Performance monitoring data</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Authenticate and manage your account via Firebase Authentication</li>
              <li>Process your requests to Claude CLI and return AI-generated responses</li>
              <li>Store your preferences and settings in Firebase Firestore</li>
              <li>Send relevant notifications via Firebase Cloud Messaging (FCM)</li>
              <li>Monitor and improve service performance</li>
              <li>Provide customer support and troubleshoot issues</li>
              <li>Comply with legal obligations and enforce our terms of service</li>
            </ul>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>3. Information Sharing and Third-Party Services</h2>
            
            <h3 style={{ color: '#374151', marginBottom: '0.5rem' }}>Google Firebase</h3>
            <p>
              Your data is processed and stored using Google Firebase services including:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Firebase Authentication:</strong> Manages your login sessions and account data</li>
              <li><strong>Firebase Firestore:</strong> Stores your application data and preferences</li>
              <li><strong>Firebase Cloud Messaging:</strong> Handles push notifications to your devices</li>
              <li><strong>Firebase Analytics:</strong> Provides usage insights (anonymized when possible)</li>
            </ul>

            <h3 style={{ color: '#374151', marginBottom: '0.5rem', marginTop: '1rem' }}>Anthropic Claude</h3>
            <p>
              When you interact with AI features, your queries and commands are sent to Anthropic's Claude API.
              This data is subject to Anthropic's privacy policy and data handling practices.
            </p>

            <h3 style={{ color: '#374151', marginBottom: '0.5rem', marginTop: '1rem' }}>Google Sign-In</h3>
            <p>
              Authentication is handled through Google's OAuth 2.0 system, subject to Google's privacy policy.
              We only access the minimum necessary information for account creation and management.
            </p>

            <p style={{ marginTop: '1rem' }}>
              <strong>We do not sell your personal information.</strong> We only share data as necessary
              to provide our services and as described in this policy.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>4. Data Security and Storage</h2>
            <p>
              We implement security measures to protect your information:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>All data transmission is encrypted using HTTPS/TLS</li>
              <li>Firebase provides enterprise-grade security for data storage</li>
              <li>Access controls limit who can view your personal information</li>
              <li>Regular security audits and monitoring</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              However, no method of transmission over the Internet is 100% secure. While we strive
              to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>5. Push Notifications and FCM</h2>
            <p>
              We use Firebase Cloud Messaging to send push notifications:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Service updates and maintenance notifications</li>
              <li>Important account security alerts</li>
              <li>Task completion notifications</li>
              <li>Feature announcements</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              You can disable push notifications through your device settings or browser preferences.
              We store FCM device tokens to enable notification delivery.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>6. Data Retention</h2>
            <p>
              We retain your information for different periods depending on the type of data:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Account Data:</strong> Retained while your account is active and for 30 days after deletion</li>
              <li><strong>Usage Logs:</strong> Retained for up to 12 months for service improvement</li>
              <li><strong>Error Logs:</strong> Retained for up to 6 months for debugging purposes</li>
              <li><strong>Analytics Data:</strong> May be retained in aggregated form indefinitely</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              You can request account deletion at any time, which will remove your personal data
              from our systems within 30 days.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Rectification:</strong> Request correction of inaccurate personal data</li>
              <li><strong>Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Objection:</strong> Object to certain processing of your personal data</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              To exercise these rights, contact us through the methods provided below.
              We will respond to your request within 30 days.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>8. International Data Transfers</h2>
            <p>
              Your data may be processed and stored in various locations:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Google Firebase servers (various global locations)</li>
              <li>Anthropic's servers (primarily in the United States)</li>
              <li>Our application infrastructure</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              These transfers are protected by appropriate safeguards including standard contractual
              clauses and adherence to privacy frameworks.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>9. Children's Privacy</h2>
            <p>
              Salamander is not intended for children under 13 years of age. We do not knowingly
              collect personal information from children under 13. If we discover that we have
              collected information from a child under 13, we will delete it immediately.
            </p>
          </section>

          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices
              or applicable laws. When we make material changes, we will:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Update the "Last updated" date at the top of this policy</li>
              <li>Notify you via email or push notification</li>
              <li>Post a notice on our service</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              Your continued use of Salamander after changes become effective constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 style={{ color: '#1f2937', marginBottom: '1rem' }}>11. Contact Information</h2>
            <p>
              If you have questions about this Privacy Policy, your data, or your privacy rights:
            </p>
            <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Contact Commit 451 through our official support channels</li>
              <li>Use the contact methods provided in the Salamander application</li>
              <li>Send requests via the privacy contact information in your account settings</li>
            </ul>
            <p style={{ marginTop: '1rem' }}>
              We are committed to addressing your privacy concerns promptly and transparently.
            </p>
          </section>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
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
      
      <Footer />
    </div>
  );
};

export default Privacy;