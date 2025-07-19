import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '6376565840',
      href: 'tel:6376565840',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'guptavk218@gmail.com',
      href: 'mailto:guptavk218@gmail.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/vaibhav-gupta-456b0a258',
      href: 'https://linkedin.com/in/vaibhav-gupta-456b0a258',
      color: 'from-purple-600 to-pink-500'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
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
              Get In Touch
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} mr-4`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{info.title}</h3>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder="Your message here..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;