import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="theme-switch-wrapper">
      <span className="theme-icon">
        <i className={darkMode ? "fas fa-moon" : "fas fa-sun"}></i>
      </span>
      <label className="theme-switch">
        <input 
          type="checkbox" 
          checked={darkMode} 
          onChange={toggleDarkMode} 
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default ThemeToggle; 