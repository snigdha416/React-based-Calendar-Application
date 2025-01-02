import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Assuming you will create a separate CSS file for styles

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p className="dashboard-description">Manage company data, communications, and settings.</p>
      </header>

      <nav className="dashboard-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/company-management" className="nav-link">
              <i className="fas fa-building"></i> {/* Company Icon */}
              Company Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/communication-methods" className="nav-link">
              <i className="fas fa-comments"></i> {/* Communication Icon */}
              Communication Methods
            </Link>
          </li>
        </ul>
      </nav>

      <section className="dashboard-content">
        <h3>Welcome to the Admin Dashboard</h3>
        <p>Select a section from the navigation menu to manage different parts of the system.</p>

        <div className="dashboard-statistics">
          <div className="stat-card">
            <h4>Total Companies</h4>
            <p>3</p>
          </div>
          <div className="stat-card">
            <h4>Pending Communications</h4>
            <p>1</p>
          </div>
          <div className="stat-card">
            <h4>Active Users</h4>
            <p>1</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
