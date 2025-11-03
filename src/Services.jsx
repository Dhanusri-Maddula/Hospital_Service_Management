import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

function Services() {
  return (
    <div className="services-page">
      {/* Navbar */}
      <header className="services-navbar">
        <div className="navbar-container">
          <h1 className="services-logo">🏥 Hospital Service Management</h1>
          <nav className="services-nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link active">Services</Link>
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content">
          <h2>Our Comprehensive Services</h2>
          <p>
            Discover our full range of hospital management solutions designed to streamline operations and enhance patient care.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-main">
        <div className="services-container">
          <div className="services-grid">
            {/* Core Services */}
            <div className="service-card core-services">
              <div className="card-header">
                <div className="card-icon">🏥</div>
                <h3>Core Hospital Services</h3>
              </div>
              <div className="card-content">
                <p>
                  Essential medical services including ambulance dispatch, equipment management, 
                  pharmacy operations, bed management, blood bank, and telemedicine.
                </p>
                <ul className="service-features">
                  <li>🚑 Ambulance & Emergency Response</li>
                  <li>🔧 Equipment Management</li>
                  <li>💊 Pharmacy & Medicine Supply</li>
                  <li>🛏️ Bed & Room Management</li>
                  <li>🩸 Blood Bank Operations</li>
                  <li>📱 Telemedicine Services</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link to="/core-services" className="service-btn primary">
                  Explore Core Services
                </Link>
              </div>
            </div>

            {/* Staff Services */}
            <div className="service-card staff-services">
              <div className="card-header">
                <div className="card-icon">👩‍⚕️</div>
                <h3>Staff & Workforce Services</h3>
              </div>
              <div className="card-content">
                <p>
                  Comprehensive staff management solutions for attendance tracking, 
                  shift scheduling, leave management, and workforce optimization.
                </p>
                <ul className="service-features">
                  <li>📊 Attendance Tracking</li>
                  <li>⏰ Shift Scheduling</li>
                  <li>🏖️ Leave Management</li>
                  <li>⏱️ Overtime Tracking</li>
                  <li>👥 Staff Availability</li>
                  <li>📈 Performance Reports</li>
                </ul>
              </div>
              <div className="card-footer">
                <Link to="/staff-services" className="service-btn secondary">
                  Explore Staff Services
                </Link>
              </div>
            </div>
          </div>

          {/* Service Statistics */}
          <div className="service-statistics">
            <h3>Service Overview</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">🏥</div>
                <div className="stat-content">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Core Services</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👩‍⚕️</div>
                <div className="stat-content">
                  <span className="stat-number">20+</span>
                  <span className="stat-label">Staff Services</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Categories</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⚡</div>
                <div className="stat-content">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="additional-services">
            <h3>Additional Features</h3>
            <div className="additional-grid">
              <div className="additional-card">
                <div className="additional-icon">🚨</div>
                <h4>Emergency Response</h4>
                <p>24/7 emergency services with rapid response times and real-time tracking</p>
              </div>
              <div className="additional-card">
                <div className="additional-icon">📊</div>
                <h4>Analytics & Reports</h4>
                <p>Comprehensive reporting, data analytics, and performance insights</p>
              </div>
              <div className="additional-card">
                <div className="additional-icon">🔐</div>
                <h4>Security & Compliance</h4>
                <p>Advanced security measures, compliance monitoring, and data protection</p>
              </div>
              <div className="additional-card">
                <div className="additional-icon">📱</div>
                <h4>Mobile Access</h4>
                <p>Access services from any device, anywhere with responsive design</p>
              </div>
              <div className="additional-card">
                <div className="additional-icon">🔄</div>
                <h4>Integration</h4>
                <p>Seamless integration with existing hospital systems and third-party tools</p>
              </div>
              <div className="additional-card">
                <div className="additional-icon">🎯</div>
                <h4>Customization</h4>
                <p>Tailored solutions to meet specific hospital requirements and workflows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="services-footer">
        <p>© 2025 Hospital Service Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Services;
