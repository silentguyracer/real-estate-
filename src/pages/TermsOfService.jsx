import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const TermsOfService = () => {
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
            <h1 className="legal-title">Terms of Service (Terms & Conditions)</h1>
            <div className="legal-last-updated">Last Updated: March 14, 2026</div>
            
            <div className="legal-text">
              <p>Welcome to Springs Estate. These Terms of Service ("Terms") govern your use of our website <a href="http://www.springs.estate">www.springs.estate</a> and related services (collectively referred to as the “Platform”).</p>
              
              <p>By accessing or using our Platform, you agree to comply with and be bound by these Terms. If you do not agree, you must not use our website.</p>

              <h2>1. Definitions</h2>
              <p>For the purpose of these Terms:</p>
              <ul>
                <li>“Company,” “we,” “our,” or “us” refers to Springs Estate.</li>
                <li>“User,” “you,” or “your” refers to anyone who accesses or uses the Platform.</li>
                <li>“Property Listings” refers to properties posted on the website for sale, rent, or lease.</li>
                <li>“Agents/Brokers” refers to real estate professionals using the platform to list or promote properties.</li>
                <li>“Services” refers to all tools, features, listings, and functionalities offered by the Platform.</li>
              </ul>

              <h2>2. Eligibility</h2>
              <p>To use the Platform, you must:</p>
              <ul>
                <li>Be at least 18 years old</li>
                <li>Have the legal authority to enter into binding agreements</li>
                <li>Provide accurate and truthful information</li>
              </ul>
              <p>The Company reserves the right to terminate accounts that violate these requirements.</p>

              <h2>3. Use of the Website</h2>
              <p>Users agree to use the Platform only for lawful purposes.</p>
              <p>You agree not to:</p>
              <ul>
                <li>Post false or misleading property information</li>
                <li>Upload fraudulent property listings</li>
                <li>Impersonate another person or business</li>
                <li>Attempt to hack, disrupt, or damage the website</li>
                <li>Upload viruses or malicious software</li>
                <li>Use automated systems (bots or scrapers) without permission</li>
              </ul>
              <p>Violation of these rules may result in account suspension or legal action.</p>

              <h2>4. Property Listings</h2>
              <p>Our Platform allows property owners, brokers, and agents to publish property listings.</p>
              <p>Users who post listings agree that:</p>
              <ul>
                <li>All property information must be accurate and truthful</li>
                <li>Images and descriptions must accurately represent the property</li>
                <li>Listings must comply with local real estate laws</li>
                <li>The user has legal authority to advertise the property</li>
              </ul>
              <p>The Company does not guarantee the accuracy of property listings. We reserve the right to remove listings that violate policies.</p>

              <h2>5. Real Estate Transactions</h2>
              <p>The Platform serves as a marketplace to connect buyers, sellers, tenants, and agents.</p>
              <p>Important notes:</p>
              <ul>
                <li>The Company is not a real estate broker, agent, or financial advisor</li>
                <li>We do not participate in property transactions</li>
                <li>Any agreements made between users are solely between the involved parties</li>
              </ul>
              <p>Users are responsible for performing their own due diligence before any property transaction.</p>

              <h2>6. User Accounts</h2>
              <p>Users may be required to create an account to access certain features.</p>
              <p>Users agree to:</p>
              <ul>
                <li>Provide accurate registration information</li>
                <li>Maintain the confidentiality of login credentials</li>
                <li>Notify us of any unauthorized account access</li>
              </ul>
              <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>

              <h2>7. Fees and Payments</h2>
              <p>Some services may require payment, including:</p>
              <ul>
                <li>Premium property listings</li>
                <li>Advertising placements</li>
                <li>Featured property promotions</li>
                <li>Subscription services</li>
              </ul>
              <p>Payment terms include:</p>
              <ul>
                <li>All fees must be paid in full before services are activated</li>
                <li>Fees are non-refundable unless stated otherwise</li>
                <li>The Company reserves the right to change pricing at any time</li>
              </ul>

              <h2>8. Intellectual Property</h2>
              <p>All content on the Platform, including:</p>
              <ul>
                <li>Website design</li>
                <li>Logos</li>
                <li>Software</li>
                <li>Text</li>
                <li>Graphics</li>
                <li>Databases</li>
              </ul>
              <p>is owned by Springs Estate or licensed to us. Users may not copy, reproduce, distribute, or exploit any content without written permission.</p>

              <h2>9. User-Generated Content</h2>
              <p>Users may upload content including:</p>
              <ul>
                <li>Property descriptions</li>
                <li>Images</li>
                <li>Videos</li>
                <li>Reviews</li>
                <li>Comments</li>
              </ul>
              <p>By uploading content, you grant the Company a non-exclusive, worldwide, royalty-free license to display, distribute, and promote such content on the Platform.</p>
              <p>Users are responsible for ensuring their content does not violate any laws or third-party rights.</p>

              <h2>10. Prohibited Content</h2>
              <p>Users may not post content that:</p>
              <ul>
                <li>Is fraudulent or misleading</li>
                <li>Promotes illegal activities</li>
                <li>Violates intellectual property rights</li>
                <li>Contains offensive, abusive, or defamatory material</li>
                <li>Includes spam or unauthorized advertising</li>
              </ul>
              <p>The Company reserves the right to remove such content without notice.</p>

              <h2>11. Third-Party Services</h2>
              <p>The Platform may include links or integrations with third-party services such as:</p>
              <ul>
                <li>Mortgage providers</li>
                <li>Legal services</li>
                <li>Property valuation tools</li>
                <li>Advertising partners</li>
              </ul>
              <p>We do not control or endorse third-party services and are not responsible for their actions.</p>

              <h2>12. Disclaimer of Warranties</h2>
              <p>The Platform is provided “as is” and “as available.” We do not guarantee:</p>
              <ul>
                <li>Accuracy of property listings</li>
                <li>Availability of properties</li>
                <li>Reliability of users</li>
                <li>Continuous website availability</li>
              </ul>
              <p>Users access and use the Platform at their own risk.</p>

              <h2>13. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, Springs Estate shall not be liable for:</p>
              <ul>
                <li>Losses resulting from property transactions</li>
                <li>Financial losses</li>
                <li>Incorrect property information</li>
                <li>User disputes</li>
                <li>Technical interruptions</li>
              </ul>
              <p>Our total liability shall not exceed the amount paid by the user for services on the Platform.</p>

              <h2>14. Indemnification</h2>
              <p>You agree to indemnify and hold harmless Springs Estate, its employees, partners, and affiliates from any claims, damages, or legal disputes arising from:</p>
              <ul>
                <li>Your use of the Platform</li>
                <li>Your property listings</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any law or third-party rights</li>
              </ul>

              <h2>15. Suspension and Termination</h2>
              <p>We reserve the right to:</p>
              <ul>
                <li>Suspend user accounts</li>
                <li>Remove property listings</li>
                <li>Restrict access to the Platform</li>
              </ul>
              <p>This may occur if users:</p>
              <ul>
                <li>Violate these Terms</li>
                <li>Engage in fraudulent activities</li>
                <li>Harm other users or the platform</li>
              </ul>

              <h2>16. Privacy Policy</h2>
              <p>Your use of the Platform is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>

              <h2>17. Changes to the Terms</h2>
              <p>We may update these Terms periodically. Updated Terms will be posted on this page with the revised “Last Updated” date.</p>
              <p>Continued use of the Platform indicates acceptance of the updated Terms.</p>

              <h2>18. Governing Law</h2>
              <p>These Terms shall be governed by and interpreted in accordance with the laws of your jurisdiction. Any disputes arising from these Terms shall be resolved in the appropriate courts.</p>

              <h2>19. Contact Information</h2>
              <p>If you have questions regarding these Terms, please contact us:</p>
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

export default TermsOfService;
