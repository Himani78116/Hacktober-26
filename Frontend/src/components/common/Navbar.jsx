import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="brand">
          <div className="brand-icon">CE</div>
          <span>CivicEye</span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/report" className={`nav-link ${isActive('/report') ? 'active' : ''}`}>
                Report an Issue
              </Link>
            </li>
            <li>
              <Link to="/track" className={`nav-link ${isActive('/track') || location.pathname.startsWith('/track') ? 'active' : ''}`}>
                Track Issue
              </Link>
            </li>
            <li>
              <Link to="/reports" className={`nav-link ${isActive('/reports') ? 'active' : ''}`}>
                My Reports
              </Link>
            </li>
            <li>
              <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                About & AI
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
