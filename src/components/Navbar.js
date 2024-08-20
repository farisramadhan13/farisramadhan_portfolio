import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-dark-bg text-light-text p-4 glass shadow-glow">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="text-2xl font-bold hover:text-glow">Home</Link></li>
        <li><Link to="/portfolio" className="text-2xl font-bold hover:text-glow">Portfolio</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
