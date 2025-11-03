// CoreServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./CoreServices.css";

function CoreServices() {
  const services = [
    { icon: "🚑", title: "Ambulance Services", desc: "Emergency & patient transfer requests with GPS tracking and real-time monitoring.", path: "/ambulance", category: "Emergency", priority: "High" },
    { icon: "🛠️", title: "Hospital Equipment Management", desc: "Track ventilators, oxygen cylinders, wheelchairs, and medical devices.", path: "/equipment", category: "Equipment", priority: "High" },
    { icon: "💊", title: "Medicine Supply & Pharmacy", desc: "Manage stock, expiry dates, prescription distribution, and inventory.", path: "/pharmacy", category: "Medical", priority: "High" },
    { icon: "🦽", title: "Patient Transport", desc: "Wheelchair, stretcher, and internal hospital transfers with scheduling.", path: "/transport", category: "Transport", priority: "Medium" },
    { icon: "👩‍⚕️", title: "Nursing & Staff Requests", desc: "Request additional nurses, helpers, or support staff for patient care.", path: "/nursing", category: "Staff", priority: "High" },
    { icon: "🍽️", title: "Cafeteria / Meal Services", desc: "Diet meals for patients, staff meal ordering, and nutrition management.", path: "/cafeteria", category: "Support", priority: "Medium" },
    { icon: "🔬", title: "Laboratory & Diagnostics", desc: "Blood tests, MRI, X-ray requests, sample tracking, and results.", path: "/lab", category: "Medical", priority: "High" },
    { icon: "🧹", title: "Waste Management & Cleaning", desc: "Biomedical waste disposal, room sanitization, and hygiene protocols.", path: "/waste", category: "Support", priority: "Medium" },
    { icon: "🛏️", title: "Room & Bed Management", desc: "Track bed availability, discharge readiness, and room assignments.", path: "/beds", category: "Facilities", priority: "High" },
    { icon: "🚨", title: "Emergency Alerts", desc: "Mass staff notifications for urgent situations and emergency protocols.", path: "/alerts", category: "Emergency", priority: "High" },
    { icon: "🔧", title: "Maintenance & Repairs", desc: "Report and track electrical, plumbing, AC issues, and equipment repairs.", path: "/repairs", category: "Facilities", priority: "Medium" },
    { icon: "🩸", title: "Blood Bank", desc: "Check availability, schedule donor appointments, and blood inventory.", path: "/bloodbank", category: "Medical", priority: "High" },
    { icon: "💻", title: "Telemedicine", desc: "Video consultations integrated with patient records and remote monitoring.", path: "/telemedicine", category: "Technology", priority: "Medium" },
    { icon: "💳", title: "Insurance & Billing", desc: "Claim processing, payment tracking, and financial management.", path: "/billing", category: "Administrative", priority: "Medium" },
    { icon: "🏥", title: "Patient Registration", desc: "Admission, discharge, patient data management, and medical records.", path: "/registration", category: "Administrative", priority: "High" },
    { icon: "📋", title: "Appointment Scheduling", desc: "Doctor appointments, procedure scheduling, and calendar management.", path: "/appointments", category: "Administrative", priority: "High" },
    { icon: "🔍", title: "Diagnostic Imaging", desc: "CT scans, ultrasounds, mammography, and radiology services.", path: "/imaging", category: "Medical", priority: "High" },
    { icon: "💉", title: "Vaccination Center", desc: "Immunization schedules, vaccine inventory, and patient tracking.", path: "/vaccination", category: "Medical", priority: "Medium" },
    { icon: "🧠", title: "Mental Health Services", desc: "Psychiatric consultations, therapy sessions, and mental health support.", path: "/mental-health", category: "Medical", priority: "Medium" },
    { icon: "👶", title: "Pediatric Care", desc: "Child health services, pediatric consultations, and specialized care.", path: "/pediatrics", category: "Medical", priority: "High" },
    { icon: "👴", title: "Geriatric Care", desc: "Elderly patient care, senior health programs, and age-related services.", path: "/geriatrics", category: "Medical", priority: "Medium" },
    { icon: "🦷", title: "Dental Services", desc: "Oral health, dental procedures, and dental emergency services.", path: "/dental", category: "Medical", priority: "Medium" },
    { icon: "👁️", title: "Ophthalmology", desc: "Eye care, vision testing, and ophthalmological procedures.", path: "/ophthalmology", category: "Medical", priority: "Medium" },
    { icon: "🦵", title: "Physical Therapy", desc: "Rehabilitation services, physiotherapy, and recovery programs.", path: "/physiotherapy", category: "Medical", priority: "Medium" },
    { icon: "🍼", title: "Maternity Services", desc: "Prenatal care, delivery services, and postnatal support.", path: "/maternity", category: "Medical", priority: "High" },
    { icon: "🫀", title: "Cardiology", desc: "Heart care, cardiac procedures, and cardiovascular monitoring.", path: "/cardiology", category: "Medical", priority: "High" },
    { icon: "🫁", title: "Pulmonology", desc: "Respiratory care, lung treatments, and breathing therapy.", path: "/pulmonology", category: "Medical", priority: "High" },
    { icon: "🧬", title: "Oncology", desc: "Cancer treatment, chemotherapy, and oncology support services.", path: "/oncology", category: "Medical", priority: "High" },
    { icon: "🦴", title: "Orthopedics", desc: "Bone and joint care, orthopedic surgery, and musculoskeletal treatment.", path: "/orthopedics", category: "Medical", priority: "High" },
    { icon: "🧠", title: "Neurology", desc: "Brain and nervous system care, neurological examinations.", path: "/neurology", category: "Medical", priority: "High" },
    { icon: "🩺", title: "General Medicine", desc: "Primary care, general consultations, and routine health checkups.", path: "/general-medicine", category: "Medical", priority: "High" },
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="core-services-page">
      {/* Navbar */}
      <header className="core-navbar">
        <div className="navbar-container">
          <h1 className="core-logo">🏥 Core Hospital Services</h1>
          <nav className="core-nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/core-services" className="nav-link active">Core Services</Link>
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="core-hero">
        <div className="hero-content">
          <h2>Core Hospital Services</h2>
          <p>
            Essential medical services designed to ensure smooth operations, 
            patient care, and comprehensive hospital management.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="core-main">
        <div className="core-container">
          <div className="services-header">
            <h3>Available Services</h3>
            <p>Click on any service to access its dedicated management interface</p>
            <div className="service-stats">
              <div className="stat-item">
                <span className="stat-number">{services.length}</span>
                <span className="stat-label">Total Services</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{services.filter(s => s.priority === "High").length}</span>
                <span className="stat-label">High Priority</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{categories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <Link to={service.path} key={index} className="service-card">
                <div className="card-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-badges">
                    <div className="service-category">{service.category}</div>
                    <div className={`priority-badge ${service.priority.toLowerCase()}`}>
                      {service.priority}
                    </div>
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="service-title">{service.title}</h4>
                  <p className="service-desc">{service.desc}</p>
                </div>
                <div className="card-footer">
                  <span className="service-link">Access Service →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Service Categories */}
          <div className="categories-section">
            <h3>Service Categories</h3>
            <div className="categories-grid">
              {categories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="category-icon">
                    {category === "Emergency" && "🚨"}
                    {category === "Medical" && "🏥"}
                    {category === "Equipment" && "🔧"}
                    {category === "Transport" && "🚗"}
                    {category === "Staff" && "👥"}
                    {category === "Support" && "🤝"}
                    {category === "Facilities" && "🏢"}
                    {category === "Technology" && "💻"}
                    {category === "Administrative" && "📋"}
                  </div>
                  <h4>{category}</h4>
                  <p>{services.filter(s => s.category === category).length} services</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="core-footer">
        <p>© 2025 Hospital Service Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default CoreServices;
