import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';
import Notifications from '../components/Notifications';
import './Dashboard.css';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifications] = useState([
    { icon: '🚑', title: 'New Ambulance Request', message: 'Patient needs immediate transfer', time: '2 min ago', read: false },
    { icon: '🚨', title: 'Emergency Alert', message: 'Code Blue in Emergency Dept', time: '5 min ago', read: false },
    { icon: '🛏️', title: 'Bed Available', message: '3 beds now available in Ward 5', time: '1 hour ago', read: false },
    { icon: '💊', title: 'Medicine Low Stock', message: 'Insulin running low', time: '2 hours ago', read: true },
    { icon: '🛠️', title: 'Equipment Maintenance', message: 'Ventilator DEF-007 requires maintenance', time: '3 hours ago', read: true },
  ]);

  const stats = {
    totalPatients: 156,
    totalBeds: 200,
    availableBeds: 44,
    totalStaff: 320,
    activeStaff: 280,
    ambulancesAvailable: 5,
    activeAlerts: 2,
    maintenanceDue: 3,
  };

  const markAsRead = (index) => {
    console.log('Mark as read', index);
  };

  return (
    <div className="dashboard-page">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Top Navigation Bar */}
      <header className="dashboard-header">
        <div className="header-left">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>
            ☰
          </button>
          <input
            type="text"
            className="header-search"
            placeholder="Search..."
            onClick={() => setSearchOpen(true)}
            readOnly
          />
        </div>
        <div className="header-right">
          <Notifications
            notifications={notifications}
            markAsRead={markAsRead}
            clearAll={() => {}}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="dashboard-container">
          {/* Welcome Section */}
          <section className="welcome-section">
            <h1 className="welcome-title">Welcome back! 👋</h1>
            <p className="welcome-subtitle">Here's what's happening at your hospital today</p>
          </section>

          {/* Key Stats */}
          <section className="stats-grid">
            <div className="stat-card primary">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-value">{stats.totalPatients}</div>
                <div className="stat-label">Total Patients</div>
              </div>
            </div>
            <div className="stat-card success">
              <div className="stat-icon">🛏️</div>
              <div className="stat-info">
                <div className="stat-value">{stats.availableBeds}</div>
                <div className="stat-label">Available Beds</div>
              </div>
            </div>
            <div className="stat-card warning">
              <div className="stat-icon">🚑</div>
              <div className="stat-info">
                <div className="stat-value">{stats.ambulancesAvailable}</div>
                <div className="stat-label">Available Ambulances</div>
              </div>
            </div>
            <div className="stat-card danger">
              <div className="stat-icon">🚨</div>
              <div className="stat-info">
                <div className="stat-value">{stats.activeAlerts}</div>
                <div className="stat-label">Active Alerts</div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="actions-section">
            <h2 className="section-title">Quick Actions</h2>
            <div className="actions-grid">
              <Link to="/ambulance" className="action-card emergency">
                <span className="action-icon">🚑</span>
                <span className="action-label">Request Ambulance</span>
              </Link>
              <Link to="/alerts" className="action-card emergency">
                <span className="action-icon">🚨</span>
                <span className="action-label">Send Alert</span>
              </Link>
              <Link to="/attendance" className="action-card">
                <span className="action-icon">🕒</span>
                <span className="action-label">Check Attendance</span>
              </Link>
              <Link to="/equipment" className="action-card">
                <span className="action-icon">🛠️</span>
                <span className="action-label">Manage Equipment</span>
              </Link>
              <Link to="/beds" className="action-card">
                <span className="action-icon">🛏️</span>
                <span className="action-label">Bed Management</span>
              </Link>
              <Link to="/shifts" className="action-card">
                <span className="action-icon">📅</span>
                <span className="action-label">View Shifts</span>
              </Link>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="activity-section">
            <h2 className="section-title">Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <span className="activity-icon">🚑</span>
                <div className="activity-content">
                  <div className="activity-title">Ambulance dispatched for emergency</div>
                  <div className="activity-time">5 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">🛏️</span>
                <div className="activity-content">
                  <div className="activity-title">3 new beds assigned to Ward 5</div>
                  <div className="activity-time">15 minutes ago</div>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">👩‍⚕️</span>
                <div className="activity-content">
                  <div className="activity-title">New shift assigned to 12 staff members</div>
                  <div className="activity-time">1 hour ago</div>
                </div>
              </div>
              <div className="activity-item">
                <span className="activity-icon">💊</span>
                <div className="activity-content">
                  <div className="activity-title">Pharmacy inventory updated</div>
                  <div className="activity-time">2 hours ago</div>
                </div>
              </div>
            </div>
          </section>

          {/* System Status */}
          <section className="status-section">
            <h2 className="section-title">System Status</h2>
            <div className="status-grid">
              <div className="status-card">
                <div className="status-indicator active"></div>
                <div className="status-info">
                  <div className="status-name">Emergency Services</div>
                  <div className="status-desc">All systems operational</div>
                </div>
              </div>
              <div className="status-card">
                <div className="status-indicator active"></div>
                <div className="status-info">
                  <div className="status-name">Staff Management</div>
                  <div className="status-desc">280 staff on duty</div>
                </div>
              </div>
              <div className="status-card">
                <div className="status-indicator warning"></div>
                <div className="status-info">
                  <div className="status-name">Equipment</div>
                  <div className="status-desc">3 items need maintenance</div>
                </div>
              </div>
              <div className="status-card">
                <div className="status-indicator active"></div>
                <div className="status-info">
                  <div className="status-name">Database</div>
                  <div className="status-desc">All backups complete</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Search isOpen={searchOpen} setIsOpen={setSearchOpen} />
    </div>
  );
}

export default Dashboard;


