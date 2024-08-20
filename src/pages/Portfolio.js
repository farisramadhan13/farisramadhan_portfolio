import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const categories = [
  { name: 'Website', slug: 'website' },
  { name: 'Mobile', slug: 'mobile' },
  { name: 'Data Science', slug: 'data-science' },
  { name: 'Artificial Intelligence', slug: 'ai' },
];

const Portfolio = () => {
  return (
    <div className="bg-dark-bg text-light-text min-h-screen">
      <Navbar />
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4 glow-text">Portfolio Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map(category => (
            <Link 
              key={category.slug} 
              to={`/portfolio/${category.slug}`}
              className="bg-glass text-light-text rounded-lg overflow-hidden shadow-glow glass"
            >
              <div className="p-4">
                <h3 className="text-xl font-semibold glow-text">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
