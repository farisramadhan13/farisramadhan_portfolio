import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PortfolioCard from '../components/PortfolioCard';

const dummyPortfolios = {
  website: [
    { id: 1, title: 'Website Project 1', image: 'https://images.unsplash.com/photo-1707202282188-f8d03b2791b5?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Website Project 1' },
    // Other projects...
  ],
  mobile: [
    { id: 1, title: 'Mobile Project 1', image: 'https://images.unsplash.com/photo-1707202282188-f8d03b2791b5?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Mobile Project 1' },
    // Other projects...
  ],
  'data-science': [
    { id: 1, title: 'Data Science Project 1', image: 'https://images.unsplash.com/photo-1707202282188-f8d03b2791b5?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of Data Science Project 1' },
    // Other projects...
  ],
  'artificial-intelligence': [
    { id: 1, title: 'AI Project 1', image: 'https://images.unsplash.com/photo-1707202282188-f8d03b2791b5?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'Description of AI Project 1' },
    // Other projects...
  ],
};

const PortfolioCategoryPage = () => {
  const { category } = useParams();
  const portfolios = dummyPortfolios[category] || [];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className='p-8'>
        <h2 className="text-4xl text-center font-bold mb-6 pt-8">{category.replace('-', ' ').split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')} Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {portfolios.map(portfolio => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} category={category} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PortfolioCategoryPage;
