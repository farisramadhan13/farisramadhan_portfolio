import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PortfolioDetailPage = () => {
  const { category, id } = useParams();
  // Anda bisa menggunakan id untuk mendapatkan detail portofolio yang spesifik dari API atau state

  return (
    <div className="bg-dark-bg text-light-text min-h-screen p-8">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Portfolio {id} in {category.replace('-', ' ').toUpperCase()}</h2>
      {/* Tambahkan detail konten untuk portofolio */}
    </div>
  );
};

export default PortfolioDetailPage;
