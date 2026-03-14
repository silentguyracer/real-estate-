import React, { useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './LegalPage.css';

const CookiePolicy = () => {
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
            <h1 className="legal-title">Cookie Policy</h1>
            <div className="legal-last-updated">Last Updated: March 14, 2026</div>
            
            <div className="legal-text">
              <p>This Cookie Policy explains how Springs Estate (“Company”, “we”, “our”, or “us”) uses cookies and similar technologies when you visit or use our website <a href="http://www.springs.estate">www.springs.estate</a> (“Website”).</p>
              
              <p>This policy explains what cookies are, how we use them, and how you can control them. By using our website, you consent to the use of cookies in accordance with this Cookie Policy.</p>

              <h2>1. What Are Cookies</h2>
              <p>Cookies are small text files that are stored on your computer, tablet, or mobile device when you visit a website.</p>
              <p>Cookies allow websites to:</p>
              <ul>
                <li>Recognize your device</li>
                <li>Remember your preferences</li>
                <li>Improve website performance</li>
                <li>Provide personalized content</li>
              </ul>
              <p>Cookies do not typically contain personally identifiable information, but they may be linked to personal information that we store about you.</p>

              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for several purposes, including:</p>
              
              <h3>2.1 Website Functionality</h3>
              <p>Cookies help the website function properly by enabling features such as:</p>
              <ul>
                <li>User login</li>
                <li>Property search filters</li>
                <li>Saving favorite properties</li>
                <li>User dashboard functionality</li>
              </ul>

              <h3>2.2 Performance and Analytics</h3>
              <p>Cookies help us understand how visitors interact with our website so we can improve it. We analyze:</p>
              <ul>
                <li>Number of visitors</li>
                <li>Pages visited</li>
                <li>Property search behavior</li>
                <li>Time spent on pages</li>
                <li>Traffic sources</li>
              </ul>

              <h3>2.3 Personalization</h3>
              <p>Cookies help personalize the experience for users by:</p>
              <ul>
                <li>Showing relevant property listings</li>
                <li>Saving location preferences</li>
                <li>Recommending properties based on browsing behavior</li>
              </ul>

              <h3>2.4 Advertising and Marketing</h3>
              <p>Cookies may be used to:</p>
              <ul>
                <li>Display relevant property advertisements</li>
                <li>Measure marketing campaign performance</li>
                <li>Retarget users with property listings they previously viewed</li>
              </ul>

              <h2>3. Types of Cookies We Use</h2>
              
              <h3>3.1 Essential Cookies</h3>
              <p>These cookies are necessary for the website to function properly. They enable core features such as:</p>
              <ul>
                <li>Secure login</li>
                <li>Account authentication</li>
                <li>Property listing management</li>
                <li>Website security</li>
              </ul>
              <p>Without these cookies, the website may not function correctly.</p>

              <h3>3.2 Performance Cookies</h3>
              <p>These cookies collect information about how visitors use the website. For example:</p>
              <ul>
                <li>Which property pages are most viewed</li>
                <li>How users navigate the site</li>
                <li>Errors encountered on pages</li>
              </ul>
              <p>These cookies help improve website performance and usability.</p>

              <h3>3.3 Functional Cookies</h3>
              <p>Functional cookies allow the website to remember your preferences such as:</p>
              <ul>
                <li>Preferred property location</li>
                <li>Currency settings</li>
                <li>Language preferences</li>
                <li>Saved property searches</li>
              </ul>
              <p>These cookies improve user convenience.</p>

              <h3>3.4 Advertising Cookies</h3>
              <p>Advertising cookies are used to deliver more relevant advertisements to users. These cookies may track:</p>
              <ul>
                <li>Property pages you view</li>
                <li>Searches you perform</li>
                <li>Interaction with advertisements</li>
              </ul>
              <p>They may also be used to limit how many times you see a particular advertisement.</p>

              <h2>4. Third-Party Cookies</h2>
              <p>Some cookies may be placed by third-party service providers that help operate our website. These may include:</p>
              
              <h3>Analytics Providers</h3>
              <p>Such as Google Analytics and Website analytics tools. These services help us understand website traffic and usage patterns.</p>
              
              <h3>Advertising Partners</h3>
              <p>Advertising platforms may place cookies to show targeted advertisements related to real estate services.</p>
              
              <h3>Embedded Services</h3>
              <p>Third-party services embedded on our website (such as maps or videos) may also use cookies.</p>
              <p>We do not control third-party cookies, and users should review the privacy policies of those providers.</p>

              <h2>5. Cookies Used on Property Listings</h2>
              <p>When browsing property listings on our website, cookies may be used to:</p>
              <ul>
                <li>Save recently viewed properties</li>
                <li>Recommend similar properties</li>
                <li>Remember search filters (price range, city, property type)</li>
                <li>Track engagement with property listings</li>
              </ul>
              <p>These cookies help create a more personalized property search experience.</p>

              <h2>6. Managing Cookies</h2>
              <p>You can control or disable cookies through your browser settings. Most web browsers allow you to:</p>
              <ul>
                <li>Delete cookies</li>
                <li>Block cookies</li>
                <li>Receive alerts before cookies are stored</li>
              </ul>
              <p>Below are links for managing cookies in common browsers:</p>
              <ul>
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Safari</li>
                <li>Microsoft Edge</li>
              </ul>
              <p>Please note that disabling cookies may affect certain features of the website. For example:</p>
              <ul>
                <li>Login functionality may not work properly</li>
                <li>Saved property searches may not be stored</li>
                <li>Personalized recommendations may not appear</li>
              </ul>

              <h2>7. Cookie Retention Period</h2>
              <p>Cookies may remain on your device for different periods:</p>
              
              <h3>Session Cookies</h3>
              <p>These cookies are temporary and expire when you close your browser.</p>
              
              <h3>Persistent Cookies</h3>
              <p>These cookies remain on your device for a set period or until manually deleted. Persistent cookies help remember preferences for future visits.</p>

              <h2>8. Updates to This Cookie Policy</h2>
              <p>We may update this Cookie Policy from time to time to reflect:</p>
              <ul>
                <li>Changes in technology</li>
                <li>Updates to legal requirements</li>
                <li>Improvements to our services</li>
              </ul>
              <p>Updates will be posted on this page with a revised “Last Updated” date. Users are encouraged to review this policy periodically.</p>

              <h2>9. Contact Us</h2>
              <p>If you have questions regarding this Cookie Policy, please contact us:</p>
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

export default CookiePolicy;
