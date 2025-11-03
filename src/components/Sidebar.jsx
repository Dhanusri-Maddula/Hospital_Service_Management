import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const menuItems = [
    {
      icon: '🏠',
      label: 'Dashboard',
      path: '/dashboard',
      badge: null
    },
    {
      icon: '🏥',
      label: 'Core Services',
      path: '/core-services',
      children: [
        { label: 'Ambulance', path: '/ambulance', icon: '🚑' },
        { label: 'Equipment', path: '/equipment', icon: '🛠️' },
        { label: 'Alerts', path: '/alerts', icon: '🚨' },
        { label: 'Pharmacy', path: '/pharmacy', icon: '💊' },
        { label: 'Beds', path: '/beds', icon: '🛏️' },
      ]
    },
    {
      icon: '👩‍⚕️',
      label: 'Staff Services',
      path: '/staff-services',
      children: [
        { label: 'Attendance', path: '/attendance', icon: '🕒' },
        { label: 'Shifts', path: '/shifts', icon: '📅' },
        { label: 'Leave', path: '/leave', icon: '🏖️' },
        { label: 'Reports', path: '/reports', icon: '📊' },
      ]
    },
    {
      icon: '📊',
      label: 'Analytics',
      path: '/analytics',
      badge: 'NEW'
    },
    {
      icon: '🔔',
      label: 'Notifications',
      path: '/notifications',
      badge: '5'
    },
    {
      icon: '⚙️',
      label: 'Settings',
      path: '/settings',
      badge: null
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const hasActiveChild = (children) => {
    if (!children) return false;
    return children.some(child => location.pathname === child.path);
  };

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-logo">
            <span className="logo-icon">🏥</span>
            <span className="logo-text">HMS</span>
          </h2>
          <button className="sidebar-close" onClick={() => setIsOpen(false)}>×</button>
        </div>

        <div className="sidebar-menu">
          {menuItems.map((item, index) => {
            const isParentActive = isActive(item.path) || hasActiveChild(item.children);
            const isExpanded = activeDropdown === index;

            return (
              <div key={index}>
                <Link
                  to={item.path}
                  className={`menu-item ${isParentActive ? 'active' : ''}`}
                  onClick={() => item.children && toggleDropdown(index)}
                >
                  <div className="menu-item-content">
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-label">{item.label}</span>
                    {item.badge && <span className="menu-badge">{item.badge}</span>}
                  </div>
                  {item.children && (
                    <span className="menu-arrow">{isExpanded ? '▲' : '▼'}</span>
                  )}
                </Link>

                {item.children && isExpanded && (
                  <div className="submenu">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        to={child.path}
                        className={`submenu-item ${isActive(child.path) ? 'active' : ''}`}
                      >
                        <span className="submenu-icon">{child.icon}</span>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="sidebar-footer">
          <div className="user-section">
            <div className="user-avatar">👤</div>
            <div className="user-info">
              <div className="user-name">Admin User</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>
          <Link to="/settings" className="user-settings">⚙️</Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;


