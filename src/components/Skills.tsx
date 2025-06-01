import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML/CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'React.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    { name: 'Next.js', level: 80, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 80, category: 'backend' },
    { name: 'Express.js', level: 70, category: 'backend' },
    { name: 'MongoDB', level: 65, category: 'backend' },
    { name: 'Firebase', level: 60, category: 'backend' },
    
    // Design
    { name: 'Canva', level: 80, category: 'design' },
    { name: 'Figma', level: 75, category: 'design' },
    { name: 'UI/UX Design', level: 90, category: 'design' },
    { name: 'Responsive Design', level: 92, category: 'design' },
    
    // Tools
    { name: 'Git/GitHub', level: 95, category: 'tools' },
    { name: 'VS Code', level: 98, category: 'tools' },
    { name: 'Netlify', level: 90, category: 'tools' },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar: React.FC<{ skill: Skill, index: number }> = ({ skill, index }) => {
    return (
      <motion.div 
        variants={fadeIn}
        className="mb-4"
        custom={index}
      >
        <div className="flex justify-between mb-1">
          <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
          <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="h-2.5 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, 
                ${skill.category === 'frontend' ? '#0ea5e9' : 
                skill.category === 'backend' ? '#14b8a6' : 
                skill.category === 'design' ? '#f59e0b' : '#8b5cf6'} 0%, 
                ${skill.category === 'frontend' ? '#38bdf8' : 
                skill.category === 'backend' ? '#5eead4' : 
                skill.category === 'design' ? '#fcd34d' : '#c4b5fd'} 100%)`
            }}
          ></motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="section-title text-dark-900 dark:text-white">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and proficiency levels.
            I continuously learn and improve these skills to deliver high-quality work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                Frontend Development
              </h3>
              {getSkillsByCategory('frontend').map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold text-secondary-600 dark:text-secondary-400 mb-4">
                Backend Development
              </h3>
              {getSkillsByCategory('backend').map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold text-accent-600 dark:text-accent-400 mb-4">
                Design Skills
              </h3>
              {getSkillsByCategory('design').map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
            
            <motion.div variants={fadeIn}>
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-4">
                Tools & Others
              </h3>
              {getSkillsByCategory('tools').map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;