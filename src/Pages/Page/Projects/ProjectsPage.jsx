// src/Pages/ProjectsPage/ProjectsPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import Bottomline from "../../../Components/BottomLine/Bottomline";
import { Link } from "react-router-dom";

// ---- Import project images ----
import project1 from "../../../assets/Projects/project1.png";
import project2 from "../../../assets/Projects/project2.png";
import project3 from "../../../assets/Projects/project3.png";
import project4 from "../../../assets/Projects/project7.png";
import project5 from "../../../assets/Projects/project8.png";
import project6 from "../../../assets/Projects/project9.png";


// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, when: "beforeChildren" }
    }
};
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

// Project data
const projects = [
    { id: 1, title: "AgroSpace Solution", image: project1 },
    { id: 2, title: "Empowering Marine", image: project2 },
    { id: 3, title: "E-Commerce Platform", image: project3 },
    { id: 4, title: "Fem-Cartel E-Commerce", image: project4 },
    { id: 5, title: "CRM Dashboard", image: project5 },
    { id: 6, title: "E-Commerce Admin Panel", image: project6 }
];
const tags = ["All", "Web", "Dashboard", "E-Commerce"];



// Main Projects Page Component
const ProjectsPage = () => {
    const [filter, setFilter] = useState("All");
    const filtered =
        filter === "All"
            ? projects
            : projects.filter(p => {
                if (filter === "Dashboard") return p.title.includes("Dashboard");
                if (filter === "E-Commerce") return p.title.includes("E-Commerce");
                return ["AgroSpace Solution", "Empowering Marine"].includes(p.title);
            });

    return (
        <main className="min-h-screen bg-gray-50 bg-gradient-to-r to-[#3a195b] from-[#0e3468]">

            {/* Hero Section with Centered Canvas */}
            <section className=" py-36 px-6 sm:px-16 text-center">

                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600 mb-4"
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Complete Project Portfolio
                </motion.h1>
                <Bottomline />
                <motion.p
                    className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Dive into case studies, live demos, and behind-the-scenes insights. See how design, development, and strategy come together.
                </motion.p>

                {/* Canvas Container */}

            </section>

            {/* Filters */}
            <section className="py-8 flex justify-center space-x-4 px-6 sm:px-16">
                {tags.map(tag => (
                    <button
                        key={tag}
                        onClick={() => setFilter(tag)}
                        className={`px-6 py-2 rounded-full font-medium shadow-lg transition-colors ${filter === tag
                            ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}>
                        {tag}
                    </button>
                ))}
            </section>

            {/* Projects Grid */}
            <section className="px-6 sm:px-16 pb-20">
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {filtered.map(project => (
                        <motion.div
                            key={project.id}
                            className="bg-slate-900 bg-opacity-50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-4xl transition-shadow"
                            variants={cardVariants}
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-gray-300">{project.title}</h3>
                                <p className="text-gray-400 mb-4">
                                    Explore the live demo, full case study, and architecture details.
                                </p>
                                <Link
                                    to={`/projects/project-details/${project.id}`}
                                    className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity"
                                >
                                    View Details
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Testimonials */}
            <section className=" bg-gradient-to-r from-green-500 to-blue-600 text-white py-16 px-6 sm:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">What Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <motion.div
                        className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="italic mb-4">
                            The interactive dashboard we received was transformative—user engagement soared by 40%.
                        </p>
                        <p className="font-semibold">– Priya Sharma, Product Lead</p>
                    </motion.div>
                    <motion.div
                        className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="italic mb-4">
                            Sales jumped 25% after our e-commerce UX revamp. Their expertise is top-notch.
                        </p>
                        <p className="font-semibold">– Rahul Mehta, CEO, ShopEase</p>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-16 px-6 sm:px-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Next Project?</h2>
                <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                    {"Let's"} collaborate to build your vision with stunning design, robust architecture, and seamless delivery.
                </p>
                <Link
                    to="/contact-page"
                    className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity"
                >
                    Get in Touch
                </Link>
            </section>
        </main>
    );
};

export default ProjectsPage;