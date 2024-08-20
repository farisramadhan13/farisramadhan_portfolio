import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-8 glass shadow-lg">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="text-2xl font-bold hover:text-accent">Home</Link></li>
        <li><Link to="/portfolio" className="text-2xl font-bold hover:text-accent">Portfolio</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
