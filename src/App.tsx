import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import { useVisitorCounter } from './hooks/useVisitorCounter';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const visitorCount = useVisitorCounter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      
      <div className="relative bg-[#0A0A0A] text-[#E0E0E0] overflow-hidden">
        <AnimatedBackground />
        
        <div className="relative z-10">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>

        {/* Enhanced Visitor Counter */}
        <motion.div
          className="fixed bottom-6 left-6 bg-black/40 backdrop-blur-xl rounded-2xl px-6 py-4 border border-[#00F5FF]/30 z-40 shadow-2xl"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
        >
          <div className="flex items-center gap-3">
            <motion.div 
              className="w-4 h-4 bg-[#C5FF00] rounded-full shadow-lg shadow-[#C5FF00]/50"
              animate={{ 
                boxShadow: [
                  '0 0 10px #C5FF00',
                  '0 0 20px #C5FF00',
                  '0 0 10px #C5FF00'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div>
              <div className="text-xs text-[#9B5DE5] font-medium uppercase tracking-wider">Live Visitors</div>
              <div className="text-lg font-bold text-[#00F5FF]">{visitorCount}</div>
            </div>
          </div>
        </motion.div>

        {/* Floating Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-r from-[#9B5DE5] to-[#00F5FF] rounded-full shadow-2xl z-40 group"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 30px rgba(155, 93, 229, 0.6)'
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}

export default App;