import React from 'react';
import { useLocalStorage, useWindowSize } from './hooks';
import './App.css'
const App = () => {
  const [isDarkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const { width } = useWindowSize();

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? 'dark' : 'light';

  const desktopTheme = width >= 768 ? theme : 'light';

  return (
    <div className={`${desktopTheme}`}>
      <h1 className={`${desktopTheme}`}>Toggle </h1>
      <p className={`${desktopTheme}`}>Theme: {desktopTheme}</p>
      <button className={`${desktopTheme}`} onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
