import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-black/20 backdrop-blur-2xl border-b border-[#00F5FF]/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with Pulse Effect */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-black bg-gradient-to-r from-[#00F5FF] to-[#9B5DE5] bg-clip-text text-transparent">
            
            </div>
          </motion.div>
         
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-[#00F5FF]'
                    : 'text-[#E0E0E0] hover:text-[#00F5FF]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#9B5DE5] to-[#00F5FF]"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ duration: 0.3 }}
                  />
                )}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#9B5DE5] to-[#00F5FF]"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            <motion.button
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-lg border border-[#00F5FF]/20 hover:border-[#00F5FF]/40 transition-all duration-300"
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)'
              }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? 
                <Sun className="w-5 h-5 text-[#C5FF00]" /> : 
                <Moon className="w-5 h-5 text-[#9B5DE5]" />
              }
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-lg border border-[#00F5FF]/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? 
                <Sun className="w-5 h-5 text-[#C5FF00]" /> : 
                <Moon className="w-5 h-5 text-[#9B5DE5]" />
              }
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-lg border border-[#00F5FF]/20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? 
                <X className="w-6 h-6 text-[#00F5FF]" /> : 
                <Menu className="w-6 h-6 text-[#00F5FF]" />
              }
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="lg:hidden overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 bg-black/40 backdrop-blur-2xl border-t border-[#00F5FF]/20">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl mb-2 font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-[#00F5FF] bg-[#00F5FF]/10'
                  : 'text-[#E0E0E0] hover:text-[#00F5FF] hover:bg-white/5'
              }`}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ x: 10 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;