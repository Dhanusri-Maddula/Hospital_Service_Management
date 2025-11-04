import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import "./landing.css";

export default function Landing() {
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleEmergencyClick = (option) => {
    let msg = "";
    switch (option) {
      case "ambulance":
        msg = "🚑 Ambulance will arrive at your location in 5 minutes.";
        break;
      case "stretcher":
        msg = "🛏️ Stretcher team is on the way to assist you immediately.";
        break;
      case "emergencyRoom":
        msg = "🏥 Emergency Room is being prepared for your arrival.";
        break;
      default:
        msg = "";
    }
    setMessage(msg);
    // close any open menus if needed

    // Auto-close popup after 5 seconds
    setTimeout(() => setMessage(""), 5000);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar navbar-sticky">
        <h1 className="logo">🏥 Hospital Service Management</h1>
        <button
          className="mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileMenuOpen((v) => !v)}
        >
          ☰
        </button>
        <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-greeting">
                👋 Welcome, {user?.name || user?.email?.split('@')[0]}
              </span>
              <button 
                className="logout-btn"
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="login-link" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
              <Link to="/signup" className="signup-link" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Efficient Hospital Service Management</h2>
          <p>
            Streamlining operations and enhancing patient care with a complete
            service management solution.
          </p>
          <div className="hero-ctas">
            <Link to="/dashboard" className="btn btn-primary">
              🏠 Dashboard
            </Link>
            <Link to="/services" className="btn btn-secondary">
              Explore Services
            </Link>
            <a href="#quick-access" className="btn btn-ghost">
              Quick Access ↓
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <span className="stat-value">24/7</span>
              <span className="stat-label">Support</span>
            </div>
            <div className="stat">
              <span className="stat-value">5m</span>
              <span className="stat-label">Avg Response</span>
            </div>
            <div className="stat">
              <span className="stat-value">12+</span>
              <span className="stat-label">Core Services</span>
            </div>
            <div className="stat">
              <span className="stat-value">99.9%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Management Access Section */}
      <section className="management-access" id="quick-access">
        <h3 className="section-title">📋 Management Dashboard</h3>
        <p>Access all hospital management features</p>
        <div className="cards">
          <Link to="/dashboard" className="card">
            <div className="card-icon">🏠</div>
            <div className="card-title">Dashboard</div>
            <div className="card-desc">Real-time metrics & quick actions</div>
          </Link>
          <Link to="/analytics" className="card">
            <div className="card-icon">📊</div>
            <div className="card-title">Analytics & Reports</div>
            <div className="card-desc">Data insights & performance metrics</div>
          </Link>
          <Link to="/settings" className="card">
            <div className="card-icon">⚙️</div>
            <div className="card-title">Settings</div>
            <div className="card-desc">Configure system preferences</div>
          </Link>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="quick-access">
        <h3 className="emergency-title">🚨 Emergency Services</h3>
        <p>Quick access to critical emergency services</p>
        <div className="cards">
          <Link to="/ambulance" className="card emergency-card">
            <div className="card-icon">🚑</div>
            <div className="card-title">Ambulance Service</div>
            <div className="card-desc">Request emergency dispatch</div>
          </Link>
          <Link to="/alerts" className="card emergency-card">
            <div className="card-icon">🚨</div>
            <div className="card-title">Emergency Alerts</div>
            <div className="card-desc">Broadcast urgent alerts</div>
          </Link>
          <Link to="/beds" className="card">
            <div className="card-icon">🛏️</div>
            <div className="card-title">Bed Management</div>
            <div className="card-desc">Track bed availability</div>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features" id="why-us">
        <h3>Why Choose Us</h3>
        <div className="feature-grid">
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h4>Fast & Reliable</h4>
            <p>Low-latency operations with robust uptime and monitoring.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🔐</div>
            <h4>Secure by Design</h4>
            <p>Best practices for data privacy and role-based access.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🧭</div>
            <h4>Easy to Use</h4>
            <p>Clear navigation and quick access to essential workflows.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">📊</div>
            <h4>Actionable Insights</h4>
            <p>Reports and dashboards to guide operational decisions.</p>
          </div>
        </div>
      </section>

      {/* Emergency Popup Message */}
      {message && (
        <div className="popup-overlay" onClick={() => setMessage("")}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setMessage("")}>
              &times;
            </span>
            <p>{message}</p>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-content">
            <h3>About Our Hospital</h3>
            <p>
              Our Hospital Service Management System provides modern solutions for
              patient care, hospital operations, and staff management — all in one
              comprehensive platform designed to enhance healthcare delivery.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="feature-icon">🏥</div>
                <h4>Patient-Centered Care</h4>
                <p>Dedicated to providing exceptional patient care with cutting-edge technology</p>
              </div>
              <div className="about-feature">
                <div className="feature-icon">⚡</div>
                <h4>Efficient Operations</h4>
                <p>Streamlined processes that reduce wait times and improve service delivery</p>
              </div>
              <div className="about-feature">
                <div className="feature-icon">🔬</div>
                <h4>Advanced Technology</h4>
                <p>State-of-the-art medical equipment and digital health solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-container">
          <h3>Get In Touch</h3>
          <p>We're here to help. Reach out to us for any questions or support.</p>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">📞</div>
              <h4>Phone</h4>
              <p>+91 9876543210</p>
              <span>24/7 Emergency Line</span>
            </div>
            <div className="contact-method">
              <div className="contact-icon">✉️</div>
              <h4>Email</h4>
              <p>support@hospitalservices.com</p>
              <span>General Inquiries</span>
            </div>
            <div className="contact-method">
              <div className="contact-icon">📍</div>
              <h4>Address</h4>
              <p>123 Medical Center Drive<br />Healthcare City, HC 12345</p>
              <span>Visit Our Facility</span>
            </div>
            <div className="contact-method">
              <div className="contact-icon">🕒</div>
              <h4>Hours</h4>
              <p>Mon - Fri: 8:00 AM - 8:00 PM<br />Sat - Sun: 9:00 AM - 6:00 PM</p>
              <span>Emergency: 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Hospital Service Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}
