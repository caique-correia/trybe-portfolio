import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './style/style.css'

function App() {
  const [themeColor, setThemeColor] = useState('dark')
  
  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }

  return (
   <ThemeContext.Provider value={{color: themeColor, toggleTheme}}>
    <div className={`app ${themeColor}`}>
      <Header />
      <Image />
      <Footer />
    </div>
   </ThemeContext.Provider>
  );
}

export default App;
