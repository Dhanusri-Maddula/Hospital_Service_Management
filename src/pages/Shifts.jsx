// src/pages/Shifts.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Shifts.css";

function Shifts() {
  const [shifts, setShifts] = useState([
    { id: 1, staffName: "Dr. Sarah Johnson", department: "Emergency", shiftType: "Day", date: "Today", time: "08:00 AM - 05:00 PM", status: "Scheduled" },
    { id: 2, staffName: "Nurse Michael Chen", department: "ICU", shiftType: "Night", date: "Today", time: "08:00 PM - 07:00 AM", status: "Active" },
    { id: 3, staffName: "Dr. Emily Rodriguez", department: "Cardiology", shiftType: "Day", date: "Tomorrow", time: "09:00 AM - 06:00 PM", status: "Scheduled" },
    { id: 4, staffName: "Staff Nurse Lisa Park", department: "Ward 3", shiftType: "Evening", date: "Today", time: "04:00 PM - 12:00 AM", status: "Active" },
    { id: 5, staffName: "Dr. Robert Kumar", department: "Surgery", shiftType: "Morning", date: "Tomorrow", time: "06:00 AM - 02:00 PM", status: "Scheduled" },
  ]);

  const shiftTypes = [
    { name: "Morning", icon: "🌅", time: "06:00 AM - 02:00 PM", color: "#fbbf24" },
    { name: "Day", icon: "☀️", time: "08:00 AM - 04:00 PM", color: "#f59e0b" },
    { name: "Evening", icon: "🌆", time: "04:00 PM - 12:00 AM", color: "#ea580c" },
    { name: "Night", icon: "🌙", time: "08:00 PM - 07:00 AM", color: "#6366f1" },
  ];

  const getShiftColor = (shiftType) => {
    const shift = shiftTypes.find(s => s.name === shiftType);
    return shift ? shift.color : "#3b82f6";
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Active": return "status-active";
      case "Scheduled": return "status-scheduled";
      case "Completed": return "status-completed";
      default: return "";
    }
  };

  return (
    <div className="shifts-page">
      {/* Navbar */}
      <header className="page-navbar">
        <div className="navbar-container">
          <h1 className="page-logo">🏥 Hospital Services</h1>
          <nav className="page-nav-links">
            <Link to="/staff-services" className="nav-link back-link">← Back</Link>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="shifts-hero">
        <div className="hero-container">
          <h2 className="hero-title">📅 Staff Shifts Management</h2>
          <p className="hero-description">
            Manage staff schedules, assign shifts, and ensure optimal coverage
          </p>
          <div className="stats-row">
            <div className="stat-box">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-number">{shifts.length}</div>
                <div className="stat-label">Total Shifts</div>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">{shifts.filter(s => s.status === "Active").length}</div>
                <div className="stat-label">Active Now</div>
              </div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">📋</div>
              <div className="stat-content">
                <div className="stat-number">{shifts.filter(s => s.status === "Scheduled").length}</div>
                <div className="stat-label">Scheduled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="shifts-main">
        <div className="main-container">
          {/* Shift Types Overview */}
          <section className="shift-types-section">
            <h3 className="section-title">Shift Types</h3>
            <div className="shift-types-grid">
              {shiftTypes.map((shift, index) => (
                <div key={index} className="shift-type-card" style={{ borderLeftColor: shift.color }}>
                  <div className="shift-type-header">
                    <span className="shift-type-icon">{shift.icon}</span>
                    <div className="shift-type-name">{shift.name}</div>
                  </div>
                  <div className="shift-type-time">{shift.time}</div>
                  <div className="shift-type-count">
                    {shifts.filter(s => s.shiftType === shift.name).length} staff assigned
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Current Shifts Table */}
          <section className="shifts-table-section">
            <h3 className="section-title">Current & Upcoming Shifts</h3>
            <div className="table-container">
              <table className="shifts-table">
                <thead>
                  <tr>
                    <th>Staff Name</th>
                    <th>Department</th>
                    <th>Shift Type</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {shifts.map((shift) => (
                    <tr key={shift.id}>
                      <td className="name-cell">
                        <div className="name-wrapper">
                          <div className="avatar">{shift.staffName.charAt(0)}</div>
                          <span>{shift.staffName}</span>
                        </div>
                      </td>
                      <td>{shift.department}</td>
                      <td>
                        <span className="shift-type-badge" style={{ backgroundColor: getShiftColor(shift.shiftType) + "20", color: getShiftColor(shift.shiftType) }}>
                          {shift.shiftType}
                        </span>
                      </td>
                      <td>{shift.date}</td>
                      <td className="time-cell">{shift.time}</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(shift.status)}`}>
                          {shift.status}
                        </span>
                      </td>
                      <td className="action-cell">
                        <button className="action-btn edit">Edit</button>
                        <button className="action-btn view">View</button>
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

export default Shifts;
