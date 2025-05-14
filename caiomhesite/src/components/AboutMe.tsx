import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
        <img
          className="mx-auto block h-96 w-96 rounded-full object-cover sm:mx-0 sm:shrink-0"
          src="caiomhesite/src/assets/images/sideview.jpeg"
          alt="Chezza Bomediano"
        />
        <div className="space-y-4 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600">
            Hi, I'm Chezza, a web developer with a passion for building
            responsive and user-friendly websites. I specialize in React,
            TypeScript, and Tailwind CSS.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;