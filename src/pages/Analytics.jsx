import React, { useState } from 'react';
import './Analytics.css';

function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  
  const data = {
    patients: {
      total: 1240,
      admitted: 156,
      discharged: 98,
      trend: '+12%'
    },
    revenue: {
      total: 2450000,
      weekly: 420000,
      trend: '+8%'
    },
    operations: {
      total: 342,
      success: 329,
      successRate: 96.2
    },
    utilization: {
      beds: 78,
      equipment: 65,
      staff: 87
    }
  };

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div>
          <h1 className="page-title">📊 Analytics & Reports</h1>
          <p className="page-subtitle">Comprehensive insights into hospital operations</p>
        </div>
        <div className="period-selector">
          <button 
            className={`period-btn ${selectedPeriod === 'day' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('day')}
          >
            Today
          </button>
          <button 
            className={`period-btn ${selectedPeriod === 'week' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('week')}
          >
            This Week
          </button>
          <button 
            className={`period-btn ${selectedPeriod === 'month' ? 'active' : ''}`}
            onClick={() => setSelectedPeriod('month')}
          >
            This Month
          </button>
        </div>
      </div>

      <div className="analytics-grid">
        {/* Key Metrics */}
        <div className="metric-card primary">
          <div className="metric-header">
            <span className="metric-icon">👥</span>
            <span className="metric-trend positive">+12%</span>
          </div>
          <div className="metric-value">{data.patients.total}</div>
          <div className="metric-label">Total Patients</div>
          <div className="metric-details">
            <div className="metric-detail">
              <span className="detail-label">Admitted</span>
              <span className="detail-value">{data.patients.admitted}</span>
            </div>
            <div className="metric-detail">
              <span className="detail-label">Discharged</span>
              <span className="detail-value">{data.patients.discharged}</span>
            </div>
          </div>
        </div>

        <div className="metric-card success">
          <div className="metric-header">
            <span className="metric-icon">💰</span>
            <span className="metric-trend positive">+8%</span>
          </div>
          <div className="metric-value">${(data.revenue.total / 1000000).toFixed(1)}M</div>
          <div className="metric-label">Total Revenue</div>
          <div className="metric-details">
            <div className="metric-detail">
              <span className="detail-label">This Week</span>
              <span className="detail-value">${(data.revenue.weekly / 1000).toFixed(0)}K</span>
            </div>
            <div className="metric-detail">
              <span className="detail-label">Avg/Day</span>
              <span className="detail-value">${(data.revenue.weekly / 7000).toFixed(0)}K</span>
            </div>
          </div>
        </div>

        <div className="metric-card warning">
          <div className="metric-header">
            <span className="metric-icon">🏥</span>
            <span className="metric-trend positive">+5%</span>
          </div>
          <div className="metric-value">{data.operations.total}</div>
          <div className="metric-label">Total Operations</div>
          <div className="metric-details">
            <div className="metric-detail">
              <span className="detail-label">Success Rate</span>
              <span className="detail-value">{data.operations.successRate}%</span>
            </div>
            <div className="metric-detail">
              <span className="detail-label">Successful</span>
              <span className="detail-value">{data.operations.success}</span>
            </div>
          </div>
        </div>

        <div className="metric-card info">
          <div className="metric-header">
            <span className="metric-icon">📈</span>
            <span className="metric-trend">Stable</span>
          </div>
          <div className="metric-value">{data.utilization.staff}%</div>
          <div className="metric-label">Staff Utilization</div>
          <div className="metric-details">
            <div className="metric-detail">
              <span className="detail-label">Beds</span>
              <span className="detail-value">{data.utilization.beds}%</span>
            </div>
            <div className="metric-detail">
              <span className="detail-label">Equipment</span>
              <span className="detail-value">{data.utilization.equipment}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-section">
        <div className="chart-card">
          <h3 className="chart-title">Patient Flow</h3>
          <div className="chart-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">📊</span>
              <p>Line chart showing patient admissions and discharges over time</p>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Revenue Breakdown</h3>
          <div className="chart-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">💵</span>
              <p>Pie chart showing revenue by department</p>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Top Departments</h3>
          <div className="chart-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">🏥</span>
              <p>Bar chart showing patient count by department</p>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3 className="chart-title">Staff Performance</h3>
          <div className="chart-placeholder">
            <div className="placeholder-content">
              <span className="placeholder-icon">👩‍⚕️</span>
              <p>Performance metrics and ratings by department</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="reports-section">
        <h2 className="section-title">Recent Reports</h2>
        <div className="reports-table-container">
          <table className="reports-table">
            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Generated</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Patient Report</td>
                <td>📋 Summary</td>
                <td>2 hours ago</td>
                <td><span className="status-badge completed">Ready</span></td>
                <td>
                  <button className="table-btn view">View</button>
                  <button className="table-btn download">Download</button>
                </td>
              </tr>
              <tr>
                <td>Staff Attendance Report</td>
                <td>👥 HR</td>
                <td>5 hours ago</td>
                <td><span className="status-badge completed">Ready</span></td>
                <td>
                  <button className="table-btn view">View</button>
                  <button className="table-btn download">Download</button>
                </td>
              </tr>
              <tr>
                <td>Equipment Maintenance Report</td>
                <td>🛠️ Operations</td>
                <td>Yesterday</td>
                <td><span className="status-badge completed">Ready</span></td>
                <td>
                  <button className="table-btn view">View</button>
                  <button className="table-btn download">Download</button>
                </td>
              </tr>
              <tr>
                <td>Financial Summary</td>
                <td>💰 Financial</td>
                <td>2 days ago</td>
                <td><span className="status-badge processing">Processing</span></td>
                <td>
                  <button className="table-btn view" disabled>View</button>
                  <button className="table-btn download" disabled>Download</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="export-section">
        <h3 className="section-title">Export Reports</h3>
        <div className="export-buttons">
          <button className="export-btn pdf">
            <span>📄</span>
            Export to PDF
          </button>
          <button className="export-btn excel">
            <span>📊</span>
            Export to Excel
          </button>
          <button className="export-btn email">
            <span>📧</span>
            Email Report
          </button>
          <button className="export-btn schedule">
            <span>⏰</span>
            Schedule Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;


