import { useState } from 'react';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={`app ${themeColor}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;
