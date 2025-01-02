import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing an external CSS file

function Header() {
  return (
    <header className="header">
      <ul className="nav-links">
        <li><Link to="/">Admin Dashboard</Link></li>
        <li><Link to="/user">User Dashboard</Link></li>
        <li><Link to="/reports">Reports Dashboard</Link></li>
      </ul>
    </header>
  );
}

export default Header;
