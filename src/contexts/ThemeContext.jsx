import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check if user has a theme preference saved in localStorage
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('darkMode');
    
    // If user has a saved preference, use that
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    
    // Otherwise check for OS level preference
    // Check if user prefers dark mode at OS level
    const prefersDark = window.matchMedia && 
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    return prefersDark;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // Apply the dark theme to the document when darkMode changes
  useEffect(() => {
    // Save user preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    
    // Apply or remove dark theme class to body
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 