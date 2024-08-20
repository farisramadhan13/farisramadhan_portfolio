import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ portfolio, category }) => {
  return (
    <Link 
      to={`/portfolio/${category}/${portfolio.id}`} 
      className="bg-glass text-light-text rounded-lg overflow-hidden shadow-glow glass"
    >
      <img src={`../public/images/${portfolio.image}`} alt={portfolio.title} className="w-full h-32 object-cover"/>
      <div className="p-4">
        <h3 className="text-xl font-semibold glow-text">{portfolio.title}</h3>
      </div>
    </Link>
  );
};

export default PortfolioCard;
