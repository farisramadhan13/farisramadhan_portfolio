import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioCategoryPage from './pages/PortfolioCategoryPage';
import PortfolioDetailPage from './pages/PortfolioDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioCategoryPage />} />
        <Route path="/portfolio/:category/:id" element={<PortfolioDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
