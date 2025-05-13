import React from 'react';
import { motion } from 'framer-motion';
import {
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaSearch,
  FaServer,
  FaDatabase,
  FaShieldAlt,
  FaChartLine,
  FaPalette,
  FaRobot,
  FaCloud,
  FaGlobe
} from 'react-icons/fa';

interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  theme: 'dark' | 'light';
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, theme }) => {
  return (
    <motion.div
      className={`group flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-neon transition-all duration-300 border relative overflow-hidden backdrop-blur-sm 
        ${theme === 'dark' ? 'bg-white/10 border-blue-200/20' : 'bg-white/90 border-blue-200/50'}`}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover effect background */}
      <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-300 
        ${theme === 'dark' ? 'from-blue-900/0 via-purple-900/0 to-pink-900/0 group-hover:from-blue-900/10 group-hover:via-purple-900/10 group-hover:to-pink-900/10' : 'from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10'}`}></div>
      {/* Icon container with hover effect */}
      <motion.div 
        className={`text-4xl mb-4 relative z-10 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'}`}
        whileHover={{ 
          scale: 1.1,
          rotate: 5,
          transition: { duration: 0.2 }
        }}
      >
        {icon}
      </motion.div>
      {/* Title with hover effect */}
      <motion.h3 
        className={`text-xl font-semibold mb-2 relative z-10 group-hover:text-blue-600 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
      {/* Description with hover effect */}
      <motion.p 
        className={`text-center text-sm relative z-10 group-hover:text-gray-800 transition-colors duration-300 ${theme === 'dark' ? 'text-blue-100' : 'text-gray-600'}`}
        whileHover={{ scale: 1.02 }}
      >
        {description}
      </motion.p>
      {/* Bottom border animation */}
      <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 
        ${theme === 'dark' ? 'from-blue-800 via-purple-800 to-pink-800' : 'from-blue-500 via-purple-500 to-pink-500'}`}></div>
    </motion.div>
  );
};

interface WebSolutionsProps {
  theme: 'dark' | 'light';
}

const WebSolutions: React.FC<WebSolutionsProps> = ({ theme }) => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom website development with modern technologies"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications development"
    },
    {
      icon: <FaShoppingCart />,
      title: "E-commerce Solutions",
      description: "Online store development and management"
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description: "Search engine optimization and digital marketing"
    },
    {
      icon: <FaServer />,
      title: "Web Hosting",
      description: "Reliable and secure web hosting solutions"
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description: "Database design, optimization, and maintenance"
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Solutions",
      description: "Website security and protection services"
    },
    {
      icon: <FaChartLine />,
      title: "Analytics",
      description: "Website analytics and performance tracking"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Modern and responsive user interface design"
    },
    {
      icon: <FaRobot />,
      title: "Chatbot Development",
      description: "AI-powered chatbot solutions"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Services",
      description: "Cloud migration and management"
    },
    {
      icon: <FaGlobe />,
      title: "Domain Services",
      description: "Domain registration and management"
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br animate-gradient-x 
        ${theme === 'dark' ? 'from-blue-900/20 via-purple-900/20 to-pink-900/20' : 'from-blue-500/20 via-purple-500/20 to-pink-500/20'}`}></div>
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] animate-pulse 
        ${theme === 'dark' ? 'from-blue-900/10 via-transparent to-transparent' : 'from-blue-400/10 via-transparent to-transparent'}`}></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className={`text-3xl font-bold text-center mb-12 relative ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={`relative z-10 bg-clip-text text-transparent bg-gradient-to-r ${theme === 'dark' ? 'from-blue-300 to-purple-300' : 'from-blue-600 to-purple-600'}`}>
            Web Solutions
          </span>
          <div className={`absolute inset-0 bg-gradient-to-r blur-xl 
            ${theme === 'dark' ? 'from-blue-900/20 via-purple-900/20 to-pink-900/20' : 'from-blue-500/20 via-purple-500/20 to-pink-500/20'}`}></div>
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              theme={theme}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WebSolutions; 