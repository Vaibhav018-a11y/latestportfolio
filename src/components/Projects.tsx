import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Terminal, Container, GitBranch, Smartphone } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'AI Tutor',
      description: 'Interactive AI-powered tutoring system built with Streamlit and Gemini AI',
      icon: <Bot className="w-8 h-8" />,
      tags: ['Streamlit', 'Gemini AI', 'Python', 'Machine Learning'],
      color: 'from-cyan-400 to-blue-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Linux Command Executor',
      description: 'Advanced command-line interface with automation features',
      icon: <Terminal className="w-8 h-8" />,
      tags: ['Python', 'Linux', 'CLI', 'Automation'],
      color: 'from-blue-500 to-purple-600',
      github: '#',
      demo: '#'
    },
    {
      title: 'Docker CLI Menu App',
      description: 'User-friendly Docker container management interface',
      icon: <Container className="w-8 h-8" />,
      tags: ['Docker', 'Python', 'CLI', 'DevOps'],
      color: 'from-purple-600 to-pink-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'CI/CD Pipeline',
      description: 'Automated deployment pipeline with Jenkins and GitHub integration',
      icon: <GitBranch className="w-8 h-8" />,
      tags: ['Jenkins', 'GitHub', 'CI/CD', 'DevOps'],
      color: 'from-pink-500 to-red-500',
      github: '#',
      demo: '#'
    },
    {
      title: 'Multi-tool Streamlit App',
      description: 'Comprehensive toolkit for photo editing, email, Instagram, and GPS features',
      icon: <Smartphone className="w-8 h-8" />,
      tags: ['Streamlit', 'Python', 'API Integration', 'Multi-tool'],
      color: 'from-red-500 to-orange-500',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${project.color} mb-4 self-start`}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/10 text-cyan-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;