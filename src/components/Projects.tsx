import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code, Layers } from 'lucide-react';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  category: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "FinBotX",
      description: "A GenAI-powered financial assistant build to empower investors and bridge the financial literacy gap in India.",
      image: "https://framerusercontent.com/images/g0YTRh7uRHpbWQgSZz62bO050.png?scale-down-to=1024",
      tags: ["React", "Typescript","Tailwind CSS","Node.js","MongoDB","Gemini API"],
      github: "https://github.com/SanyaGupta2723/FinBotX",
      demo: "https://finbotx.netlify.app/",
      category: "web app"
    },
    {
      id: 2,
      title: "MentorBotics",
      description: "An AI-powered digital career counselor to provide personalized, inteliigent career guidance to students ",
      image: "https://www.ecoleglobale.com/blog/wp-content/uploads/2021/12/Role-of-career-counselling-in-the-education-system-1024x724.jpg",
      tags: ["ReactJS","Tailwind CSS","Node.js","MongoDB","Express.js","REST API"],
      github: "https://github.com/SanyaGupta2723/MentorBotics",
      demo: "https://mentorbotics.netlify.app/",
      category: "web app"
    },
    {
      id: 3,
      title: "FlexiWeb",
      description: "A mobile-friendly website built with CSS media queries dynamically adapts its layout and presentation to suit various screen sizes and devices",
      image: "https://www.brainpulse.com/wp-content/uploads/2021/12/Mobile-friendly-website.jpg",
      tags: ["React.js","Node.js","Tailwind CSS","TypeScript","HTML","Javascript"],
      github: "https://github.com/SanyaGupta2723/Website-Mobile-Friendly",
      demo: "https://website-mobile-friendly27.netlify.app/",
      category: "web app"
    },
    {
      id: 4,
      title: "TechTrinity",
      description: "TechTrinity is a professional and responsive landing page designed to offer digital solutions for businesses. ",
      image: "https://www.chetaru.com/wp-content/uploads/2024/03/digital-solution-1-1024x318.jpg",
      tags: ["React","Tailwind CSS","HTML","Typescript","Netlify"],
      github: "https://github.com/SanyaGupta2723/UI-using-HTML-CSS-",
      demo: "https://techtrinity.netlify.app/",
      category: "ui/ux"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design principles and animations.",
      image: "https://static.resumegiants.com/wp-content/uploads/sites/25/2022/06/09105622/Professional-portfolio-1040x694.webp",
      tags: ["Tailwind CSS","JavaScript","HTML","TypeScript","React.js","Node.js"],
      github: "#",
      demo: "#",
      category: "ui/ux"
    },
    {
      id: 6,
      title: "To-Do List Web",
      description: " To create a dynamic interface where users can add, delete, and mark tasks as complete.",
      image: "https://img.freepik.com/premium-vector/businessman-list-checklist-with-laptop-computer-check-list-icon-flat-vector-illustration_157943-1177.jpg",
      tags: ["HTML", "CSS", "Typescript", "Vanilla JavaScript"],
      github: "https://github.com/SanyaGupta2723/To-Do-List-web.",
      demo: "https://sanyagupta2723.github.io/To-Do-List-web./",
      category: "ui/ux"
    },
  ];

  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="section-title text-dark-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
            Each project reflects my passion for creating beautiful and functional web applications.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('web app')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'web app'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
            }`}
          >
            Web Apps
          </button>
          <button
            onClick={() => setFilter('ui/ux')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'ui/ux'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-dark-700 dark:text-gray-200 dark:hover:bg-dark-600'
            }`}
          >
            UI/UX Design
          </button>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeIn}
              className="project-card group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-800/80 text-white rounded-full hover:bg-primary-600 transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-dark-800/80 text-white rounded-full hover:bg-primary-600 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4 space-x-2">
                  <div className="p-1.5 bg-primary-100 dark:bg-primary-900/30 rounded-md text-primary-600 dark:text-primary-400">
                    {project.category === 'web app' ? <Code size={16} /> : <Layers size={16} />}
                  </div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-primary-600 dark:text-primary-400">
                    {project.category === 'web app' ? 'Web Application' : 'UI/UX Design'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;