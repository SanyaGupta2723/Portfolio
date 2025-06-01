import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Moon, Sun, Code } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a
          href="#home"
          className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold text-xl"
        >
          <Code size={24} className="text-primary-600 dark:text-primary-400" />
          <span>Sanya Gupta</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  scrolled 
                    ? 'text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400' 
                    : 'text-dark-800 dark:text-white hover:text-primary-600 dark:hover:text-primary-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-primary-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-primary-600" />
            )}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-dark-800 shadow-lg">
          <div className="container-custom py-4 flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-lg font-medium text-dark-800 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;