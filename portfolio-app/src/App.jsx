import Hero from './Hero';
import About from './About';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';
import { useState } from 'react';
import {Menu, X} from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-90 z-50 shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-center md:justify-center items-center relative">

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 font-medium text-lg">
            <a href="#hero" className="hover:text-pink-500 transition">Home</a>
            <a href="#about" className="hover:text-pink-500 transition">About</a>
            <a href="#experience" className="hover:text-pink-500 transition">Experience</a>
            <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden absolute right-4 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-black px-6 pb-6 flex flex-col gap-4 text-lg font-medium transition-all duration-300">
            <a href="#hero" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-pink-500">About</a>
            <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Experience</a>
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-pink-500">Contact</a>
          </div>
        )}
      </header>

      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;