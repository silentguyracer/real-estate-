import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-top">
        <h2 className="footer-title">
          Experience <br/> <span className="title-word">Springs</span>
        </h2>
        <div className="footer-contact">
          <p>Get in touch with our team to explore availability.</p>
          <a href="mailto:info@springs.estate" className="contact-link fade-in">info@springs.estate</a>
          <br />
          <a href="tel:+1234567890" className="contact-link fade-in">+1 (234) 567-890</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Springs Estate. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
