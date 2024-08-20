import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaChartLine, FaRobot } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const categories = [
  { name: 'Website', slug: 'website', icon: FaLaptopCode, color: 'bg-blue-500' },
  { name: 'Mobile', slug: 'mobile', icon: FaMobileAlt, color: 'bg-green-500' },
  { name: 'Data Science', slug: 'data-science', icon: FaChartLine, color: 'bg-yellow-500' },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence', icon: FaRobot, color: 'bg-red-500' },
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
              className={`rounded-lg overflow-hidden shadow-lg ${category.color} text-white flex items-center justify-center p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="flex flex-col items-center">
                <category.icon className="text-6xl mb-4" />
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
