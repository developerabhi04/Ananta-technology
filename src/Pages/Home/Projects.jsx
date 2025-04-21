import Bottomline from "../../Components/BottomLine/Bottomline";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

// Project images
import project1 from "../../assets/Projects/project1.png";
import project2 from "../../assets/Projects/project2.png";
import project3 from "../../assets/Projects/project3.png";
import project4 from "../../assets/Projects/project7.png";
import project5 from "../../assets/Projects/project8.png";
import project6 from "../../assets/Projects/project9.png";
import { FiArrowRight } from "react-icons/fi";

// Timeline variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, duration: 1 } }
};
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: 'spring' } }
};

const projects = [
  { id: 1, title: 'AgroSpace Solution', description: 'A cutting-edge analytics platform...', image: project1, link: 'https://my.agrospace.io/' },
  { id: 2, title: 'Empowering Marine', description: 'A robust web portal...', image: project2, link: 'https://oceanq.eu/' },
  { id: 3, title: 'E-Commerce Platform', description: 'An elegant e-commerce site...', image: project3, link: 'https://quantumasync.onrender.com/' },
  { id: 4, title: 'Fem-Cartel E-Commerce', description: 'A feature-rich e-commerce...', image: project4, link: 'https://fem-cartel.vercel.app/' },
  { id: 5, title: 'CRM Dashboard', description: 'An intuitive CRM dashboard...', image: project5, link: 'https://cloud.idurarapp.com/' },
  { id: 6, title: 'Admin Panel', description: 'A comprehensive admin panel...', image: project6, link: 'https://fem-cartel.vercel.app/admin/dashboard' }
];

const Projects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 200;
    };

    let offset = 0;
    const drawWave = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255,255,255,0.1)';
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      for (let x = 0; x <= width; x++) {
        const y = height / 2 + Math.sin((x + offset) * 0.02) * 20;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fill();
      offset += 2;
      animationId = requestAnimationFrame(drawWave);
    };

    window.addEventListener('resize', resize);
    resize();
    drawWave();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white overflow-hidden">
      {/* Wave canvas at top */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-48 pointer-events-none" />

      <motion.div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-0" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
        <motion.h2 className="text-4xl font-extrabold text-center mb-4" variants={itemVariants}>
          Our <span className="text-[#1ea7c9]">Projects</span>
        </motion.h2>
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <Bottomline />
        </motion.div>

        {/* Vertical timeline */}
        <div className="relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-1 before:bg-white/20">
          {projects.map((p, idx) => (
            <motion.div key={p.id} className={`mb-12 flex w-full ${idx % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`} variants={itemVariants}>
              <div className="w-1/2 p-6">
                <img src={p.image} alt={p.title} className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <div className="bg-white/10 px-4 py-2 rounded-full w-max mb-2">0{p.id}</div>
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-300 mb-4">{p.description}</p>
                <Link to={p.link} target="_blank" className="inline-flex items-center gap-2 text-[#915EFF] hover:underline">
                  View Live <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
