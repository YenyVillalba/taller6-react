// ThemeContext.js
import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto de tema
const ThemeContext = createContext();

// Creamos el proveedor de tema
export function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook para usar el contexto de tema
export function useTheme() {
  return useContext(ThemeContext);
}
