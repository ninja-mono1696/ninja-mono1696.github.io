import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main } from './pages'
import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'

const App = () => {

  const { theme } = useContext(ThemeContext);

  console.log("%cPORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log("%chttps://github.com/ninja-mono1696/ninja-mono1696.github.io", `color:${theme.tertiary}; font-size:20px`);

  return (
    <div className="app">
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path="/" exact component={Main} />

          <Navigate to="/" />
        </Routes>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;