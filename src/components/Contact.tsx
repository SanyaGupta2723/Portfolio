import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import image from "./images/location.jpeg"

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you'd handle form submission to a backend service here
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');

    // Reset the submitted state after a delay
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

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
    <section id="contact" className="section">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="section-title text-dark-900 dark:text-white">
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects,
            creative ideas or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h3 variants={fadeIn} className="text-2xl font-bold text-dark-900 dark:text-white">
              Contact Information
            </motion.h3>

            <motion.div variants={fadeIn} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-900 dark:text-white">Email</h4>
                  <a href="sanyakvds@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    sanyakvds@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-900 dark:text-white">Phone</h4>
                  <a href="tel:+917991697868" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    +91 79916 9786
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-dark-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lucknow, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="pt-4">
              <div className="h-72 w-full rounded-lg overflow-hidden shadow-md">
                {/* This would be an embedded Google Maps iframe in a real application */}
                <div className="w-full h-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                <p className="text-gray-600 dark:text-gray-400">
                    <img src={image} alt="Map" />
                </p>
                  
                </div>
              </div>
            </motion.div>
          </motion.div>


          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={fadeIn}
          >
            <div className="bg-white dark:bg-dark-800 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6 text-dark-900 dark:text-white">Send Me a Message</h3>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6"
                >
                  <p className="text-green-800 dark:text-green-400 font-medium text-center">
                    Thank you for your message! I'll get back to you soon.
                  </p>
                </motion.div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 transition-colors"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary flex justify-center items-center space-x-2"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;