import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-dark-bg text-light-text p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
