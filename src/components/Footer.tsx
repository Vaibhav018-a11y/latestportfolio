import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/Vaibhav018-a11y',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://linkedin.com/in/vaibhav-gupta-456b0a258',
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:guptavk218@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="relative py-16 border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Vaibhav Kr. Gupta
            </h3>
            <p className="text-gray-400">
              "Where Theory Meets Real-World Implementation"
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-white/10 rounded-full border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {link.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cyan-500/20 text-center">
          <p className="text-gray-400">
            © 2024 Vaibhav Kr. Gupta. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;