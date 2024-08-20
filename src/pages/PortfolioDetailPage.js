import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PortfolioDetailPage = () => {
  const { category, id } = useParams();

  return (
    <div className="bg-dark-bg text-light-text min-h-screen p-8">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4 glow-text">Portfolio {id} in {category.replace('-', ' ').toUpperCase()}</h2>
      {/* Add detailed content for the portfolio item here */}
    </div>
  );
};

export default PortfolioDetailPage;
