import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const categories = [
  { name: 'Website', slug: 'website' },
  { name: 'Mobile', slug: 'mobile' },
  { name: 'Data Science', slug: 'data-science' },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
];

const Portfolio = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="p-8">
        <h2 className="text-4xl font-bold mb-6 pt-8">Portfolio Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.slug} 
              to={`/portfolio/${category.slug}`}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
