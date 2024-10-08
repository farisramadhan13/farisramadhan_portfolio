import React from 'react';
import Navbar from '../components/Navbar';
import Welcome from '../components/Welcome';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="p-8">
        <Welcome />
      </main>
    </div>
  );
};

export default Home;
