import Hero from './Hero';
import About from './About';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 shadow-md pt-3">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-center gap-8 text-white font-semibold text-lg tracking-wide">
          <a href="#hero" className="text-white hover:text-pink-500 font-medium transition-colors duration-300">Home </a>
          <a href="#about" className="text-white hover:text-pink-500 font-medium transition-colors duration-300">About</a>
          <a href="#experience" className="text-white hover:text-pink-500 font-medium transition-colors duration-300">Experience</a>
          <a href="#projects" className="text-white hover:text-pink-500 font-medium transition-colors duration-300">Projects</a>
          <a href="#contact" className="text-white hover:text-pink-500 font-medium transition-colors duration-300">Contact</a>
        </nav>
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