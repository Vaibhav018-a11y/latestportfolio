import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Zap, Rocket, Star, Download, Play, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = [
    "DevOps Engineer", 
    "AI Enthusiast",
    "Problem Solver"
   
  ];

  const typewriterMessages = [
    "Hi there! I'm Vaibhav, welcome to my digital space.",
    "I craft innovative solutions with cutting-edge technology.",
    "Let's build something extraordinary together."
  ];

  // Typewriter effect
  useEffect(() => {
    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    const typewriterInterval = setInterval(() => {
      const currentMessage = typewriterMessages[currentMessageIndex];
      
      if (!isDeleting) {
        setTypewriterText(currentMessage.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentMessage.length) {
          setIsTyping(false);
          setTimeout(() => {
            isDeleting = true;
            setIsTyping(true);
          }, 2000);
        }
      } else {
        setTypewriterText(currentMessage.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentMessageIndex = (currentMessageIndex + 1) % typewriterMessages.length;
          setIsTyping(true);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  // Role rotation effect
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(roleInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-[#9B5DE5]/20 to-[#00F5FF]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.7, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#C5FF00]/20 to-[#3A86FF]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Floating Tech Icons */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00F5FF]/30"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ 
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.5 
            }}
          >
            {i % 4 === 0 && <Code className="w-8 h-8" />}
            {i % 4 === 1 && <Terminal className="w-7 h-7" />}
            {i % 4 === 2 && <Zap className="w-6 h-6" />}
            {i % 4 === 3 && <Star className="w-7 h-7" />}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center z-10 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Typewriter Introduction */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-xl md:text-2xl text-[#E0E0E0] mb-6 font-light max-w-4xl mx-auto">
            <span className="text-[#00F5FF]">{typewriterText}</span>
            {isTyping && (
              <motion.span
                className="inline-block w-0.5 h-6 bg-[#C5FF00] ml-1"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>

        {/* Main Name with Holographic Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 leading-none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block bg-gradient-to-r from-[#00F5FF] via-[#9B5DE5] to-[#C5FF00] bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(0, 245, 255, 0.5))'
              }}
              whileHover={{ 
                scale: 1.05,
                filter: 'drop-shadow(0 0 50px rgba(0, 245, 255, 0.8))'
              }}
              transition={{ duration: 0.3 }}
            >
              Vaibhav
            </motion.span>
            <br />
            <motion.span
              className="inline-block bg-gradient-to-r from-[#C5FF00] via-[#3A86FF] to-[#9B5DE5] bg-clip-text text-transparent"
              style={{
                filter: 'drop-shadow(0 0 30px rgba(155, 93, 229, 0.5))'
              }}
              whileHover={{ 
                scale: 1.05,
                filter: 'drop-shadow(0 0 50px rgba(155, 93, 229, 0.8))'
              }}
              transition={{ duration: 0.3 }}
            >
              Kr. Gupta
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Dynamic Role with Hologram Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-2xl md:text-4xl text-[#E0E0E0] mb-4">
            
            <div className="inline-block relative h-16 md:h-20 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="absolute inset-0 bg-gradient-to-r from-[#00F5FF] to-[#9B5DE5] bg-clip-text text-transparent font-bold"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(0, 245, 255, 0.6))'
                  }}
                  initial={{ y: 50, opacity: 0, rotateX: 90 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -50, opacity: 0, rotateX: -90 }}
                  transition={{ duration: 0.6 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Tagline */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.p
            className="text-xl md:text-2xl text-[#E0E0E0] font-light max-w-4xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-[#00F5FF] font-semibold">"Where Theory Meets</span>
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-[#9B5DE5] to-[#C5FF00] bg-clip-text text-transparent font-semibold"> Real-World Implementation"</span>
          </motion.p>
        </motion.div>

        {/* Futuristic CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-[#00F5FF] to-[#9B5DE5] text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 50px rgba(0, 245, 255, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#9B5DE5] to-[#C5FF00]"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <Rocket className="w-6 h-6" />
              Let's Collaborate
            </span>
          </motion.button>
          
          <motion.button
            className="group relative px-10 py-5 border-2 border-[#00F5FF] text-[#00F5FF] rounded-full font-bold text-lg overflow-hidden backdrop-blur-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 0 40px rgba(0, 245, 255, 0.5)',
              color: '#ffffff'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00F5FF] to-[#9B5DE5]"
              initial={{ scale: 0, borderRadius: '50%' }}
              whileHover={{ scale: 1, borderRadius: '0%' }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <Play className="w-6 h-6" />
              Explore Work
            </span>
          </motion.button>

          <motion.button
            className="group relative px-10 py-5 bg-black/40 backdrop-blur-xl text-white rounded-full font-bold text-lg border border-[#C5FF00]/50"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(197, 255, 0, 0.1)',
              boxShadow: '0 0 30px rgba(197, 255, 0, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/resume.pdf';
              link.download = 'Vaibhav_Kr_Gupta_Resume.pdf';
              link.click();
            }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Download className="w-6 h-6" />
              Resume
            </span>
          </motion.button>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            className="text-[#00F5FF] mb-4 text-sm font-medium tracking-wider uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Discover More
          </motion.div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer group"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-[#00F5FF]/30 rounded-full blur-lg"
                animate={{ 
                  scale: [1, 1.8, 1],
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <ChevronDown className="w-12 h-12 text-[#00F5FF] relative z-10 group-hover:text-[#C5FF00] transition-colors duration-300" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00F5FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;