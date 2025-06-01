import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight, Code } from 'lucide-react';
import img from "./images/sanyalogo.jpeg"

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-secondary-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-accent-400 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
                <span className="block text-primary-600 dark:text-primary-400">Hello, I'm Sanya Gupta</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-semibold text-dark-600 dark:text-gray-300"
            >
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 
                  2000,
                  'Web Developer', 
                  2000,
                  'B.Tech Student', 
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl"
            >
              I craft beautiful, interactive web experiences with modern technologies. 
              Currently pursuing my B.Tech degree and passionate about creating 
              intuitive and engaging user interfaces.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a href="#projects" className="btn btn-primary">
                View My Work <ChevronRight size={18} className="ml-1" />
              </a>
              <a href="#contact" className="btn btn-outline dark:border-primary-500 dark:text-primary-400">
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-5 pt-2"
            >
              <a
                href="https://github.com/SanyaGupta2723"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} className="text-dark-900 dark:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanya-gupta-13505b310"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-dark-900 dark:text-white" />
              </a>
              <a
                href="mailto:sanyakvds@gmail.com"
                className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} className="text-dark-900 dark:text-white" />
              </a>
              <a
                href="https://drive.google.com/file/d/1s9PttTTCgqw7ZDhaKJR-gS1NFGqSrtgS/view?usp=drivesdk"
                className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                aria-label="Resume"
              >
                <FileText size={20} className="text-dark-900 dark:text-white" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-2 order-first lg:order-last flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-dark-600 shadow-xl">
                <img
                  src={img}
                  alt="Sanya Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-700 p-3 rounded-full shadow-lg">
                <div className="bg-primary-500 text-white p-2 rounded-full">
                  <Code size={24} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;