import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './NotificationsPage.css';

function NotificationsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const [notifications] = useState([
    {
      id: 1,
      type: 'emergency',
      icon: '🚨',
      title: 'Code Blue - Emergency',
      message: 'Medical emergency in Emergency Department. Immediate response required.',
      time: '2 minutes ago',
      read: false,
      priority: 'critical'
    },
    {
      id: 2,
      type: 'ambulance',
      icon: '🚑',
      title: 'Ambulance Request',
      message: 'New ambulance request from John Doe. Location: Emergency Entrance.',
      time: '5 minutes ago',
      read: false,
      priority: 'high'
    },
    {
      id: 3,
      type: 'equipment',
      icon: '🛠️',
      title: 'Equipment Maintenance',
      message: 'Ventilator DEF-007 requires maintenance. Schedule required before next use.',
      time: '1 hour ago',
      read: false,
      priority: 'medium'
    },
    {
      id: 4,
      type: 'bed',
      icon: '🛏️',
      title: 'Bed Available',
      message: '3 beds now available in Ward 5. Assign patients to optimize capacity.',
      time: '2 hours ago',
      read: true,
      priority: 'low'
    },
    {
      id: 5,
      type: 'medicine',
      icon: '💊',
      title: 'Medicine Low Stock',
      message: 'Insulin is running low (15% remaining). Reorder immediately.',
      time: '3 hours ago',
      read: true,
      priority: 'high'
    },
    {
      id: 6,
      type: 'staff',
      icon: '👨‍⚕️',
      title: 'Staff Shift Change',
      message: 'Night shift team has started. 12 staff members have checked in.',
      time: '4 hours ago',
      read: true,
      priority: 'medium'
    },
    {
      id: 7,
      type: 'appointment',
      icon: '📅',
      title: 'Appointment Reminder',
      message: 'Dr. Smith has 5 upcoming appointments in the next hour.',
      time: '5 hours ago',
      read: true,
      priority: 'low'
    },
    {
      id: 8,
      type: 'system',
      icon: '⚠️',
      title: 'System Update',
      message: 'Security update applied successfully. Database backup completed.',
      time: '1 day ago',
      read: true,
      priority: 'low'
    }
  ]);

  const filteredNotifications = notifications.filter(notif => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'unread') return !notif.read;
    return notif.type === selectedFilter;
  });

  const unreadCount = notifications.filter(n => !n.read).length;
  const criticalCount = notifications.filter(n => n.priority === 'critical' && !n.read).length;

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'critical': return 'priority-critical';
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return '';
    }
  };

  const markAsRead = (id) => {
    // This would update the notification in a real app
    console.log('Mark as read:', id);
  };

  const markAllAsRead = () => {
    console.log('Mark all as read');
  };

  const deleteNotification = (id) => {
    console.log('Delete notification:', id);
  };

  return (
    <div className="notifications-page">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

      {/* Header */}
      <header className="notifications-header">
        <div className="header-container">
          <button className="menu-toggle" onClick={() => setSidebarOpen(true)}>☰</button>
          <div className="header-content">
            <h1 className="page-title">🔔 Notifications</h1>
            <div className="header-stats">
              <div className="stat-item">
                <span className="stat-number">{unreadCount}</span>
                <span className="stat-label">Unread</span>
              </div>
              <div className="stat-item critical">
                <span className="stat-number">{criticalCount}</span>
                <span className="stat-label">Critical</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="notifications-main">
        <div className="notifications-container">
          {/* Filters */}
          <section className="filters-section">
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('all')}
              >
                All ({notifications.length})
              </button>
              <button 
                className={`filter-btn ${selectedFilter === 'unread' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('unread')}
              >
                Unread ({unreadCount})
              </button>
              <button 
                className={`filter-btn ${selectedFilter === 'emergency' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('emergency')}
              >
                🚨 Emergency
              </button>
              <button 
                className={`filter-btn ${selectedFilter === 'ambulance' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('ambulance')}
              >
                🚑 Ambulance
              </button>
              <button 
                className={`filter-btn ${selectedFilter === 'equipment' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('equipment')}
              >
                🛠️ Equipment
              </button>
              <button 
                className={`filter-btn ${selectedFilter === 'medicine' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('medicine')}
              >
                💊 Medicine
              </button>
            </div>
            <div className="action-buttons">
              <button className="action-btn mark-all" onClick={markAllAsRead}>
                ✓ Mark All Read
              </button>
              <button className="action-btn refresh">
                ↻ Refresh
              </button>
            </div>
          </section>

          {/* Notifications List */}
          <section className="notifications-list-section">
            {filteredNotifications.length === 0 ? (
              <div className="empty-state">
                <div className="empty-icon">📭</div>
                <div className="empty-title">No Notifications</div>
                <div className="empty-desc">
                  {selectedFilter === 'unread' 
                    ? 'All caught up! No unread notifications.' 
                    : 'No notifications in this category.'}
                </div>
              </div>
            ) : (
              <div className="notifications-list">
                {filteredNotifications.map(notification => (
                  <div 
                    key={notification.id} 
                    className={`notification-card ${!notification.read ? 'unread' : ''} ${notification.priority}`}
                  >
                    <div className="notification-left">
                      <div className="notification-icon-wrapper">
                        <span className="notification-icon">{notification.icon}</span>
                      </div>
                      <div className="notification-content">
                        <div className="notification-header-row">
                          <h3 className="notification-title">{notification.title}</h3>
                          {!notification.read && <span className="unread-dot"></span>}
                        </div>
                        <p className="notification-message">{notification.message}</p>
                        <div className="notification-meta">
                          <span className="notification-time">{notification.time}</span>
                          <span className={`priority-badge ${getPriorityClass(notification.priority)}`}>
                            {notification.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="notification-actions">
                      {!notification.read && (
                        <button 
                          className="action-icon-btn"
                          onClick={() => markAsRead(notification.id)}
                          title="Mark as read"
                        >
                          ✓
                        </button>
                      )}
                      <button 
                        className="action-icon-btn delete"
                        onClick={() => deleteNotification(notification.id)}
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Quick Actions */}
          <section className="quick-actions-section">
            <h3 className="section-title">Quick Actions</h3>
            <div className="quick-actions-grid">
              <Link to="/alerts" className="quick-action-card emergency">
                <span className="action-icon">🚨</span>
                <span className="action-label">Send Alert</span>
              </Link>
              <Link to="/ambulance" className="quick-action-card">
                <span className="action-icon">🚑</span>
                <span className="action-label">Request Ambulance</span>
              </Link>
              <Link to="/equipment" className="quick-action-card">
                <span className="action-icon">🛠️</span>
                <span className="action-label">Check Equipment</span>
              </Link>
              <Link to="/settings" className="quick-action-card">
                <span className="action-icon">⚙️</span>
                <span className="action-label">Configure Alerts</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotificationsPage;


