import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import {
  FaIdCard,
  FaGraduationCap,
  FaFileInvoiceDollar,
  FaPassport,
  FaLightbulb,
  FaWater,
  FaMobile,
  FaUserTie,
  FaFileAlt,
  FaBusAlt,
  FaHome,
  FaMoneyBillWave
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

interface ServicesProps {
  theme: 'dark' | 'light';
}

const Services: React.FC<ServicesProps> = ({ theme }) => {
  const services = [
    {
      icon: <FaIdCard />,
      title: "Pan Card Services",
      description: "Apply for new PAN card, corrections, and reprints"
    },
    {
      icon: <FaGraduationCap />,
      title: "Education Services",
      description: "Exam forms, results, and admissions"
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Bill Payments",
      description: "Electricity, water, and other utility bills"
    },
    {
      icon: <FaPassport />,
      title: "Government Services",
      description: "Passport, Aadhaar, and other govt. services"
    },
    {
      icon: <FaLightbulb />,
      title: "Electricity Bill",
      description: "Pay your electricity bills online"
    },
    {
      icon: <FaWater />,
      title: "Water Bill",
      description: "Pay your water bills hassle-free"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Recharge",
      description: "Recharge any mobile operator"
    },
    {
      icon: <FaUserTie />,
      title: "Job Applications",
      description: "Apply for government and private jobs"
    },
    {
      icon: <FaFileAlt />,
      title: "Certificates",
      description: "Income, domicile, and other certificates"
    },
    {
      icon: <FaBusAlt />,
      title: "Travel Booking",
      description: "Bus tickets and travel services"
    },
    {
      icon: <FaHome />,
      title: "Property Tax",
      description: "Pay your property tax online"
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Money Transfer",
      description: "Send money securely and quickly"
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
            Our Services
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

export default Services;