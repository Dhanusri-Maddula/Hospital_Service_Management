// StaffServices.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./StaffServices.css";

function StaffServices() {
  const staffServices = [
    { icon: "🕒", title: "Attendance Management", desc: "Track staff attendance, check-ins, and working hours with real-time monitoring.", path: "/attendance", category: "Time Management", priority: "High" },
    { icon: "📅", title: "Shift Scheduling", desc: "Manage duty rosters, assign shifts, and avoid conflicts with smart scheduling.", path: "/shifts", category: "Scheduling", priority: "High" },
    { icon: "📝", title: "Leave Management", desc: "Process leave requests and approvals for staff efficiently with automated workflows.", path: "/leave", category: "HR Management", priority: "High" },
    { icon: "⏱️", title: "Overtime Tracking", desc: "Monitor and calculate overtime hours and compensation with detailed reporting.", path: "/overtime", category: "Payroll", priority: "Medium" },
    { icon: "👥", title: "Staff Availability", desc: "Check real-time availability of staff members across all departments.", path: "/availability", category: "Resource Management", priority: "High" },
    { icon: "📊", title: "Reports & Analytics", desc: "Generate comprehensive workforce reports for better planning and decision making.", path: "/reports", category: "Analytics", priority: "Medium" },
    { icon: "🎓", title: "Training & Development", desc: "Staff training programs, skill development, and certification tracking.", path: "/training", category: "HR Management", priority: "Medium" },
    { icon: "💰", title: "Payroll Management", desc: "Salary processing, benefits administration, and compensation management.", path: "/payroll", category: "Payroll", priority: "High" },
    { icon: "📋", title: "Performance Reviews", desc: "Employee evaluations, performance metrics, and feedback systems.", path: "/performance", category: "HR Management", priority: "Medium" },
    { icon: "🔐", title: "Access Control", desc: "Staff permissions, role management, and security access controls.", path: "/access-control", category: "Security", priority: "High" },
    { icon: "📱", title: "Staff Communication", desc: "Internal messaging, announcements, and team communication tools.", path: "/communication", category: "Communication", priority: "Medium" },
    { icon: "🏥", title: "Department Management", desc: "Department assignments, team structures, and organizational charts.", path: "/departments", category: "Organization", priority: "Medium" },
    { icon: "📈", title: "Workforce Planning", desc: "Staff forecasting, recruitment planning, and capacity management.", path: "/workforce-planning", category: "Planning", priority: "Medium" },
    { icon: "🎯", title: "Goal Setting", desc: "Individual and team objectives, KPI tracking, and achievement monitoring.", path: "/goals", category: "Performance", priority: "Low" },
    { icon: "📞", title: "Emergency Contacts", desc: "Staff emergency information, contact lists, and crisis communication.", path: "/emergency-contacts", category: "Emergency", priority: "High" },
    { icon: "🏆", title: "Recognition & Awards", desc: "Employee recognition programs, awards, and achievement celebrations.", path: "/recognition", category: "HR Management", priority: "Low" },
    { icon: "📚", title: "Document Management", desc: "Staff documents, contracts, certificates, and file management.", path: "/documents", category: "Administrative", priority: "Medium" },
    { icon: "🔍", title: "Background Checks", desc: "Employee verification, credential checks, and compliance monitoring.", path: "/background-checks", category: "Compliance", priority: "High" },
    { icon: "📊", title: "Staff Surveys", desc: "Employee satisfaction surveys, feedback collection, and engagement metrics.", path: "/surveys", category: "Analytics", priority: "Low" },
    { icon: "🔄", title: "Staff Rotation", desc: "Department rotations, cross-training, and skill diversification programs.", path: "/rotation", category: "Development", priority: "Low" },
  ];

  const categories = [...new Set(staffServices.map(service => service.category))];

  return (
    <div className="staff-services-page">
      {/* Navbar */}
      <header className="staff-navbar">
        <div className="navbar-container">
          <h1 className="staff-logo">👩‍⚕️ Staff & Workforce Services</h1>
          <nav className="staff-nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/staff-services" className="nav-link active">Staff Services</Link>
            <Link to="/#about" className="nav-link">About</Link>
            <Link to="/#contact" className="nav-link">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="staff-hero">
        <div className="hero-content">
          <h2>Staff & Workforce Services</h2>
          <p>
            Comprehensive staff management solutions designed to optimize workforce efficiency, 
            streamline operations, and enhance employee experience.
          </p>
        </div>
      </section>

      {/* Staff Services Section */}
      <section className="staff-main">
        <div className="staff-container">
          <div className="services-header">
            <h3>Staff Management Services</h3>
            <p>Access powerful tools to manage your workforce effectively and efficiently</p>
            <div className="service-stats">
              <div className="stat-item">
                <span className="stat-number">{staffServices.length}</span>
                <span className="stat-label">Total Services</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{staffServices.filter(s => s.priority === "High").length}</span>
                <span className="stat-label">High Priority</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{categories.length}</span>
                <span className="stat-label">Categories</span>
              </div>
            </div>
          </div>

          <div className="services-grid">
            {staffServices.map((service, index) => (
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
                  <span className="service-link">Manage Staff →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Staff Benefits */}
          <div className="benefits-section">
            <h3>Staff Management Benefits</h3>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⚡</div>
                <h4>Efficiency Boost</h4>
                <p>Streamline operations and reduce administrative overhead</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📈</div>
                <h4>Performance Tracking</h4>
                <p>Monitor staff performance with detailed analytics</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h4>Resource Optimization</h4>
                <p>Optimize staff allocation and reduce costs</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🔒</div>
                <h4>Compliance Management</h4>
                <p>Ensure regulatory compliance and audit readiness</p>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="categories-section">
            <h3>Service Categories</h3>
            <div className="categories-grid">
              {categories.map((category, index) => (
                <div key={index} className="category-card">
                  <div className="category-icon">
                    {category === "Time Management" && "⏰"}
                    {category === "Scheduling" && "📅"}
                    {category === "HR Management" && "👥"}
                    {category === "Payroll" && "💰"}
                    {category === "Resource Management" && "🔧"}
                    {category === "Analytics" && "📊"}
                    {category === "Security" && "🔐"}
                    {category === "Communication" && "📱"}
                    {category === "Organization" && "🏥"}
                    {category === "Planning" && "📈"}
                    {category === "Performance" && "🎯"}
                    {category === "Emergency" && "🚨"}
                    {category === "Administrative" && "📚"}
                    {category === "Compliance" && "🔍"}
                    {category === "Development" && "🔄"}
                  </div>
                  <h4>{category}</h4>
                  <p>{staffServices.filter(s => s.category === category).length} services</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="staff-footer">
        <p>© 2025 Hospital Service Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default StaffServices;
