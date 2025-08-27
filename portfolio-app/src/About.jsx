import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaAws, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiDotnet, SiTypescript, SiSqlite, SiPostman } from 'react-icons/si';
import { DiMsqlServer, DiDjango } from "react-icons/di";

const About = () => {
  return (
    <section id="about" className="py-16 px-6 bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 inline-block border-b-4 border-pink-500 pb-2">About Me</h2>
        <p className="text-gray-400">An insight into my background, skills, and aspirations.</p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-lg text-gray-300 mb-6">
            I am a passionate and detail-oriented Full Stack Developer with a Master’s in Computer Science from
             the University of Central Missouri. I bring over 3 years of hands-on experience, currently working 
             as a Software Developer at Marsh & McLennan since August 2024. Previously, I worked 
             as a Software Engineer I at NCR Voyix for 1.5 years and completed a Web Development Internship at 
             The Sparks Foundation. I love building scalable, user-focused web applications and continuously 
             strive to expand my technical expertise while delivering impactful solutions.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-pink-500">Education</h3>
          <ul className="text-gray-300 mb-6 list-disc list-inside space-y-3">
            <li>
              <strong>Master’s in Computer Science</strong>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-400">
                <ul>University of Central Missouri, May 2025</ul>
              </ul>
            </li>
            <li>
              <strong>Bachelor’s in Computer Science and Engineering</strong>
              <ul className="list-disc list-inside ml-6 text-sm text-gray-400">
                <ul>KL University Hyderabad, May 2022</ul>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-pink-500">Skills</h3>
          <div className="grid grid-cols-4 gap-6 text-4xl text-white">
            <div><FaHtml5 title="HTML5" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">HTML5</span></div>
            <div><FaCss3Alt title="CSS3" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">CSS3</span></div>
            <div><FaJs title="JavaScript" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">JavaScript</span></div>
            <div><FaReact title="React" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">React</span></div>
            <div><FaNodeJs title="Node.js" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">Node JS</span></div>
            <div><FaJava title="Java" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">Java</span></div>
            <div><SiSqlite title="SQLite" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">SQLite</span></div>
            <div><DiMsqlServer title="SQL Server" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">SQL Server</span></div>
            <div><FaPython title="Python" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">Python</span></div>
            <div><SiDotnet title=".NET Core" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">.NET Core</span></div>
            <div><FaGitAlt title="Git" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">Git</span></div>
            <div><FaAws title="AWS" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">AWS</span></div>
            <div><SiTailwindcss title="Tailwind CSS" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">Tailwind CSS</span></div>
            <div><SiTypescript title="TypeScript" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">TypeScript</span></div>
            <div><DiDjango title="Django" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">Django</span></div>
            <div><SiPostman title="Postman API" className="hover:text-pink-500 transition" /><span className="mt-1 text-sm">Postman</span></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
