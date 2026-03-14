import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import './Header.css';

const menuItems = [
  { label: 'Residences', href: '/#residences', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { label: 'Design', href: '/#design', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { label: 'Location', href: '/#location', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { label: 'Amenities', href: '/#amenities', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { label: 'Gallery', href: '/#gallery', image: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { label: 'About', href: '/#about', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(menuItems[0].image);
  
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-left">
          <button 
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
              {!menuOpen ? (
                <>
                  <span></span>
                  <span></span>
                </>
              ) : (
                <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              )}
            </div>
            {!menuOpen && <span className="menu-text">MENU</span>}
          </button>
          <a href="#residences" className="nav-link hidden-mobile" style={{ marginLeft: menuOpen ? '0' : '20px' }}>RESIDENCES</a>
        </div>

        <div className="header-center">
          <a href="/#" className="logo">
            <span className="logo-text">Springs</span>
            <svg viewBox="0 0 32 32" className="logo-icon" fill="none" stroke="currentColor" strokeWidth="0.8">
              <circle cx="16" cy="16" r="14" />
              <path d="M16 8 c-4 0-4 6 0 8 c4 2 4 8 0 8" />
            </svg>
          </a>
        </div>

        <div className="header-right">
          {!isAuthenticated ? (
            <button className="nav-link signin-btn" onClick={() => setAuthOpen(true)}>SIGN IN</button>
          ) : (
            <div className="user-menu-group">
              <span className="user-greeting hidden-mobile">Hello, {user?.name?.split(' ')[0] || 'User'}</span>
              {user?.role === 'admin' && (
                <button 
                  className="nav-link admin-portal-btn"
                  onClick={() => navigate('/admin')}
                >
                  ADMIN PORTAL
                </button>
              )}
              <button className="nav-link signout-btn hidden-mobile" onClick={logout}>SIGN OUT</button>
            </div>
          )}
          <a href="/#contact" className="nav-link hidden-mobile" style={{ marginLeft: '20px' }}>CONTACT US</a>
          <button className="favorites-button" style={{ marginLeft: '20px' }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </header>

      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />

      {/* Fullscreen Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <div className="menu-links">
            {menuItems.map((item, index) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={() => setMenuOpen(false)}
                onMouseEnter={() => setActiveImage(item.image)}
                className="menu-link-item"
                style={{ transitionDelay: menuOpen ? `${index * 0.05 + 0.1}s` : '0s' }}
              >
                <span className="menu-link-text">{item.label}</span>
              </a>
            ))}
          </div>
          <div className="menu-image-container">
            <div className="menu-image-wrapper">
              <img 
                key={activeImage}
                src={activeImage} 
                alt="Springs preview" 
                className="menu-image animate-image-reveal" 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
