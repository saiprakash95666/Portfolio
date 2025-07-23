import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-black text-white">
      <div className="text-center mb-9">
        <h2 className="text-4xl font-bold mb-4 inline-block border-b-4 border-pink-500 pb-2">Projects</h2>
        <p className="text-gray-400">A curated collection of what I’ve built, solved, and scaled.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Project 1 - CraveKart */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-2">CraveKart</h3>
          <p className="text-gray-400 mb-4">
            A full-stack food delivery and ordering web app that allows users to browse restaurants, place orders, and track deliveries in real-time.
          </p>
          <p className="text-sm text-pink-400 mb-4">Python · Django · SQLite · Bootstrap · Stripe API · HTML/CSS</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/saiprakash95666/CraveKart"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="GitHub Repo"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://cravekart.pythonanywhere.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="Live Site"
            >
              <FaExternalLinkAlt size={22} />
            </a>
          </div>
        </div>

        {/*  Car Rental System */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-2"> Car Rental System </h3>
          <p className="text-gray-400 mb-4">
            An online Car booking application built using Python, Flask framework and AWS services.
          </p>
          <p className="text-sm text-pink-400 mb-4">AWS · HTML/CSS · JavaScript</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/saiprakash95666/Car-Rental-System"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="GitHub Repo"
            >
              <FaGithub size={24} />
            </a>
            {/* <a
              href="https://codesandbox.io/p/github/saiprakash95666/ListenIt/master?import=true&workspaceId=ws_E1T2evK1xrZ8LVkwshAiH4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="Live Site"
            >
              <FaExternalLinkAlt size={22} />
            </a> */}
          </div>
        </div>

        {/*  A Unified approach for visual emotion recognition */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-2"> Visual Emotion Recognition & Recommendation</h3>
          <p className="text-gray-400 mb-4">
            A deep learning CNN model integrated with Python and Flask to detect facial emotions and recommend content from YouTube, and Spotify.
          </p>
          <p className="text-sm text-pink-400 mb-4">Deep Learning · CNN Model · Python · Flask · API · HTML/CSS</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/saiprakash95666/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="GitHub Repo"
            >
              <FaGithub size={24} />
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="Live Site"
            >
              <FaExternalLinkAlt size={22} />
            </a> */}
          </div>
        </div>

        {/*  ListenIt - Music Application */}
        <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700">
          <h3 className="text-2xl font-semibold mb-2"> ListenIt </h3>
          <p className="text-gray-400 mb-4">
            A Music application built using React Native and Expo Go.
          </p>
          <p className="text-sm text-pink-400 mb-4">React Native · Expo Go · JavaScript</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/saiprakash95666/ListenIt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="GitHub Repo"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://codesandbox.io/p/github/saiprakash95666/ListenIt/master?import=true&workspaceId=ws_E1T2evK1xrZ8LVkwshAiH4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
              title="Live Site"
            >
              <FaExternalLinkAlt size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
