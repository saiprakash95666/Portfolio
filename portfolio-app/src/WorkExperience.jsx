import { motion } from 'framer-motion';
import {
 SiDotnet, SiMysql, SiPostman, SiReact, SiGit,
} from "react-icons/si";
import { DiCss3, DiHtml5, DiJavascript, DiVisualstudio } from "react-icons/di";


const experiences = [
  {
    role: "Software Engineer I",
    company: "NCR Corporation Pvt. Ltd (NCR Voyix)",
    location: "India",
    duration: "January 2022 – July 2023",
    tech: ["React", "C#" ,".NET Core", "SQL Server", "REST APIs", "Git"],
    logo: "/ncr_logo.jpg",
    responsibilities: [
      "Contributed to the modernization of Aloha Cloud, a leading hospitality software product, delivering comprehensive full-stack solutions across UI, API, and database layers.",
      "Spearheaded the migration and revamp of a legacy Ext JS and .NET Core Web API system to a modern ReactJS application, achieving a 50% improvement in performance, scalability, and user experience.",
      "Designed and developed a library of reusable React components, significantly reducing development time and enhancing code maintainability across new and existing systems.",
      "Proactively identified and resolved critical code bottlenecks and inefficiencies, boosting overall software performance by 30%.",
      "Engineered robust, scalable, and API-centric architectures, enabling seamless integrations and future-proofing the platform.",
      "Optimized complex database queries using LINQ and SQL Server, achieving approximately 50% faster and more efficient data retrieval.",
      "Applied Test-Driven Development (TDD) methodologies rigorously, ensuring high code reliability and significantly reducing bug rates through comprehensive automated and functional testing coverage.",
      "Actively participated in Agile development practices, including daily stand-ups, sprint planning, reviews, and retrospectives, fostering strong team collaboration.",
      "Contributed to successful software releases, encompassing new version deployments, feature enhancements, and critical bug fixes, ensuring product stability and continuous improvement.",
    ]
  },
  {
    role: "Web Development Intern",
    company: "The Sparks Foundation",
    location: "India",
    duration: "November 2020 – December 2020",
    tech: ["JavaScript", "HTML", "CSS", "Git"],
    logo: "/sparks_logo.jpg",
    responsibilities: [
      "Developed a basic banking application using JavaScript, HTML, and CSS to demonstrate core banking functionalities such as balance inquiry, and fund transfer.",
      "Deployed the static web application on GitHub Pages, achieving over 100+ views within the first month and demonstrating proficiency in frontend deployment workflows.",
      "Managed source code with Git, maintaining a clean commit history and facilitating collaboration and version control best practices.",
    ]
  },
];

function WorkExperience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-black text-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 inline-block border-b-4 border-pink-500 pb-2">Work Experience</h2>
        <p className="text-gray-400">A quick journey through my professional milestones</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="mb-12 ml-6 relative bg-gray-900 rounded-lg shadow-lg p-6 max-w-3xl"
            style={{ height: '350px' }}
          >
            {/* Company logo at the top left */}
            <div className="absolute -left-10 top-4">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-10 h-10 rounded-full border-2 border-white shadow-md"
              />
            </div>

            {/* Job role, company, location, duration */}
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-sm text-gray-300">{exp.company}, {exp.location}</p>
            <p className="text-sm italic text-gray-400 mb-3">{exp.duration}</p>

            {/* Scrollable responsibilities list */}
            <div className="overflow-y-auto pr-2 mb-3 scroll-hide" style={{ maxHeight: '12rem' }}>
            <ul className="list-disc list-outside ml-5 text-gray-300 space-y-1 text-sm leading-relaxed">
              {exp.responsibilities.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
      </div>
            {/* Tech stack chips with icons */}
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((tech, i) => {
                const icons = {
                  React: <SiReact />,
                  DiVisualstudio: <DiVisualstudio />,
                  ".NET Core": <SiDotnet />,
                  MySQL: <SiMysql />,
                  "REST APIs": <SiPostman />,
                  Git: <SiGit />,
                  CSS: <DiCss3 />,
                  HTML: <DiHtml5 />,
                  JavaScript: <DiJavascript />,
                };

                return (
                  <span
                    key={i}
                    className="flex items-center gap-1 bg-pink-600 text-white px-2 py-1 rounded text-xs font-medium"
                  >
                    {icons[tech] || null}
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.div>

        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
