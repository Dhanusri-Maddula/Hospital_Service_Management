import React, { useState, useEffect } from 'react';
import './Search.css';

function Search({ isOpen, setIsOpen }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchItems = [
    { type: 'Ambulance', title: 'Request Ambulance', path: '/ambulance', icon: '🚑' },
    { type: 'Equipment', title: 'Manage Equipment', path: '/equipment', icon: '🛠️' },
    { type: 'Alerts', title: 'Send Alert', path: '/alerts', icon: '🚨' },
    { type: 'Attendance', title: 'Check Attendance', path: '/attendance', icon: '🕒' },
    { type: 'Shifts', title: 'View Shifts', path: '/shifts', icon: '📅' },
    { type: 'Pharmacy', title: 'Pharmacy Management', path: '/pharmacy', icon: '💊' },
    { type: 'Beds', title: 'Bed Management', path: '/beds', icon: '🛏️' },
    { type: 'Reports', title: 'View Reports', path: '/reports', icon: '📊' },
    { type: 'Settings', title: 'System Settings', path: '/settings', icon: '⚙️' },
    { type: 'Dashboard', title: 'Main Dashboard', path: '/dashboard', icon: '🏠' },
  ];

  useEffect(() => {
    if (searchTerm) {
      const filtered = searchItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults(searchItems.slice(0, 5));
    }
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <>
      <div className="search-overlay" onClick={() => setIsOpen(false)} />
      <div className="search-modal">
        <div className="search-header">
          <input
            type="text"
            className="search-input"
            placeholder="Search services, pages, features..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button className="search-close" onClick={() => setIsOpen(false)}>×</button>
        </div>
        <div className="search-results">
          {results.length === 0 ? (
            <div className="no-results">
              <span className="no-results-icon">🔍</span>
              <p>No results found</p>
            </div>
          ) : (
            <div className="results-list">
              {results.map((item, index) => (
                <a key={index} href={item.path} className="result-item" onClick={() => setIsOpen(false)}>
                  <span className="result-icon">{item.icon}</span>
                  <div className="result-content">
                    <div className="result-title">{item.title}</div>
                    <div className="result-type">{item.type}</div>
                  </div>
                  <span className="result-arrow">→</span>
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="search-footer">
          <span className="search-hint">Press ESC to close</span>
        </div>
      </div>
    </>
  );
}

export default Search;


