// src/pages/Attendance.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Attendance.css";

function Attendance() {
  const [attendanceRecords, setAttendanceRecords] = useState([
    { id: 1, name: "Dr. Sarah Johnson", department: "Emergency", checkIn: "08:00 AM", checkOut: "05:00 PM", status: "Present", hours: "9.0h" },
    { id: 2, name: "Nurse Michael Chen", department: "ICU", checkIn: "07:45 AM", checkOut: "03:45 PM", status: "Present", hours: "8.0h" },
    { id: 3, name: "Dr. Emily Rodriguez", department: "Cardiology", checkIn: "09:15 AM", checkOut: null, status: "Working", hours: "5.5h" },
    { id: 4, name: "Staff Nurse Lisa Park", department: "Ward 3", checkIn: null, checkOut: null, status: "Absent", hours: "0.0h" },
    { id: 5, name: "Dr. Robert Kumar", department: "Surgery", checkIn: "06:30 AM", checkOut: "02:30 PM", status: "Present", hours: "8.0h" },
  ]);

  const [currentDate] = useState(new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }));

  const stats = {
    present: attendanceRecords.filter(r => r.status === "Present" || r.status === "Working").length,
    absent: attendanceRecords.filter(r => r.status === "Absent").length,
    onDuty: attendanceRecords.filter(r => r.status === "Working").length,
    totalStaff: attendanceRecords.length,
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Present": return "status-present";
      case "Absent": return "status-absent";
      case "Working": return "status-working";
      default: return "";
    }
  };

  return (
    <div className="attendance-page">
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
      <section className="attendance-hero">
        <div className="hero-container">
          <h2 className="hero-title">🕒 Attendance Management</h2>
          <p className="hero-description">{currentDate}</p>
          <div className="stats-row">
            <div className="stat-box present">
              <div className="stat-icon">✅</div>
              <div className="stat-content">
                <div className="stat-number">{stats.present}</div>
                <div className="stat-label">Present</div>
              </div>
            </div>
            <div className="stat-box absent">
              <div className="stat-icon">❌</div>
              <div className="stat-content">
                <div className="stat-number">{stats.absent}</div>
                <div className="stat-label">Absent</div>
              </div>
            </div>
            <div className="stat-box on-duty">
              <div className="stat-icon">📋</div>
              <div className="stat-content">
                <div className="stat-number">{stats.onDuty}</div>
                <div className="stat-label">On Duty</div>
              </div>
            </div>
            <div className="stat-box total">
              <div className="stat-icon">👥</div>
              <div className="stat-content">
                <div className="stat-number">{stats.totalStaff}</div>
                <div className="stat-label">Total Staff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="attendance-main">
        <div className="main-container">
          {/* Attendance Records Table */}
          <section className="records-section">
            <h3 className="section-title">Today's Attendance Records</h3>
            <div className="table-container">
              <table className="attendance-table">
                <thead>
                  <tr>
                    <th>Staff Name</th>
                    <th>Department</th>
                    <th>Check In</th>
                    <th>Check Out</th>
                    <th>Hours</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceRecords.map((record) => (
                    <tr key={record.id}>
                      <td className="name-cell">
                        <div className="name-wrapper">
                          <div className="avatar">{record.name.charAt(0)}</div>
                          <span>{record.name}</span>
                        </div>
                      </td>
                      <td>{record.department}</td>
                      <td className="time-cell">{record.checkIn || "-"}</td>
                      <td className="time-cell">{record.checkOut || "-"}</td>
                      <td className="hours-cell">{record.hours}</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(record.status)}`}>
                          {record.status}
                        </span>
                      </td>
                      <td className="action-cell">
                        {record.status === "Present" && record.checkOut === null && (
                          <button className="action-btn check-out">Check Out</button>
                        )}
                        {record.status === "Absent" && (
                          <button className="action-btn check-in">Check In</button>
                        )}
                        {record.status === "Working" && (
                          <button className="action-btn check-out">Check Out</button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Stats Cards */}
          <section className="stats-section">
            <h3 className="section-title">Department Overview</h3>
            <div className="stats-grid">
              <div className="dept-card">
                <div className="dept-header">
                  <div className="dept-icon">🏥</div>
                  <div className="dept-name">Emergency</div>
                </div>
                <div className="dept-stats">
                  <div className="dept-stat">
                    <span className="stat-label">Present:</span>
                    <span className="stat-value">15/18</span>
                  </div>
                  <div className="dept-stat">
                    <span className="stat-label">Attendance:</span>
                    <span className="stat-value">83.3%</span>
                  </div>
                </div>
              </div>

              <div className="dept-card">
                <div className="dept-header">
                  <div className="dept-icon">💊</div>
                  <div className="dept-name">ICU</div>
                </div>
                <div className="dept-stats">
                  <div className="dept-stat">
                    <span className="stat-label">Present:</span>
                    <span className="stat-value">8/10</span>
                  </div>
                  <div className="dept-stat">
                    <span className="stat-label">Attendance:</span>
                    <span className="stat-value">80.0%</span>
                  </div>
                </div>
              </div>

              <div className="dept-card">
                <div className="dept-header">
                  <div className="dept-icon">💓</div>
                  <div className="dept-name">Cardiology</div>
                </div>
                <div className="dept-stats">
                  <div className="dept-stat">
                    <span className="stat-label">Present:</span>
                    <span className="stat-value">12/15</span>
                  </div>
                  <div className="dept-stat">
                    <span className="stat-label">Attendance:</span>
                    <span className="stat-value">80.0%</span>
                  </div>
                </div>
              </div>

              <div className="dept-card">
                <div className="dept-header">
                  <div className="dept-icon">🦴</div>
                  <div className="dept-name">Surgery</div>
                </div>
                <div className="dept-stats">
                  <div className="dept-stat">
                    <span className="stat-label">Present:</span>
                    <span className="stat-value">10/12</span>
                  </div>
                  <div className="dept-stat">
                    <span className="stat-label">Attendance:</span>
                    <span className="stat-value">83.3%</span>
                  </div>
                </div>
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

export default Attendance;
