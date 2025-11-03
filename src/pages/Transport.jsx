// src/pages/Transport.jsx
import React from "react";
import { Link } from "react-router-dom";

function Transport() {
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
            🦽 Patient Transport
          </h1>
          <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            {/* Back button to CoreServices */}
            <Link
              to="/core-services"
              style={{ color: "#374151", textDecoration: "none", fontWeight: "500" }}
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
          🦽 Patient Transport Services
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          Safe and comfortable transport for patients within hospital premises, including wheelchairs, stretchers, and critical patient transfers.
        </p>

        {/* Transport Features */}
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
              Wheelchair Transfers
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563" }}>
              Comfortable and safe wheelchair transport for non-critical patients.
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
              Stretcher Transfers
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563" }}>
              Safe and monitored stretcher transfers for patients with limited mobility.
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
              Internal Hospital Transfers
            </h3>
            <p style={{ fontSize: "14px", color: "#4b5563" }}>
              Quick and organized patient transfer between departments.
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

export default Transport;
