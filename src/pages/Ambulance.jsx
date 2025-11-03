// src/pages/Ambulance.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import socket from '../utils/socket';
import EmergencyUpload from '../components/EmergencyUpload';
import { ambulanceAPI } from '../utils/api';
import "./Ambulance.css";

function Ambulance() {
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [requests, setRequests] = useState([]);
  const [ambulances, setAmbulances] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load data from backend
  useEffect(() => {
    loadData();
    
    // Listen for real-time updates
    socket.on('emergency-request-created', (data) => {
      loadData();
    });

    return () => {
      socket.off('emergency-request-created');
    };
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      // In production, fetch from API
      // const response = await ambulanceAPI.getRequests();
      // setRequests(response.data.data);
      
      // For now, use mock data
      setRequests([
        { id: 1, patientName: "John Doe", location: "Emergency Dept", priority: "Critical", status: "Dispatched", time: "10:15 AM", ambulance: "AMB-001" },
        { id: 2, patientName: "Sarah Smith", location: "Ward 3", priority: "High", status: "In Transit", time: "11:30 AM", ambulance: "AMB-003" },
      ]);
      setAmbulances([
        { id: "AMB-001", driver: "Dr. James Wilson", status: "On Call", currentLocation: "Emergency Bay", phone: "+1 234-567-8901" },
        { id: "AMB-002", driver: "Nurse Linda Parker", status: "Available", currentLocation: "Garage", phone: "+1 234-567-8902" },
        { id: "AMB-003", driver: "Dr. Robert Taylor", status: "In Transit", currentLocation: "City Hospital", phone: "+1 234-567-8903" },
      ]);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const [formData, setFormData] = useState({
    patientName: "",
    pickupLocation: "",
    priority: "High",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Open emergency modal for photo upload with GPS
    setShowEmergencyModal(true);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "Critical": return "priority-critical";
      case "High": return "priority-high";
      case "Medium": return "priority-medium";
      default: return "";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Available": return "status-available";
      case "On Call": return "status-on-call";
      case "In Transit": return "status-transit";
      case "Dispatched": return "status-dispatched";
      case "Pending": return "status-pending";
      default: return "";
    }
  };

  return (
    <div className="ambulance-page">
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

      {/* Hero Section with Stats */}
      <section className="ambulance-hero">
        <div className="hero-container">
          <h2 className="hero-title">🚑 Ambulance Services</h2>
          <p className="hero-description">
            24/7 emergency response with real-time GPS tracking and immediate dispatch
          </p>
          <div className="stats-row">
            <div className="stat-box available">
              <div className="stat-icon">🚑</div>
              <div className="stat-content">
                <div className="stat-number">{ambulances.length}</div>
                <div className="stat-label">Total Ambulances</div>
              </div>
            </div>
            <div className="stat-box on-call">
              <div className="stat-icon">📞</div>
              <div className="stat-content">
                <div className="stat-number">{requests.filter(r => r.status === "Dispatched" || r.status === "In Transit").length}</div>
                <div className="stat-label">Active Calls</div>
              </div>
            </div>
            <div className="stat-box avg-time">
              <div className="stat-icon">⚡</div>
              <div className="stat-content">
                <div className="stat-number">4.2 min</div>
                <div className="stat-label">Avg Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="ambulance-main">
        <div className="main-container">
          {/* Request Form Section */}
          <section className="request-section">
            <h3 className="section-title">Request Ambulance</h3>
            <form onSubmit={handleSubmit} className="request-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="patientName">Patient Name</label>
                  <input
                    type="text"
                    id="patientName"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="Enter patient name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Contact Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="+1 234-567-8900"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pickupLocation">Pickup Location</label>
                  <input
                    type="text"
                    id="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="Enter location or department"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Priority Level</label>
                  <select
                    id="priority"
                    value={formData.priority}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  >
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="submit-btn">Dispatch Ambulance</button>
            </form>
          </section>

          {/* Active Requests Table */}
          <section className="requests-section">
            <h3 className="section-title">Active Requests</h3>
            <div className="table-container">
              <table className="requests-table">
                <thead>
                  <tr>
                    <th>Request ID</th>
                    <th>Patient Name</th>
                    <th>Location</th>
                    <th>Priority</th>
                    <th>Status</th>
                    <th>Time</th>
                    <th>Ambulance</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <tr key={request.id}>
                      <td>#{request.id}</td>
                      <td>{request.patientName}</td>
                      <td>{request.location}</td>
                      <td>
                        <span className={`priority-badge ${getPriorityClass(request.priority)}`}>
                          {request.priority}
                        </span>
                      </td>
                      <td>
                        <span className={`status-badge ${getStatusClass(request.status)}`}>
                          {request.status}
                        </span>
                      </td>
                      <td>{request.time}</td>
                      <td>{request.ambulance}</td>
                      <td>
                        <button className="action-btn track">Track</button>
                        <button className="action-btn complete">Complete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Ambulance Fleet */}
          <section className="fleet-section">
            <h3 className="section-title">Ambulance Fleet</h3>
            <div className="fleet-grid">
              {ambulances.map((ambulance) => (
                <div key={ambulance.id} className="ambulance-card">
                  <div className="ambulance-header">
                    <div className="ambulance-id">{ambulance.id}</div>
                    <div className={`ambulance-status ${getStatusClass(ambulance.status).replace('status-', '')}`}>
                      {ambulance.status}
                    </div>
                  </div>
                  <div className="ambulance-body">
                    <div className="ambulance-info">
                      <div className="info-row">
                        <span className="info-label">👤 Driver:</span>
                        <span className="info-value">{ambulance.driver}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">📍 Location:</span>
                        <span className="info-value">{ambulance.currentLocation}</span>
                      </div>
                      <div className="info-row">
                        <span className="info-label">📞 Phone:</span>
                        <span className="info-value">{ambulance.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="ambulance-actions">
                    <button className="track-btn">Track Location</button>
                    <button className="call-btn">Call Driver</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="page-footer">
        <p>© 2025 Hospital Service Management System. All rights reserved.</p>
      </footer>

      {/* Emergency Upload Modal */}
      {showEmergencyModal && (
        <EmergencyUpload onClose={() => setShowEmergencyModal(false)} />
      )}
    </div>
  );
}

export default Ambulance;
