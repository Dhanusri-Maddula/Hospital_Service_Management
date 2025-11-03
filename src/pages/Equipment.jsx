// src/pages/Equipment.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Equipment.css";

function Equipment() {
  const [equipment, setEquipment] = useState([
    { id: 1, name: "Ventilator Unit", serialNo: "VENT-001", status: "Available", location: "ICU Ward", lastMaintenance: "2024-01-15", nextMaintenance: "2024-04-15" },
    { id: 2, name: "Oxygen Cylinder", serialNo: "OXY-045", status: "In Use", location: "Emergency Room", lastMaintenance: "2024-01-20", nextMaintenance: "2024-04-20" },
    { id: 3, name: "Wheelchair", serialNo: "WC-128", status: "Available", location: "Ground Floor", lastMaintenance: "2024-02-01", nextMaintenance: "2024-05-01" },
    { id: 4, name: "Defibrillator", serialNo: "DEF-007", status: "Maintenance Due", location: "Emergency Dept", lastMaintenance: "2024-01-10", nextMaintenance: "2024-04-10" },
    { id: 5, name: "IV Pump", serialNo: "IVP-203", status: "In Use", location: "Ward 3", lastMaintenance: "2024-02-05", nextMaintenance: "2024-05-05" },
  ]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Available": return "status-available";
      case "In Use": return "status-in-use";
      case "Maintenance Due": return "status-maintenance";
      case "Out of Service": return "status-out-service";
      default: return "";
    }
  };

  const totalEquipment = equipment.length;
  const available = equipment.filter(e => e.status === "Available").length;
  const inUse = equipment.filter(e => e.status === "In Use").length;
  const maintenanceDue = equipment.filter(e => e.status === "Maintenance Due").length;

  return (
    <div className="equipment-page">
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
      <section className="equipment-hero">
        <div className="hero-container">
          <h2 className="hero-title">🛠️ Hospital Equipment Management</h2>
          <p className="hero-description">
            Track, manage, and maintain all hospital equipment for optimal patient care
          </p>
          <div className="stats-row">
            <div className="stat-box total">
              <div className="stat-icon">🛠️</div>
              <div className="stat-content">
                <div className="stat-number">{totalEquipment}</div>
                <div className="stat-label">Total Equipment</div>
              </div>
            </div>
            <div className="stat-box available">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <div className="stat-number">{available}</div>
                <div className="stat-label">Available</div>
              </div>
            </div>
            <div className="stat-box in-use">
              <div className="stat-icon">📋</div>
              <div className="stat-content">
                <div className="stat-number">{inUse}</div>
                <div className="stat-label">In Use</div>
              </div>
            </div>
            <div className="stat-box maintenance">
              <div className="stat-icon">⚠️</div>
              <div className="stat-content">
                <div className="stat-number">{maintenanceDue}</div>
                <div className="stat-label">Maintenance Due</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="equipment-main">
        <div className="main-container">
          {/* Equipment Table */}
          <section className="equipment-table-section">
            <h3 className="section-title">Equipment Inventory</h3>
            <div className="table-container">
              <table className="equipment-table">
                <thead>
                  <tr>
                    <th>Equipment Name</th>
                    <th>Serial Number</th>
                    <th>Status</th>
                    <th>Location</th>
                    <th>Last Maintenance</th>
                    <th>Next Maintenance</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {equipment.map((item) => (
                    <tr key={item.id}>
                      <td className="name-cell">{item.name}</td>
                      <td className="serial-cell">{item.serialNo}</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td>{item.location}</td>
                      <td className="date-cell">{item.lastMaintenance}</td>
                      <td className="date-cell">{item.nextMaintenance}</td>
                      <td className="action-cell">
                        <button className="action-btn details">View</button>
                        <button className="action-btn maintenance">Schedule</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Equipment Categories */}
          <section className="categories-section">
            <h3 className="section-title">Equipment Categories</h3>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon">💊</div>
                <div className="category-name">Life Support</div>
                <div className="category-count">12 units</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🩺</div>
                <div className="category-name">Monitoring</div>
                <div className="category-count">45 units</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🦼</div>
                <div className="category-name">Mobility Aids</div>
                <div className="category-count">28 units</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🔬</div>
                <div className="category-name">Diagnostic</div>
                <div className="category-count">33 units</div>
              </div>
              <div className="category-card">
                <div className="category-icon">💉</div>
                <div className="category-name">Infusion Pumps</div>
                <div className="category-count">67 units</div>
              </div>
              <div className="category-card">
                <div className="category-icon">📡</div>
                <div className="category-name">Communication</div>
                <div className="category-count">23 units</div>
              </div>
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

export default Equipment;
