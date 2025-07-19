import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Intern',
      company: 'LinuxWorld Informatics Pvt. Ltd.',
      period: 'Current',
      description: 'Gaining real-world experience in DevOps, Automation, and AI frameworks',
      achievements: ['Working with cutting-edge technologies', 'Building scalable solutions', 'Learning industry best practices'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Java Intern',
      company: 'Promodaddy Digital',
      period: '2023',
      description: 'Focused on Java application optimization and feature development',
      achievements: ['Optimized Java apps (15% faster)', 'Implemented new features', 'Added comprehensive unit tests'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Python Intern',
      company: 'Zeetron Digital LLP',
      period: '2023',
      description: 'Specialized in automation and web application development',
      achievements: ['Automated data pipelines (30% less manual work)', 'Built Flask/Django apps', 'Integrated APIs'],
      color: 'from-purple-600 to-pink-500'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-600 rounded-full hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${exp.color}`}>
                          <Building className="w-6 h-6" />
                        </div>
                        <div className="flex items-center text-cyan-400">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <h4 className="text-xl text-cyan-400 mb-4">{exp.company}</h4>
                      <p className="text-gray-300 mb-6">{exp.description}</p>
                      
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (achIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-center"
                          >
                            <TrendingUp className="w-4 h-4 text-green-400 mr-3" />
                            <span className="text-gray-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full border-4 border-gray-900 z-10" />
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;