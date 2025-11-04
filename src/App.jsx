// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// Landing & Service Overview Pages
import Landing from "./landing";
import CoreServices from "./CoreServices";
import StaffServices from "./StaffServices";
import Services from "./Services";

// Auth Pages
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Core Service Pages
import Ambulance from "./pages/Ambulance";
import Equipment from "./pages/Equipment";
import Pharmacy from "./pages/Pharmacy";
import Transport from "./pages/Transport";
import Nursing from "./pages/Nursing";
import Cafeteria from "./pages/Cafeteria";
import Lab from "./pages/Lab";
import Waste from "./pages/Waste";
import Beds from "./pages/Beds";
import Alerts from "./pages/Alerts";
import Repairs from "./pages/Repairs";
import BloodBank from "./pages/BloodBank";
import Telemedicine from "./pages/Telemedicine";
import Billing from "./pages/Billing";

// Staff Service Pages
import Attendance from "./pages/AttendanceReal";
import Shifts from "./pages/Shifts";
import Leave from "./pages/Leave";
import Overtime from "./pages/Overtime";
import Availability from "./pages/Availability";
import Reports from "./pages/Reports";

// New Feature Pages
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotificationsPage from "./pages/NotificationsPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Landing & Overview */}
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/core-services" element={<CoreServices />} />
          <Route path="/staff-services" element={<StaffServices />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

        {/* Core Services */}
        <Route path="/ambulance" element={<Ambulance />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/nursing" element={<Nursing />} />
        <Route path="/cafeteria" element={<Cafeteria />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/waste" element={<Waste />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/repairs" element={<Repairs />} />
        <Route path="/bloodbank" element={<BloodBank />} />
        <Route path="/telemedicine" element={<Telemedicine />} />
        <Route path="/billing" element={<Billing />} />

        {/* Staff Services */}
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/shifts" element={<Shifts />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/overtime" element={<Overtime />} />
        <Route path="/availability" element={<Availability />} />
        <Route path="/reports" element={<Reports />} />

        {/* New Features */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
