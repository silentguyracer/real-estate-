import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AdminDashboard.css';

export default function AdminDashboard() {
  const { user, token, logout } = useAuth();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState(null);
  const [properties, setProperties] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [editingProperty, setEditingProperty] = useState(null);
  const [formData, setFormData] = useState({
    title: '', type: 'Villa', bedrooms: 0, bathrooms: 0,
    area: 0, price: 0, location: '', description: '', featured: false, status: 'available'
  });

  const [sidebarOpen, setSidebarOpen] = useState(false);

  function getHeaders() {
    return { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
  }

  const fetchData = useCallback(async () => {
    const hdrs = getHeaders();
    setLoading(true);
    try {
      const [statsRes, propsRes, inqRes] = await Promise.all([
        fetch('/api/admin/stats', { headers: hdrs }),
        fetch('/api/admin/properties', { headers: hdrs }),
        fetch('/api/admin/inquiries', { headers: hdrs })
      ]);
      setStats(await statsRes.json());
      setProperties(await propsRes.json());
      setInquiries(await inqRes.json());
    } catch (err) {
      console.error('Fetch error:', err);
    }
    setLoading(false);
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  function handleLogout() {
    logout();
    navigate('/login');
  }

  // Property CRUD
  function openAddModal() {
    setEditingProperty(null);
    setFormData({
      title: '', type: 'Villa', bedrooms: 0, bathrooms: 0,
      area: 0, price: 0, location: '', description: '', featured: false, status: 'available'
    });
    setShowModal(true);
  }

  function openEditModal(property) {
    setEditingProperty(property);
    setFormData({
      title: property.title, type: property.type, bedrooms: property.bedrooms,
      bathrooms: property.bathrooms, area: property.area, price: property.price,
      location: property.location, description: property.description,
      featured: property.featured, status: property.status
    });
    setShowModal(true);
  }

  async function handleSaveProperty(e) {
    e.preventDefault();
    try {
      if (editingProperty) {
        await fetch(`/api/admin/properties/${editingProperty.id}`, {
          method: 'PUT', headers: getHeaders(), body: JSON.stringify(formData)
        });
      } else {
        await fetch('/api/admin/properties', {
          method: 'POST', headers: getHeaders(), body: JSON.stringify(formData)
        });
      }
      setShowModal(false);
      fetchData();
    } catch (err) {
      console.error('Save error:', err);
    }
  }

  async function handleDeleteProperty(id) {
    if (!confirm('Are you sure you want to delete this property?')) return;
    try {
      await fetch(`/api/admin/properties/${id}`, { method: 'DELETE', headers: getHeaders() });
      fetchData();
    } catch (err) {
      console.error('Delete error:', err);
    }
  }

  async function handleDeleteInquiry(id) {
    if (!confirm('Delete this inquiry?')) return;
    try {
      await fetch(`/api/admin/inquiries/${id}`, { method: 'DELETE', headers: getHeaders() });
      fetchData();
    } catch (err) {
      console.error('Delete error:', err);
    }
  }

  async function markInquiryRead(id) {
    try {
      await fetch(`/api/admin/inquiries/${id}`, {
        method: 'PUT', headers: getHeaders(), body: JSON.stringify({ status: 'read' })
      });
      fetchData();
    } catch (err) {
      console.error('Update error:', err);
    }
  }

  function formatPrice(price) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price);
  }

  if (loading) {
    return (
      <div className="admin-loading">
        <div className="admin-spinner" />
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      {/* Mobile overlay */}
      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)} />}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-sidebar-brand">
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
            <path d="M24 4L4 20H10V42H20V30H28V42H38V20H44L24 4Z"
                  fill="rgba(201,169,110,0.2)" stroke="#c9a96e" strokeWidth="1.5"/>
          </svg>
          <div>
            <h2>Springs Estate</h2>
            <span>Admin Panel</span>
          </div>
        </div>

        <nav className="admin-nav">
          <button className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('dashboard'); setSidebarOpen(false); }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/>
              <rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>
            </svg>
            Dashboard
          </button>
          <button className={`admin-nav-item ${activeTab === 'properties' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('properties'); setSidebarOpen(false); }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Properties
          </button>
          <button className={`admin-nav-item ${activeTab === 'inquiries' ? 'active' : ''}`}
                  onClick={() => { setActiveTab('inquiries'); setSidebarOpen(false); }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Inquiries
            {stats?.newInquiries > 0 && <span className="admin-badge">{stats.newInquiries}</span>}
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-info">
            <div className="admin-avatar">{user?.name?.[0] || 'A'}</div>
            <div>
              <p className="admin-user-name">{user?.name || 'Admin'}</p>
              <p className="admin-user-email">{user?.email}</p>
            </div>
          </div>
          <button className="admin-logout-btn" onClick={handleLogout}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {/* Top bar */}
        <header className="admin-topbar">
          <button className="admin-hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <span/><span/><span/>
          </button>
          <h1 className="admin-page-title">
            {activeTab === 'dashboard' && 'Dashboard'}
            {activeTab === 'properties' && 'Properties'}
            {activeTab === 'inquiries' && 'Inquiries'}
          </h1>
          <div className="admin-topbar-actions">
            {activeTab === 'properties' && (
              <button className="admin-add-btn" onClick={openAddModal}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Add Property
              </button>
            )}
          </div>
        </header>

        <div className="admin-content">
          {/* ===== Dashboard Tab ===== */}
          {activeTab === 'dashboard' && stats && (
            <div className="admin-dashboard">
              <div className="admin-stats-grid">
                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: 'rgba(201,169,110,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.totalProperties}</span>
                    <span className="admin-stat-label">Total Properties</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: 'rgba(34,197,94,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="1.5">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.availableProperties}</span>
                    <span className="admin-stat-label">Available</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: 'rgba(239,68,68,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.5">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.soldProperties}</span>
                    <span className="admin-stat-label">Sold</span>
                  </div>
                </div>

                <div className="admin-stat-card">
                  <div className="admin-stat-icon" style={{ background: 'rgba(59,130,246,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{stats.totalInquiries}</span>
                    <span className="admin-stat-label">Inquiries</span>
                  </div>
                </div>

                <div className="admin-stat-card stat-wide">
                  <div className="admin-stat-icon" style={{ background: 'rgba(168,85,247,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                    </svg>
                  </div>
                  <div className="admin-stat-info">
                    <span className="admin-stat-value">{formatPrice(stats.totalValue)}</span>
                    <span className="admin-stat-label">Total Portfolio Value</span>
                  </div>
                </div>
              </div>

              {/* Recent properties */}
              <div className="admin-section">
                <h3 className="admin-section-title">Recent Properties</h3>
                <div className="admin-recent-grid">
                  {properties.slice(0, 3).map(prop => (
                    <div key={prop.id} className="admin-recent-card">
                      <div className="admin-recent-header">
                        <span className={`admin-status-badge ${prop.status}`}>{prop.status}</span>
                        {prop.featured && <span className="admin-featured-badge">★ Featured</span>}
                      </div>
                      <h4>{prop.title}</h4>
                      <p className="admin-recent-type">{prop.type} • {prop.bedrooms} bed • {prop.bathrooms} bath</p>
                      <p className="admin-recent-price">{formatPrice(prop.price)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ===== Properties Tab ===== */}
          {activeTab === 'properties' && (
            <div className="admin-properties">
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Type</th>
                      <th>Price</th>
                      <th>Beds/Baths</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map(prop => (
                      <tr key={prop.id}>
                        <td>
                          <div className="admin-prop-name">
                            <strong>{prop.title}</strong>
                            <span>{prop.location}</span>
                          </div>
                        </td>
                        <td><span className="admin-type-badge">{prop.type}</span></td>
                        <td className="admin-price-cell">{formatPrice(prop.price)}</td>
                        <td>{prop.bedrooms} / {prop.bathrooms}</td>
                        <td><span className={`admin-status-badge ${prop.status}`}>{prop.status}</span></td>
                        <td>
                          <div className="admin-actions">
                            <button className="admin-action-btn edit" onClick={() => openEditModal(prop)} title="Edit">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
                              </svg>
                            </button>
                            <button className="admin-action-btn delete" onClick={() => handleDeleteProperty(prop.id)} title="Delete">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {properties.length === 0 && (
                      <tr><td colSpan="6" className="admin-empty">No properties found. Add your first property!</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ===== Inquiries Tab ===== */}
          {activeTab === 'inquiries' && (
            <div className="admin-inquiries">
              {inquiries.length === 0 ? (
                <div className="admin-empty-state">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <p>No inquiries yet</p>
                </div>
              ) : (
                <div className="admin-inquiry-list">
                  {inquiries.map(inq => (
                    <div key={inq.id} className={`admin-inquiry-card ${inq.status === 'new' ? 'unread' : ''}`}>
                      <div className="admin-inquiry-header">
                        <div className="admin-inquiry-info">
                          <h4>{inq.name}</h4>
                          <span className="admin-inquiry-email">{inq.email}</span>
                          {inq.phone && <span className="admin-inquiry-phone">{inq.phone}</span>}
                        </div>
                        <div className="admin-inquiry-meta">
                          <span className={`admin-status-badge ${inq.status}`}>{inq.status}</span>
                          <span className="admin-inquiry-date">{new Date(inq.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      {inq.property && <p className="admin-inquiry-property">Re: {inq.property}</p>}
                      <p className="admin-inquiry-message">{inq.message}</p>
                      <div className="admin-inquiry-actions">
                        {inq.status === 'new' && (
                          <button className="admin-action-btn read" onClick={() => markInquiryRead(inq.id)}>
                            Mark as Read
                          </button>
                        )}
                        <button className="admin-action-btn delete" onClick={() => handleDeleteInquiry(inq.id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* ===== Property Modal ===== */}
      {showModal && (
        <div className="admin-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-header">
              <h3>{editingProperty ? 'Edit Property' : 'Add New Property'}</h3>
              <button className="admin-modal-close" onClick={() => setShowModal(false)}>×</button>
            </div>
            <form onSubmit={handleSaveProperty} className="admin-modal-form">
              <div className="admin-form-grid">
                <div className="admin-form-group full">
                  <label>Title</label>
                  <input type="text" required value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="Property title" />
                </div>
                <div className="admin-form-group">
                  <label>Type</label>
                  <select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })}>
                    <option>Villa</option><option>Apartment</option><option>Penthouse</option>
                    <option>Townhouse</option><option>Studio</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Status</label>
                  <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })}>
                    <option value="available">Available</option><option value="sold">Sold</option>
                    <option value="reserved">Reserved</option>
                  </select>
                </div>
                <div className="admin-form-group">
                  <label>Bedrooms</label>
                  <input type="number" min="0" value={formData.bedrooms}
                    onChange={e => setFormData({ ...formData, bedrooms: parseInt(e.target.value) || 0 })} />
                </div>
                <div className="admin-form-group">
                  <label>Bathrooms</label>
                  <input type="number" min="0" value={formData.bathrooms}
                    onChange={e => setFormData({ ...formData, bathrooms: parseInt(e.target.value) || 0 })} />
                </div>
                <div className="admin-form-group">
                  <label>Area (sq ft)</label>
                  <input type="number" min="0" value={formData.area}
                    onChange={e => setFormData({ ...formData, area: parseInt(e.target.value) || 0 })} />
                </div>
                <div className="admin-form-group">
                  <label>Price ($)</label>
                  <input type="number" min="0" required value={formData.price}
                    onChange={e => setFormData({ ...formData, price: parseInt(e.target.value) || 0 })} />
                </div>
                <div className="admin-form-group full">
                  <label>Location</label>
                  <input type="text" value={formData.location}
                    onChange={e => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Springs Estate, Dubai" />
                </div>
                <div className="admin-form-group full">
                  <label>Description</label>
                  <textarea rows="3" value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })} placeholder="Property description..." />
                </div>
                <div className="admin-form-group">
                  <label className="admin-checkbox-label">
                    <input type="checkbox" checked={formData.featured}
                      onChange={e => setFormData({ ...formData, featured: e.target.checked })} />
                    Featured Property
                  </label>
                </div>
              </div>
              <div className="admin-modal-actions">
                <button type="button" className="admin-btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="admin-btn-primary">{editingProperty ? 'Update' : 'Add'} Property</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
