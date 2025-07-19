import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Brain, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming & Development',
      icon: <Code className="w-8 h-8" />,
      skills: ['Python', 'C++', 'C'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'DevOps & Infrastructure',
      icon: <Server className="w-8 h-8" />,
      skills: ['Docker', 'Jenkins', 'Kubernetes', 'Linux', 'Git'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      skills: ['GeminiAI', 'Streamlit',],
      color: 'from-purple-600 to-pink-500'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-8 h-8" />,
      skills: ['React', 'MongoDB'],
      color: 'from-pink-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
              Skills & Expertise
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;