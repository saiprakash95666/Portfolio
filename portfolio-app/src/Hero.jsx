import profilePic from './assets/profile.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="hero" className="bg-black text-white min-h-[calc(100vh-96px)] flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-16 gap-6">
      {/* Left text block */}
      <div className="flex-1 text-center md:text-left space-y-5">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Kurmathi Sai Prakash Reddy
        </h1>

        {/* Animated roles */}
        <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
          <Typewriter
            words={[
              "Software Engineer",
              "Full Stack Developer",
              "AI & LLM Deployment Engineer",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>

        <p className="max-w-md text-gray-400 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
          Building scalable, high-performance full-stack applications with React, .NET, and SQL while integrating AI & LLM-powered
          features to deliver meaningful, real-world solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <a
            href="/Sai_Prakash_Reddy_Kurmathi_Resume.pdf"
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
            href="mailto:kurmathi@jobhuntmails.com"
            aria-label="Email"
            title="Email"
            className="hover:text-pink-300 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Right profile pic block */}
      <div className="flex justify-center md:justify-end max-w-md w-full">
        <img
          src={profilePic}
          alt="Kurmathi Sai Prakash Reddy"
          className="w-full max-h-[65vh] object-contain shadow-2xl rounded-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;
