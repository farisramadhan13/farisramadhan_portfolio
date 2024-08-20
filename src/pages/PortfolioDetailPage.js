import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PortfolioDetailPage = () => {
  const { category, id } = useParams();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <h2 className="text-3xl font-bold m-8">Portfolio {id} in {category.replace('-', ' ').split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')}</h2>
      {/* Add detailed content for the portfolio item here */}
      <div className="bg-white p-6 rounded-lg shadow-lg mx-8 mb-32">
      <img src="https://images.unsplash.com/photo-1707202282188-f8d03b2791b5?q=80&w=1804&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Project Image" className="rounded-lg w-full h-96 object-cover mb-4"/>
        <h3 className="text-2xl font-semibold">Project Title</h3>
        <p className="mt-2">Detailed description of the project. Include key features, technologies used, and any other relevant information.</p>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;

