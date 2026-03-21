import React, { useEffect } from 'react';
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

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';

import './App.css';

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
    </AuthProvider>
  );
}

export default App;
