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
          <a href="MAIL INFO" className="contact-link fade-in">EMAIL ADDRESS</a>
          <br />
          <a href="tel:+91" className="contact-link fade-in">+91 567900000</a>
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
          &copy; {new Date().getFullYear()} Springs Estate. All rights reserved.<br></br>
         <h2> Created By Sahil Kumar .</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
