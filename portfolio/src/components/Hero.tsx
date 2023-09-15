import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-8">Showcasing my skills and projects in the world of development.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">View Projects</button>
      </div>
    </section>
  );
};

export default Hero;
