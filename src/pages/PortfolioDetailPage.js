import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDetailPage = () => {
  const { id } = useParams();

  return (
    <div className="bg-dark-bg text-light-text min-h-screen p-8">
      <h2 className="text-2xl font-bold">Portfolio Item {id}</h2>
      {/* Add detailed content for the portfolio item here */}
    </div>
  );
};

export default PortfolioDetailPage;
