import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ portfolio }) => {
  return (
    <Link 
      to={`/portfolio/${portfolio.category}/${portfolio.id}`} 
      className="bg-gray-800 text-light-text rounded-lg overflow-hidden shadow-lg"
    >
      <img src={`../public/images/${portfolio.image}`} alt={portfolio.title} className="w-full h-32 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{portfolio.title}</h3>
      </div>
    </Link>
  );
};

export default PortfolioCard;
