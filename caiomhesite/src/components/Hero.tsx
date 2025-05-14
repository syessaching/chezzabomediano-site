import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-16">
      <h1 className="text-5xl font-bold text-gray-800">Chezza Bomediano</h1>
      <p className="mt-4 text-lg text-gray-600">
        Data Visualization Developer | Front-end Developer in Progress | Passionate about Data & Web Application Design
      </p>
      <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
        View My Work
      </button>
    </section>
  );
};

export default Hero;