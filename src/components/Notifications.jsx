import React, { useState } from 'react';
import './Notifications.css';

function Notifications({ notifications, markAsRead, clearAll }) {
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  if (notifications.length === 0) return null;

  return (
    <div className="notifications-container">
      <button className="notification-button" onClick={() => setIsOpen(!isOpen)}>
        <span className="bell-icon">🔔</span>
        {unreadCount > 0 && <span className="notification-badge">{unreadCount}</span>}
      </button>

      {isOpen && (
        <>
          <div className="notification-overlay" onClick={() => setIsOpen(false)} />
          <div className="notification-panel">
            <div className="notification-header">
              <h3>Notifications</h3>
              <div className="notification-actions">
                {unreadCount > 0 && (
                  <button className="action-btn" onClick={() => console.log('Mark all read')}>Mark all read</button>
                )}
                <button className="action-btn" onClick={() => setIsOpen(false)}>Close</button>
              </div>
            </div>
            <div className="notification-list">
              {notifications.slice(0, 10).map((notification, index) => (
                <div
                  key={index}
                  className={`notification-item ${!notification.read ? 'unread' : ''}`}
                  onClick={() => markAsRead(index)}
                >
                  <div className="notification-icon">{notification.icon}</div>
                  <div className="notification-content">
                    <div className="notification-title">{notification.title}</div>
                    <div className="notification-message">{notification.message}</div>
                    <div className="notification-time">{notification.time}</div>
                  </div>
                </div>
              ))}
            </div>
            {notifications.length > 10 && (
              <div className="notification-footer">
                <button className="view-all-btn">View All Notifications</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Notifications;

