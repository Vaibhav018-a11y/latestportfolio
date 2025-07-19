import React from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0A0A0A] z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={() => {
        const loader = document.getElementById('loader');
        if (loader) {
          loader.style.display = 'none';
        }
      }}
    >
      <div className="text-center">
        {/* Futuristic Loading Animation */}
        <div className="relative mb-12">
          <motion.div
            className="w-32 h-32 border-4 border-[#00F5FF]/20 rounded-full mx-auto relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          >
            <motion.div
              className="absolute inset-0 border-4 border-transparent border-t-[#00F5FF] rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-2 border-4 border-transparent border-r-[#9B5DE5] rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>
          
          {/* Center Pulse */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-[#00F5FF] to-[#9B5DE5] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
        
        {/* Welcome Text with Typewriter Effect */}
        <motion.h2
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-[#00F5FF] to-[#9B5DE5] bg-clip-text text-transparent">
            Welcome to My Portfolio
          </span>
        </motion.h2>
        
        {/* Loading Progress */}
        <motion.div
          className="w-64 h-2 bg-[#00F5FF]/20 rounded-full mx-auto mb-6 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#00F5FF] to-[#9B5DE5] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
        
        {/* Loading Dots */}
        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#C5FF00] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1, 
                repeat: Infinity, 
                delay: i * 0.2 
              }}
            />
          ))}
        </motion.div>
        
        {/* Loading Text */}
        <motion.p
          className="text-[#E0E0E0] mt-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Initializing Experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;