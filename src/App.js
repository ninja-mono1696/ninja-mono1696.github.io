import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main } from './pages';
import { BackToTop } from './components';
// import ScrollToTop from './utils/ScrollToTop';

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cPORTFOLIO", `color:${theme.primary}; font-size:50px`);

  return (
    <div className="app">
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;