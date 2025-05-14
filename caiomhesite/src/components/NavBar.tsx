import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between">
      <div className="text-xl font-semibold text-gray-800">Chezza's Portfolio</div>
      <div className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-sky-600">
          About Me
        </a>
        <a href="#about" className="text-gray-600 hover:text-sky-600">
          Projects
        </a>
        <a href="#contact" className="text-gray-600 hover:text-sky-600">
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default NavBar;