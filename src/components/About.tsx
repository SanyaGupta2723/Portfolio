import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, BookOpen, Calendar, GraduationCap } from 'lucide-react';
import img from "./images/sanya.jpeg"


const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="section-title text-dark-900 dark:text-white">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={img}
                alt="Sanya working on code"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-primary-950/10 dark:bg-primary-/100"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-lg">
              <p className="font-semibold text-primary-600 dark:text-primary-400 text-xl">1 Years Experience</p>
              <p className="text-gray-600 dark:text-gray-400">Frontend Development</p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerChildren}
            className="space-y-6"
          >
            <motion.h3 variants={fadeIn} className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white">
              I'm a passionate Frontend Developer & Web Developer
            </motion.h3>
            
            <motion.p variants={fadeIn} className="text-gray-600 dark:text-gray-400">
              Hi there! I'm Sanya Gupta, a third-year B.Tech student specializing in frontend development. My journey in web development started with a curiosity about how websites work, and has evolved into a passion for creating beautiful, interactive user experiences.
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-gray-600 dark:text-gray-400">
              I combine technical skills with creative problem-solving to build modern, responsive websites and applications. I'm constantly learning new technologies and techniques to stay at the cutting edge of web development.
            </motion.p>

            <motion.div variants={staggerChildren} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div variants={fadeIn} className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science Specialization</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">1 Years in Web Development</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Lucknow</p>
                </div>
              </motion.div>
              
              <motion.div variants={fadeIn} className="flex items-start space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white">Learning</h4>
                  <p className="text-gray-600 dark:text-gray-400">Always expanding my skills</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-4">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;