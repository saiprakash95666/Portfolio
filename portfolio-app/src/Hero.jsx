import profilePic from './assets/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section id="hero" className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-16 pt-24 gap-6">
      {/* Left text block */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Kurmathi Sai Prakash Reddy
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
          Aspiring Junior Software Engineer | Full Stack Developer
        </p>

        <p className="max-w-md text-gray-400 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
          I design and develop clean, scalable web applications using modern tech
          stacks like React, Node.js, and Python. Let’s build something great together!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <a
            href="/Kurmathi_Sai_Prakash_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            📄 View Resume
          </a>

          <a
            href="#contact"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300"
          >
            📬 Contact Me
          </a>
        </div>
        <div className="flex gap-10 mt-8 text-pink-500 text-3xl pt-3">
          <a
            href="https://www.linkedin.com/in/kurmathi-sai-prakash-reddy-944a43169/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hover:text-pink-300 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/saiprakash95666"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="hover:text-pink-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:saiprakash95666@gmail.com"
            aria-label="Email"
            title="Email"
            className="hover:text-pink-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>


      {/* Right profile pic block */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={profilePic}
          alt="Kurmathi Sai Prakash Reddy"
          className="w-[250px] h-auto object-cover shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;
