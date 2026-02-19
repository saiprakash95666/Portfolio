import { motion } from 'framer-motion';
import {
  SiDotnet, SiMysql, SiPostman, SiReact, SiGit,
} from "react-icons/si";
import { DiCss3, DiHtml5, DiJavascript, DiVisualstudio } from "react-icons/di";


const experiences = [
  {
    role: "Software Engineer",
    company: "Marsh & McLennan",
    location: "USA",
    duration: "August 2024 – Present",
    tech: ["React", "C#", "ASP.NET Core Web API", "REST APIs", "Git", "AWS"],
    logo: "/marsh_logo.jpg",
    responsibilities: [
      "Contributed to the full software development lifecycle of a cloud-native Risk Analytics and Insurance Claims Optimization platform spanning design, development, testing, and deployment.",
      "Designed and implemented backend microservices using C# and ASP.NET Core with SQL Server for policy validation, claims processing, and real-time risk scoring.",
      "Built and maintained CI/CD pipelines using Docker and Azure DevOps Pipelines, reducing deployment time by 35% and enabling reliable, repeatable automated deployments.",
      "Managed cloud infrastructure on Microsoft Azure using Azure Container Apps / AKS, Azure Functions, and ARM Templates / Bicep.",
      "Integrated Apache Kafka for asynchronous, event-driven communication between distributed microservices.",
      "Implemented secure data access patterns using IAM, encryption at rest, and role-based authorization (RBAC) to satisfy HIPAA and SOX compliance requirements.",
      "Developed unit and integration tests using xUnit and Moq, achieving 85% automated test coverage.",
      "Established monitoring, logging, and alerting via Azure Monitor / Application Insights to proactively detect and resolve incidents, supporting application health and reliability.",
    ]
  },
  {
    role: "Software Engineer I",
    company: "NCR Corporation Pvt. Ltd (NCR Voyix)",
    location: "India",
    duration: "January 2022 – July 2023",
    tech: ["React", "C#", ".NET Core", "SQL Server", "REST APIs", "Git"],
    logo: "/ncr_logo.jpg",
    responsibilities: [
      "Participated in full-stack development efforts to modernize the Aloha Cloud hospitality platform, delivering enhancements across UI, API, and database layers in an Agile/Scrum environment.",
      "Migrated legacy Ext JS and C# ASP.NET systems to modern React with TypeScript and ASP.NET Core services, improving application performance and scalability by 50%.",
      "Developed reusable React components and API-first backend services to improve UI consistency and enable third-party integrations.",
      "Optimized SQL Server queries and LINQ-based data access patterns, reducing data retrieval latency by 50%.",
      "Implemented comprehensive test coverage using Jest (unit) and Playwright (E2E), achieving 80%+ coverage and reducing UI bugs by 60%.",
      "Actively participated in code reviews, sprint planning, root cause analysis, and production releases; contributed to documentation and team knowledge sharing."
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
