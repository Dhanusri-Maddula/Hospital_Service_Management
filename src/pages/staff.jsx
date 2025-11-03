// src/pages/Shifts.jsx
import React from "react";
import { Link } from "react-router-dom";

function Shifts() {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f9fafb",
        color: "#1f2937",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <header
        style={{
          background: "white",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 24px",
          }}
        >
          <h1 style={{ fontSize: "22px", fontWeight: "bold", color: "#1d4ed8" }}>
            📅 Shift Scheduling
          </h1>
          <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {/* Back button to StaffServices */}
            <Link
              to="/staff-services"
              style={{
                color: "#374151",
                textDecoration: "none",
                fontWeight: "500",
              }}
            >
              Back
            </Link>
            <Link to="/" style={{ color: "#374151", textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/services" style={{ color: "#374151", textDecoration: "none" }}>
              Services
            </Link>
            <Link to="/#about" style={{ color: "#374151", textDecoration: "none" }}>
              About
            </Link>
            <Link to="/#contact" style={{ color: "#374151", textDecoration: "none" }}>
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px" }}>
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#1d4ed8",
            marginBottom: "20px",
          }}
        >
          📅 Staff Shift Management
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Manage duty rosters, assign shifts, and avoid conflicts efficiently.
          Ensure optimal coverage across all departments and streamline staff scheduling.
        </p>

        {/* Shift Management Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px", color: "#1d4ed8" }}>
              View Roster
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563" }}>
              Access current shift schedules and staff assignments.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px", color: "#1d4ed8" }}>
              Assign Shifts
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563" }}>
              Assign or adjust staff shifts to avoid scheduling conflicts.
            </p>
          </div>

          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "10px", color: "#1d4ed8" }}>
              Shift Reports
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563" }}>
              Generate detailed reports on shift allocations and staff coverage.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          background: "#1d4ed8",
          color: "white",
          padding: "24px",
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <p>© 2025 Hospital Service Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Shifts;
