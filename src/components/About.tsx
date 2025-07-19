import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, X, FileText, Image } from 'lucide-react';

const About: React.FC = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  return (
    <section id="about" className="py-20 relative">
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
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20 flex items-center justify-center">
                    <img
                      src="/assets/image.jpg"
                      alt="Vaibhav Kr. Gupta"
                      className="w-full h-full object-cover rounded-full"
                    />

                  </div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Who Am I?</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm Vaibhav Kr. Gupta, a final-year B.Tech CSE student at Poornima College of Engineering, Jaipur. 
                Currently pursuing an internship at LinuxWorld Informatics Pvt. Ltd., gaining real-world experience 
                in DevOps, Automation, and AI frameworks.
              </p>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-cyan-400 mb-3">I'm passionate about:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    🔧 Open Source
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    ⚙️ Automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                    🚀 Learning by Doing
                  </li>
                </ul>
              </div>

              <p className="text-gray-300 mb-6">
                Let's build something meaningful together.
              </p>

              <motion.button
                onClick={() => setShowResumeModal(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-5 h-5" />
                View Resume
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResumeModal && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Resume - Vaibhav Kr. Gupta</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    // Create a downloadable resume
                    const link = document.createElement('a');
                    link.href = '/assets/adhar card.pdf'; // You would need to add the actual resume PDF
                    link.download = 'Vaibhav_Kr_Gupta_Resume.pdf';
                    link.click();
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="bg-gray-50 rounded-lg p-8 text-gray-900">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">Vaibhav Kr. Gupta</h1>
                  <p className="text-lg text-gray-600 mb-4">"Where Theory Meets Real-World Implementation"</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <span>📱 6376565840</span>
                    <span>📧 guptavk218@gmail.com</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Education</h2>
                    <p><strong>B.Tech CSE</strong> - Poornima College of Engineering, Jaipur (Final Year)</p>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Experience</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold">Intern - LinuxWorld Informatics Pvt. Ltd.</h3>
                        <p className="text-gray-600">DevOps, Automation, and AI frameworks</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Java Intern - Promodaddy Digital</h3>
                        <p className="text-gray-600">Optimized Java applications (15% performance improvement)</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Python Intern - Zeetron Digital LLP</h3>
                        <p className="text-gray-600">Automated data pipelines (30% reduction in manual work)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold mb-3 border-b border-gray-300 pb-1">Skills</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold">Programming</h3>
                        <p className="text-gray-600">Python, C++, Java</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">DevOps</h3>
                        <p className="text-gray-600">Docker, Jenkins, Kubernetes</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">AI & ML</h3>
                        <p className="text-gray-600">Langchain, GeminiAI, Streamlit</p>
                      </div>
                      <div>
                        <h3 className="font-semibold">Tools</h3>
                        <p className="text-gray-600">Git, Linux, Flask, Django</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default About;