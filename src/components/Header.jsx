import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <span style={{ color: 'var(--matrixagora-orange)', fontSize: '24px', fontWeight: 'bold' }}>MatrixAgora</span>
        </Link>
      </div>
      
      <div className="header-search">
        <input type="text" placeholder="Search MatrixAgora" />
      </div>
      
      <div className="header-actions">
        <div className="header-icon-group">
          <Link to="/advertise" className="header-icon-wrapper">
            <i className="fas fa-ad header-icon"></i>
            <span className="header-icon-tooltip">Advertise on MatrixAgora</span>
          </Link>
          
          <Link to="/submit" className="header-icon-wrapper">
            <i className="fas fa-plus header-icon"></i>
            <span className="header-icon-tooltip">Create Post</span>
          </Link>
          
          <Link to="/notifications" className="header-icon-wrapper">
            <i className="fas fa-bell header-icon"></i>
            <span className="header-icon-tooltip">Notifications</span>
          </Link>
          
          <Link to="/profile" className="header-icon-wrapper">
            <i className="fas fa-user-circle header-icon"></i>
            <span className="header-icon-tooltip">User Profile</span>
          </Link>
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header; 