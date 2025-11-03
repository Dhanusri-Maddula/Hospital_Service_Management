// src/pages/Alerts.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Alerts.css";

function Alerts() {
  const [activeAlerts, setActiveAlerts] = useState([
    { id: 1, type: "Code Blue", location: "Emergency Dept", severity: "Critical", time: "2:15 PM", status: "Active", initiatedBy: "Dr. Smith" },
    { id: 2, type: "Fire Safety", location: "Building A - 3rd Floor", severity: "High", time: "1:45 PM", status: "Resolved", initiatedBy: "Security Team" },
  ]);

  const [alertHistory, setAlertHistory] = useState([
    { id: 3, type: "Security Alert", location: "Main Entrance", severity: "Medium", time: "12:30 PM", status: "Resolved", initiatedBy: "Admin" },
    { id: 4, type: "Code Blue", location: "Ward 5", severity: "Critical", time: "11:20 AM", status: "Resolved", initiatedBy: "Nurse Johnson" },
  ]);

  const [formData, setFormData] = useState({
    alertType: "",
    location: "",
    severity: "High",
    message: "",
  });

  const alertTypes = [
    { value: "Code Blue", label: "Code Blue - Medical Emergency", icon: "⚡", color: "#1d4ed8" },
    { value: "Fire Safety", label: "Fire / Safety Alert", icon: "🔥", color: "#dc2626" },
    { value: "Security Alert", label: "Security Alert", icon: "🔒", color: "#f59e0b" },
    { value: "Code Red", label: "Code Red - Mass Casualty", icon: "🚨", color: "#dc2626" },
    { value: "Code Yellow", label: "Code Yellow - Missing Patient", icon: "⚠️", color: "#eab308" },
    { value: "Code Grey", label: "Code Grey - Severe Weather", icon: "🌩️", color: "#6366f1" },
  ];

  const handleBroadcast = (e) => {
    e.preventDefault();
    const newAlert = {
      id: activeAlerts.length + alertHistory.length + 1,
      type: formData.alertType,
      location: formData.location,
      severity: formData.severity,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: "Active",
      initiatedBy: "Current User"
    };
    setActiveAlerts([...activeAlerts, newAlert]);
    setFormData({ alertType: "", location: "", severity: "High", message: "" });
    alert("Emergency alert broadcasted successfully!");
  };

  const resolveAlert = (id) => {
    const alert = activeAlerts.find(a => a.id === id);
    if (alert) {
      setActiveAlerts(activeAlerts.filter(a => a.id !== id));
      setAlertHistory([{ ...alert, status: "Resolved" }, ...alertHistory]);
    }
  };

  const getSeverityClass = (severity) => {
    switch (severity) {
      case "Critical": return "severity-critical";
      case "High": return "severity-high";
      case "Medium": return "severity-medium";
      default: return "";
    }
  };

  const getAlertColor = (type) => {
    const alert = alertTypes.find(a => a.value === type);
    return alert ? alert.color : "#1d4ed8";
  };

  return (
    <div className="alerts-page">
      {/* Navbar */}
      <header className="page-navbar">
        <div className="navbar-container">
          <h1 className="page-logo">🏥 Hospital Services</h1>
          <nav className="page-nav-links">
            <Link to="/core-services" className="nav-link back-link">← Back</Link>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="alerts-hero">
        <div className="hero-container">
          <h2 className="hero-title">🚨 Emergency Alert Management</h2>
          <p className="hero-description">
            Broadcast emergency alerts instantly to all hospital staff and track response status
          </p>
          <div className="alert-badges">
            <div className="alert-badge critical">
              <div className="badge-icon">⚡</div>
              <div className="badge-content">
                <div className="badge-number">{activeAlerts.filter(a => a.severity === "Critical").length}</div>
                <div className="badge-label">Critical Alerts</div>
              </div>
            </div>
            <div className="alert-badge active">
              <div className="badge-icon">📢</div>
              <div className="badge-content">
                <div className="badge-number">{activeAlerts.length}</div>
                <div className="badge-label">Active Alerts</div>
              </div>
            </div>
            <div className="alert-badge total">
              <div className="badge-icon">📊</div>
              <div className="badge-content">
                <div className="badge-number">{alertHistory.length}</div>
                <div className="badge-label">Resolved Today</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="alerts-main">
        <div className="main-container">
          {/* Broadcast Alert Form */}
          <section className="broadcast-section">
            <h3 className="section-title">🚨 Broadcast Emergency Alert</h3>
            <form onSubmit={handleBroadcast} className="alert-form">
              <div className="form-grid">
                <div className="form-group full-width">
                  <label htmlFor="alertType">Alert Type</label>
                  <select
                    id="alertType"
                    value={formData.alertType}
                    onChange={(e) => setFormData({ ...formData, alertType: e.target.value })}
                    required
                  >
                    <option value="">Select alert type</option>
                    {alertTypes.map(type => (
                      <option key={type.value} value={type.value}>{type.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="location">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Enter location or department"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="severity">Severity Level</label>
                  <select
                    id="severity"
                    value={formData.severity}
                    onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                  >
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Additional Message (Optional)</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="3"
                  placeholder="Add any additional details about the emergency..."
                />
              </div>
              <button type="submit" className="broadcast-btn">🚨 BROADCAST ALERT</button>
            </form>
          </section>

          {/* Active Alerts */}
          <section className="alerts-section">
            <h3 className="section-title">Active Emergency Alerts</h3>
            {activeAlerts.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">✅</div>
                <div className="empty-text">No active emergency alerts</div>
              </div>
            ) : (
              <div className="alerts-grid">
                {activeAlerts.map((alert) => (
                  <div key={alert.id} className="alert-card" style={{ borderLeftColor: getAlertColor(alert.type) }}>
                    <div className="alert-header">
                      <div className="alert-title-container">
                        <span className="alert-icon">
                          {alertTypes.find(t => t.value === alert.type)?.icon || "📢"}
                        </span>
                        <div>
                          <div className="alert-type">{alert.type}</div>
                          <div className="alert-location">📍 {alert.location}</div>
                        </div>
                      </div>
                      <div className="alert-actions">
                        <span className={`severity-badge ${getSeverityClass(alert.severity)}`}>
                          {alert.severity}
                        </span>
                        <button onClick={() => resolveAlert(alert.id)} className="resolve-btn">
                          Resolve
                        </button>
                      </div>
                    </div>
                    <div className="alert-body">
                      <div className="alert-info">
                        <div className="info-item">
                          <span className="info-label">Time:</span>
                          <span className="info-value">{alert.time}</span>
                        </div>
                        <div className="info-item">
                          <span className="info-label">Initiated By:</span>
                          <span className="info-value">{alert.initiatedBy}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
            )}
          </section>

          {/* Alert History */}
          <section className="history-section">
            <h3 className="section-title">Alert History</h3>
            <div className="table-container">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>Alert Type</th>
                    <th>Location</th>
                    <th>Severity</th>
                    <th>Initiated By</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {alertHistory.map((alert) => (
                    <tr key={alert.id}>
                      <td>{alert.time}</td>
                      <td>
                        <div className="type-cell">
                          <span className="type-icon">
                            {alertTypes.find(t => t.value === alert.type)?.icon || "📢"}
                          </span>
                          {alert.type}
          </div>
                      </td>
                      <td>{alert.location}</td>
                      <td>
                        <span className={`severity-badge ${getSeverityClass(alert.severity)}`}>
                          {alert.severity}
                        </span>
                      </td>
                      <td>{alert.initiatedBy}</td>
                      <td>
                        <span className="status-badge resolved">✓ Resolved</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <p>© 2025 Hospital Service Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Alerts;
