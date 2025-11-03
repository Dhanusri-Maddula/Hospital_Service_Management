import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: false,
      push: true,
    },
    system: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC+5:30',
    },
    security: {
      twoFactor: false,
      autoLogout: true,
      sessionTimeout: 30,
    }
  });

  const handleChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <h1 className="page-title">⚙️ Settings</h1>
        <p className="page-subtitle">Manage your hospital system preferences</p>
      </div>

      <div className="settings-container">
        {/* Notification Settings */}
        <section className="settings-section">
          <h2 className="section-title">📢 Notifications</h2>
          <div className="settings-items">
            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Email Notifications</h3>
                <p className="setting-desc">Receive email alerts for important events</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={(e) => handleChange('notifications', 'email', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">SMS Notifications</h3>
                <p className="setting-desc">Get SMS alerts for critical emergencies</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.sms}
                  onChange={(e) => handleChange('notifications', 'sms', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Push Notifications</h3>
                <p className="setting-desc">Enable browser push notifications</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={(e) => handleChange('notifications', 'push', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>

        {/* System Settings */}
        <section className="settings-section">
          <h2 className="section-title">🖥️ System Preferences</h2>
          <div className="settings-items">
            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Theme</h3>
                <p className="setting-desc">Choose your preferred theme</p>
              </div>
              <select
                className="setting-select"
                value={settings.system.theme}
                onChange={(e) => handleChange('system', 'theme', e.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Language</h3>
                <p className="setting-desc">Select your preferred language</p>
              </div>
              <select
                className="setting-select"
                value={settings.system.language}
                onChange={(e) => handleChange('system', 'language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="hi">Hindi</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Timezone</h3>
                <p className="setting-desc">Set your local timezone</p>
              </div>
              <select
                className="setting-select"
                value={settings.system.timezone}
                onChange={(e) => handleChange('system', 'timezone', e.target.value)}
              >
                <option value="UTC+5:30">UTC+5:30 (IST)</option>
                <option value="UTC+0">UTC (GMT)</option>
                <option value="UTC-5">UTC-5 (EST)</option>
                <option value="UTC+8">UTC+8 (CST)</option>
              </select>
            </div>
          </div>
        </section>

        {/* Security Settings */}
        <section className="settings-section">
          <h2 className="section-title">🔒 Security</h2>
          <div className="settings-items">
            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Two-Factor Authentication</h3>
                <p className="setting-desc">Add an extra layer of security</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.security.twoFactor}
                  onChange={(e) => handleChange('security', 'twoFactor', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Auto Logout</h3>
                <p className="setting-desc">Automatically log out after inactivity</p>
              </div>
              <label className="switch">
                <input
                  type="checkbox"
                  checked={settings.security.autoLogout}
                  onChange={(e) => handleChange('security', 'autoLogout', e.target.checked)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h3 className="setting-label">Session Timeout</h3>
                <p className="setting-desc">Minutes until automatic logout</p>
              </div>
              <input
                type="number"
                className="setting-input"
                value={settings.security.sessionTimeout}
                onChange={(e) => handleChange('security', 'sessionTimeout', e.target.value)}
                min="5"
                max="120"
              />
            </div>
          </div>
        </section>

        {/* Save Button */}
        <div className="settings-footer">
          <button className="save-btn">💾 Save Changes</button>
          <button className="reset-btn">↺ Reset to Default</button>
        </div>
      </div>
    </div>
  );
}

export default Settings;


