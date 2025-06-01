import React from 'react';
import { FileText, Github, Linkedin, Mail, } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-dark-950 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Sanya Gupta</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Frontend developer specializing in creating beautiful and functional web experiences.
              Always learning, Always improving.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/SanyaGupta2723"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="Github"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanya-gupta-13505b310"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://drive.google.com/file/d/1s9PttTTCgqw7ZDhaKJR-gS1NFGqSrtgS/view?usp=drivesdk"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="Resume"
              >
                <FileText size={18} />
              </a>
              <a
                href="mailto:sanyakvds@gmail.com"
                className="p-2 bg-gray-800 hover:bg-primary-600 rounded-full transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                Lucknow, Uttar Pradesh , India
              </li>
              <li>
                <a href="sanyakvds@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  sanyakvds@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+917991697868" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  +91 79916 97868
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Sanya Gupta. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2 md:mt-0 flex items-center">
            Made with using React & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;