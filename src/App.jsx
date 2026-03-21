import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Header from './components/Header';
import Hero from './components/Hero';
import Architecture from './components/Architecture';
import PremiumLiving from './components/PremiumLiving';
import PropertiesPanel from './components/PropertiesPanel';
import Gallery from './components/Gallery';
import Amenities from './components/Amenities';
import NatureSection from './components/NatureSection';
import TerracesSection from './components/TerracesSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

// Lazy load page components
const Login = lazy(() => import('./pages/Login'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

import './App.css';

// Loading fallback components
const PageLoader = () => (
  <div style={{ 
    height: '100vh', 
    width: '100vw', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    background: '#0a0a0a',
    color: '#c5a059',
    fontFamily: 'Outfit, sans-serif'
  }}>
    <div className="loader-text">SPLENDOR</div>
  </div>
);

function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-container">
      <AnimatedBackground />
      <Header />
      <main className="content-wrapper">
        <Hero />
        <Architecture />
        <PremiumLiving />
        <PropertiesPanel />
        <Gallery />
        <Amenities />
        <NatureSection />
        <TerracesSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/login' || location.pathname.startsWith('/admin');

  return (
    <AuthProvider>
      <Suspense fallback={<PageLoader />}>
        {isAdminRoute ? (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        ) : (
          <Routes>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookies" element={<CookiePolicy />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        )}
      </Suspense>
    </AuthProvider>
  );
}

export default App;
