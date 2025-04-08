import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom"; // For navigation between pages
import Bottomline from "../../Components/BottomLine/Bottomline";
import { FiArrowRight } from "react-icons/fi"; // For the read more arrow
// Import icons for dynamic title icons
import { FaPenNib, FaMobileAlt, FaShoppingCart, FaShareAlt, FaCogs, FaLaptopCode } from "react-icons/fa";

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

// Helper function to render a colorful icon based on the service title.
const renderServiceIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("content writing"))
    return <FaPenNib className="inline-block text-xl text-red-500" />;
  if (lowerTitle.includes("mobile"))
    return <FaMobileAlt className="inline-block text-xl text-blue-500" />;
  if (lowerTitle.includes("e-commerce"))
    return <FaShoppingCart className="inline-block text-xl text-green-500" />;
  if (lowerTitle.includes("social media"))
    return <FaShareAlt className="inline-block text-xl text-purple-500" />;
  if (lowerTitle.includes("content management"))
    return <FaCogs className="inline-block text-xl text-yellow-500" />;
  if (lowerTitle.includes("full stack"))
    return <FaLaptopCode className="inline-block text-xl text-indigo-500" />;
  // Default icon (if needed)
  return null;
};

const Services = () => {

const navigate = useNavigate();

  // Updated services array with service-specific titles and descriptions
  const services = [
    {
      title: "Content Writing",
      desc: "Engaging content writing services tailored to your brand, including blog posts, articles, copywriting, and more.",
      link: "/services/content-writing",
    },
    {
      title: "Mobile App & Web Design & Dev",
      desc: "Innovative design and development for mobile applications and websites that offer seamless user experiences.",
      link: "/services/mobile-web-design-dev",
    },
    {
      title: "E-commerce Strategy Projects",
      desc: "Strategic planning and execution for your e-commerce projects, driving higher conversion rates and customer satisfaction.",
      link: "/services/ecommerce-strategy",
    },
    {
      title: "Social Media Campaigns",
      desc: "Creative social media campaigns designed to boost engagement, foster community, and amplify your brand's voice.",
      link: "/services/social-media-campaigns",
    },
    {
      title: "Content Management Systems",
      desc: "Robust CMS solutions that simplify the process of managing, publishing, and updating your digital content.",
      link: "/services/content-management",
    },
    {
      title: "Full Stack Development",
      desc: "Comprehensive development services covering both frontend and backend to build scalable, secure applications.",
      link: "/services/full-stack-development",
    },
  ];

  return (
    <section
      className="relative z-10 bg-gradient-to-r from-[#0c0120] to-[#241533] py-20 px-6 sm:px-16 text-white"
      id="services"
    >
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
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-[1.2rem] font-semibold mb-4 flex items-center gap-2">
                {/* Render the colorful icon based on the title */}
                {renderServiceIcon(service.title)}
                <span>{service.title}</span>
              </h3>
              <p className="text-sm text-gray-400">{service.desc}</p>
              {/* Read More Section with Navigation Link */}
              <Link
                to={service.link}
                className="flex items-center gap-1 mt-4 cursor-pointer hover:text-[#5e74ff] transition-colors"
              >
                <span className="text-sm font-medium text-[#915EFF]">Read More</span>
                <FiArrowRight className="text-xl  text-[#915EFF]" />
              </Link>
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
            onClick={()=> navigate("/contact-page")}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
