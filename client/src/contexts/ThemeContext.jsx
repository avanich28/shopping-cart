import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  useEffect(
    function () {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    [theme],
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error('ThemeContext was used outside ThemeProvider');

  return context;
}

export { ThemeProvider, useTheme };
