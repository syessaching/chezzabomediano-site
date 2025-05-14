import React from 'react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center">Projects</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition ">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Twistactoe Android Game</h3>
              <img src="caiomhesite/src/assets/images/twistactoe.png" alt="Twistactoe"/>
              <p className="mb-4">Twistactoe is a Tic Tac Toe Android game with an animated UI, built in Java using Android Studio.</p>
              <a href="#" className="text-sky-600 hover:underline">View Project</a>
          </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src="caiomhesite/src/assets/images/project2.jpg"
            alt="Project 2"
            className="rounded-lg"
          />
          <h3 className="mt-4 text-xl font-semibold">Project 2</h3>
          <p className="mt-2 text-gray-600">
            A brief description of the project goes here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;