import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <NavBar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;