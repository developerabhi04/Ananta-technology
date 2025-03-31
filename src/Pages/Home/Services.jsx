import { motion } from "framer-motion";
import Bottomline from "../../Components/BottomLine/Bottomline";

// 💡 Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring" } },
};

const Services = () => {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#0c0120] to-[#241533] py-20 px-6 sm:px-16 text-white" id="services">
      <motion.div
        className="max-w-7xl mx-auto text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our <span className="text-[#915EFF]">Services</span>
        </motion.h2>

        {/* 🎯 BottomLine Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-40"
        >
          <Bottomline />
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          At Ananta Technologies, we offer a comprehensive range of IT services designed to accelerate your business growth, enhance operational efficiency, and deliver outstanding user experiences.
        </motion.p>

        {/* ⚡ Services Cards with Staggered Animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left"
          variants={containerVariants}
        >
          {[
            { title: "🌐 Web Development", desc: "Robust, responsive, and scalable web applications developed using the latest technologies such as React, Vite, and Node.js." },
            { title: "📱 Mobile App Development", desc: "Cross-platform mobile solutions that provide seamless user experiences on both iOS and Android platforms." },
            { title: "☁️ Cloud Solutions", desc: "Comprehensive cloud services including architecture, migration, and management to ensure your business stays secure and cost-effective." },
            { title: "📊 Data Analytics", desc: "Transform your data into actionable insights with our advanced analytics solutions." },
            { title: "💡 Digital Marketing", desc: "End-to-end digital marketing services including SEO, PPC, and social media strategies to enhance your brand's visibility." },
            { title: "🎨 UI/UX Design", desc: "Designing intuitive, user-friendly interfaces with a focus on user experience, ensuring seamless navigation." },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 🎯 Call-to-Action Section with Animation */}
        <motion.div
          className="mt-16 bg-slate-800 rounded-lg p-10 text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Need a Custom Solution? Let’s Create Something Exceptional Together.
          </h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
