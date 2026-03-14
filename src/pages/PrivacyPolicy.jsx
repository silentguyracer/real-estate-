import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-container">
      <AnimatedBackground />
      <Header />
      <main className="content-wrapper">
        <div className="legal-page-container">
          <div className="legal-content-wrapper">
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-last-updated">Last Updated: March 14, 2026</div>
            
            <div className="legal-text">
              <p>Welcome to Springs Estate (“Company,” “we,” “our,” or “us”). We operate the website <a href="http://www.springs.estate">www.springs.estate</a> (“Website”) which provides real estate services including property listings, property searches, broker connections, and related services.</p>
              
              <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit or use our website.</p>
              
              <p>By using the Website, you agree to the practices described in this Privacy Policy.</p>

              <h2>1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>

              <h3>1.1 Personal Information</h3>
              <p>When you register, contact us, or submit property inquiries, we may collect:</p>
              <ul>
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Postal address</li>
                <li>City and state</li>
                <li>Property preferences</li>
                <li>Identification documents (if required for transactions)</li>
              </ul>

              <h3>1.2 Property Related Information</h3>
              <p>If you list property on our website we may collect:</p>
              <ul>
                <li>Property location and address</li>
                <li>Property images and videos</li>
                <li>Property pricing and specifications</li>
                <li>Ownership information</li>
                <li>Legal documentation related to the property</li>
              </ul>

              <h3>1.3 Automatically Collected Information</h3>
              <p>When you visit the website, we may automatically collect:</p>
              <ul>
                <li>IP address</li>
                <li>Device type</li>
                <li>Browser type</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Referring websites</li>
                <li>Location data (approximate)</li>
              </ul>

              <h3>1.4 Cookies and Tracking Technologies</h3>
              <p>We use cookies and similar technologies to:</p>
              <ul>
                <li>Improve website functionality</li>
                <li>Analyze user behavior</li>
                <li>Personalize content and listings</li>
                <li>Remember login preferences</li>
              </ul>
              <p>Users can disable cookies through browser settings.</p>

              <h2>2. How We Use Your Information</h2>
              <p>We use collected information for the following purposes:</p>

              <h3>2.1 To Provide Services</h3>
              <ul>
                <li>Display property listings</li>
                <li>Connect buyers, sellers, and agents</li>
                <li>Process inquiries and requests</li>
                <li>Manage property submissions</li>
              </ul>

              <h3>2.2 To Improve Website Experience</h3>
              <ul>
                <li>Analyze website traffic</li>
                <li>Improve user interface and features</li>
                <li>Personalize property recommendations</li>
              </ul>

              <h3>2.3 Communication</h3>
              <p>We may use your contact information to:</p>
              <ul>
                <li>Respond to inquiries</li>
                <li>Send property alerts</li>
                <li>Send updates about listings</li>
                <li>Provide customer support</li>
              </ul>

              <h3>2.4 Marketing and Promotions</h3>
              <p>With your consent, we may send:</p>
              <ul>
                <li>Real estate newsletters</li>
                <li>Property investment opportunities</li>
                <li>Promotional offers</li>
              </ul>
              <p>Users may unsubscribe at any time.</p>

              <h3>2.5 Legal Compliance</h3>
              <p>We may process your data to:</p>
              <ul>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud or illegal activity</li>
                <li>Resolve disputes</li>
              </ul>

              <h2>3. Sharing of Information</h2>
              <p>We do not sell your personal information. However, we may share information with:</p>

              <h3>3.1 Real Estate Agents and Brokers</h3>
              <p>When you inquire about a property, your details may be shared with:</p>
              <ul>
                <li>Property owners</li>
                <li>Real estate agents</li>
                <li>Brokers associated with the listing</li>
              </ul>

              <h3>3.2 Service Providers</h3>
              <p>We may share data with third-party service providers such as:</p>
              <ul>
                <li>Hosting providers</li>
                <li>Payment processors</li>
                <li>Analytics providers</li>
                <li>Customer support tools</li>
              </ul>
              <p>These providers are required to protect your information.</p>

              <h3>3.3 Legal Authorities</h3>
              <p>We may disclose information if required by law, such as:</p>
              <ul>
                <li>Government requests</li>
                <li>Legal investigations</li>
                <li>Court orders</li>
              </ul>

              <h2>4. Data Storage and Security</h2>
              <p>We implement appropriate security measures to protect your information, including:</p>
              <ul>
                <li>Secure servers</li>
                <li>Encryption protocols</li>
                <li>Access controls</li>
                <li>Regular security monitoring</li>
              </ul>
              <p>However, no internet transmission is completely secure, and we cannot guarantee absolute security.</p>

              <h2>5. User Accounts</h2>
              <p>If you create an account on our website:</p>
              <ul>
                <li>You are responsible for maintaining login confidentiality.</li>
                <li>Notify us immediately if you suspect unauthorized access.</li>
                <li>We reserve the right to suspend accounts that violate policies.</li>
              </ul>

              <h2>6. Third-Party Links</h2>
              <p>Our website may contain links to external websites such as:</p>
              <ul>
                <li>Real estate partners</li>
                <li>Mortgage providers</li>
                <li>Legal services</li>
              </ul>
              <p>We are not responsible for the privacy practices of third-party websites.</p>

              <h2>7. Your Privacy Rights</h2>
              <p>Depending on your location, you may have rights such as:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Restrict processing of your data</li>
                <li>Withdraw consent</li>
              </ul>
              <p>To exercise these rights, contact us using the information below.</p>

              <h2>8. Children's Privacy</h2>
              <p>Our website is not intended for children under 18.</p>
              <p>We do not knowingly collect personal information from children.</p>
              <p>If we discover such data has been collected, it will be deleted immediately.</p>

              <h2>9. Data Retention</h2>
              <p>We retain your personal data only for as long as necessary to:</p>
              <ul>
                <li>Provide services</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes</li>
              </ul>
              <p>Once the data is no longer required, it will be securely deleted.</p>

              <h2>10. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy periodically.</p>
              <p>Changes will be posted on this page with an updated "Last Updated" date.</p>
              <p>Users are encouraged to review this policy regularly.</p>

              <h2>11. Contact Information</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <p>
                Company Name: Springs Estate<br/>
                Website: <a href="http://www.springs.estate">www.springs.estate</a><br/>
                Email: <a href="mailto:support@springs.estate">support@springs.estate</a><br/>
                Phone: +1 (234) 567-890<br/>
                Address: 123 Luxury Avenue, Metropolis
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
