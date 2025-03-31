import project1 from "../../assets/Projects/project1.png";
import project2 from "../../assets/Projects/project2.png";
import project3 from "../../assets/Projects/project3.png";
import project4 from "../../assets/Projects/project7.png";
import project5 from "../../assets/Projects/project8.png";
import project6 from "../../assets/Projects/project9.png";
import { motion } from "framer-motion";
import Bottomline from "../../Components/BottomLine/Bottomline";

// 🎬 Animation Variants
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

// 🌟 Updated Project Content
const projects = [
  {
    id: 1,
    title: "AgroSpace Solution",
    description:
      "A cutting-edge analytics platform powered by AI models and advanced algorithms, delivering actionable insights with immersive visual storytelling.",
    image: project1,
    tags: ["AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://my.agrospace.io/",
  },
  {
    id: 2,
    title: "Empowering Marine",
    description:
      "A robust web portal designed to streamline marine and offshore operations, enhancing efficiency and connectivity for industry professionals.",
    image: project2,
    tags: ["AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://ecommerce-website-frontend.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "An elegant e-commerce website offering premium wellness and lifestyle products, combining sleek design with seamless functionality.",
    image: project3,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://quantumasync.onrender.com/",
  },
  {
    id: 4,
    title: "Fem-Cartel E-Commerce",
    description:
      "A feature-rich e-commerce solution providing luxury products for men and women, blending sophisticated design with superior user experience.",
    image: project4,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://fem-cartel.vercel.app/",
  },
  {
    id: 5,
    title: "CRM Dashboard",
    description:
      "An intuitive CRM dashboard designed for streamlined customer management, integrating powerful analytics for actionable business insights.",
    image: project5,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://cloud.idurarapp.com/",
  },
  {
    id: 6,
    title: "E-Commerce Admin Panel",
    description:
      "A comprehensive admin dashboard for efficient e-commerce management, offering real-time analytics, order tracking, and inventory control.",
    image: project6,
    tags: ["Redis", "AWS", "React Js", "MongoDb", "Node Js", "Express Js", "Redux"],
    webapp: "https://fem-cartel.vercel.app/admin/dashboard",
  },
];

const Projects = () => {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#241533] to-[#0c0120] py-20 px-6 sm:px-16 text-white" id="projects">
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
          Our <span className="text-[#915EFF]">Projects</span>
        </motion.h2>

        {/* 🎯 Animated BottomLine */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
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
          Explore our featured projects where innovative ideas were transformed into scalable digital solutions. Our portfolio reflects our dedication to delivering seamless, user-centric applications.
        </motion.p>

        {/* 🚀 Project Cards with Animation */}
        <motion.div
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#915EFF] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-800 px-3 py-1 rounded-full text-xs hover:bg-[#915EFF] transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 🔗 Animated View Project Button */}
              <motion.a
                href={project.webapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-gradient-to-r from-[#915EFF] to-purple-600 px-6 py-2 rounded-lg text-white font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🚀 View Project
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
