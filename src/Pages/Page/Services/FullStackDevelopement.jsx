import { motion } from "framer-motion";
import {
    FaLaptopCode,
    FaNodeJs,
    FaSass
} from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiRedis,
    SiMongodb,
    SiExpress,
    SiJavascript
} from "react-icons/si";

const FullStackDevelopement = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <FaLaptopCode className="text-6xl mb-4" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Full Stack Development
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Cutting-edge MERN solutions with TypeScript, Redis caching, Tailwind CSS, SCSS and more.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-indigo-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        About Our Full Stack Services
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our full stack development expertise spans across the entire technology spectrum—from robust backend architectures using Node.js and Express, dynamic front-end development with React, to implementing advanced features with TypeScript, Redis caching, and modern styling solutions like Tailwind CSS and SCSS.
                        We build scalable, secure, and high-performance web applications that drive business growth and deliver an exceptional user experience.
                    </p>
                </div>
            </section>

            {/* Technology Stack Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Technology Stack
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* React */}
                        <div className="flex flex-col items-center">
                            <FaReact className="text-5xl text-blue-400" />
                            <span className="mt-2 text-lg font-medium">React</span>
                        </div>
                        {/* Node.js */}
                        <div className="flex flex-col items-center">
                            <FaNodeJs className="text-5xl text-green-500" />
                            <span className="mt-2 text-lg font-medium">Node.js</span>
                        </div>
                        {/* Express */}
                        <div className="flex flex-col items-center">
                            <SiExpress className="text-5xl text-gray-800" />
                            <span className="mt-2 text-lg font-medium">Express</span>
                        </div>
                        {/* MongoDB */}
                        <div className="flex flex-col items-center">
                            <SiMongodb className="text-5xl text-green-700" />
                            <span className="mt-2 text-lg font-medium">MongoDB</span>
                        </div>
                        {/* TypeScript */}
                        <div className="flex flex-col items-center">
                            <SiTypescript className="text-5xl text-blue-600" />
                            <span className="mt-2 text-lg font-medium">TypeScript</span>
                        </div>
                        {/* Redis */}
                        <div className="flex flex-col items-center">
                            <SiRedis className="text-5xl text-red-500" />
                            <span className="mt-2 text-lg font-medium">Redis</span>
                        </div>
                        {/* Tailwind CSS */}
                        <div className="flex flex-col items-center">
                            <SiTailwindcss className="text-5xl text-teal-400" />
                            <span className="mt-2 text-lg font-medium">Tailwind</span>
                        </div>
                        {/* SCSS */}
                        <div className="flex flex-col items-center">
                            <FaSass className="text-5xl text-pink-500" />
                            <span className="mt-2 text-lg font-medium">SCSS</span>
                        </div>
                        {/* JavaScript */}
                        <div className="flex flex-col items-center">
                            <SiJavascript className="text-5xl text-yellow-500" />
                            <span className="mt-2 text-lg font-medium">JavaScript</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Details Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Full Stack Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Custom Web Application Development */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">Custom Web Applications</h3>
                            <p className="text-gray-700">
                                Build scalable and maintainable web solutions tailored to your business needs using MERN stack and modern development practices.
                            </p>
                        </div>
                        {/* Mobile Responsive UI/UX Design */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">Responsive UI/UX Design</h3>
                            <p className="text-gray-700">
                                We create intuitive and responsive designs that offer seamless user experiences across desktop, tablet, and mobile devices.
                            </p>
                        </div>
                        {/* API & Microservices Development */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">API & Microservices</h3>
                            <p className="text-gray-700">
                                Develop robust APIs and microservices to ensure your application is modular, scalable, and easily maintainable.
                            </p>
                        </div>
                        {/* Performance Optimization */}
                        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
                            <p className="text-gray-700">
                                Implement advanced caching with Redis, optimized database queries, and code improvements to boost performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Our Development Process
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">1. Requirement Analysis</h3>
                            <p className="text-gray-700">
                                We collaborate closely with you to define the project scope, requirements, and success metrics.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">2. Design & Prototyping</h3>
                            <p className="text-gray-700">
                                Our design team creates interactive wireframes and prototypes to bring your vision to life.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">3. Development & Testing</h3>
                            <p className="text-gray-700">
                                Using agile methodologies, our developers build robust applications while ensuring rigorous testing for quality assurance.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">4. Deployment & Maintenance</h3>
                            <p className="text-gray-700">
                                We deploy your application on scalable infrastructure and provide continuous support and optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio / Case Studies Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        
                    </h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
                            <p className="text-gray-700">
                                A full-featured e-commerce solution built using the MERN stack, delivering seamless performance and user experience.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Real-Time Dashboard</h3>
                            <p className="text-gray-700">
                                Developed a real-time analytics dashboard with Redis caching and TypeScript for superior performance.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Social Platform</h3>
                            <p className="text-gray-700">
                                A responsive social networking site with dynamic features built with React, Node.js, and MongoDB.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                What industries do you serve?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                We work with businesses across various industries—from e-commerce and finance to social platforms and healthcare.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                Do you offer ongoing maintenance?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Yes, we provide continuous support and maintenance services to ensure your application remains secure and optimized.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                How long does a full stack project take?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Project timelines vary by scope, but a typical full stack development project ranges from 3 to 6 months.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us today to kickstart your full stack development project and drive your business forward.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
};

export default FullStackDevelopement;
