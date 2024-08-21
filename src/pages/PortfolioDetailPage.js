import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { dummyPortfolios } from './PortfolioCategoryPage'; // Adjust the import path as needed

const PortfolioDetailPage = () => {
  const { category, id } = useParams();

  // Find the portfolio item based on category and id
  const portfolio = dummyPortfolios[category]?.find(item => item.id === parseInt(id));

  if (!portfolio) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <h2 className="text-3xl text-center font-bold m-8">Project not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <h2 className="text-3xl text-center font-bold m-8">Portfolio {id} in {category.replace('-', ' ').split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg mx-8 mb-32">
        <img src={portfolio.image} alt={portfolio.title} className="rounded-lg w-full h-96 object-cover mb-4" />
        <h3 className="text-2xl font-semibold">{portfolio.title}</h3>
        <p className="mt-2">{portfolio.description}</p>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;
