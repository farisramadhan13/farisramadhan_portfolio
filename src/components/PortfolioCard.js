import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ portfolio, category }) => {
  return (
    <Link to={`/portfolio/${category}/${portfolio.id}`} className="block p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={portfolio.image} alt={portfolio.title} className="rounded-lg w-full h-48 object-cover mb-4" />
      <h3 className="text-lg font-semibold">{portfolio.title}</h3>
      <p className="text-smmt-2">{portfolio.description}</p>
    </Link>
  );
};

export default PortfolioCard;
