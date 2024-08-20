import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PortfolioCard from '../components/PortfolioCard';

const dummyPortfolios = {
  website: [
    { id: 1, title: 'Website Project 1', image: 'website-thumbnail.jpg' },
    // ...
  ],
  mobile: [
    { id: 1, title: 'Mobile Project 1', image: 'mobile-thumbnail.jpg' },
    // ...
  ],
  'data-science': [
    { id: 1, title: 'Data Science Project 1', image: 'data-science-thumbnail.jpg' },
    // ...
  ],
  ai: [
    { id: 1, title: 'AI Project 1', image: 'ai-thumbnail.jpg' },
    // ...
  ],
};

const PortfolioCategoryPage = () => {
  const { category } = useParams();
  const portfolios = dummyPortfolios[category] || [];

  return (
    <div className="bg-dark-bg text-light-text min-h-screen">
      <Navbar />
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4 glow-text">{category.replace('-', ' ').toUpperCase()} Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolios.map(portfolio => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PortfolioCategoryPage;
