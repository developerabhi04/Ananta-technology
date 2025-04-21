import { motion } from "framer-motion";
import {
    FaCogs,
    FaEdit,
    FaDatabase,
    FaFileAlt,
    FaWordpress
} from "react-icons/fa";

const Cms = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468]  text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <FaCogs className="text-6xl mb-4 text-[#D61F69]" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#D61F69]">
                        Content Management System
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Streamline your content workflow with our robust, scalable CMS solutions.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-[#D61F69] text-gray-200 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gradient-to-r to-[#851212] from-[#68720d] text-white">
                <div className="container mx-auto px-4 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        About Our CMS Solutions
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our CMS solutions are designed to empower businesses with efficient content creation, management, and delivery. We tailor platforms to fit your unique needs—ensuring an intuitive user interface, seamless integration, and robust performance that scales as your business grows.
                    </p>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="bg-gradient-to-r to-[#851212] from-[#68720d] py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Our CMS Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Custom CMS Development */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaEdit className="text-3xl text-blue-400 mr-2" />
                                <h3 className="text-xl font-semibold text-blue-400">Custom CMS Development</h3>
                            </div>
                            <p className="text-gray-300">
                                Build a tailored CMS platform that fits your workflow, empowering your team with intuitive tools for content management.
                            </p>
                        </div>

                        {/* Headless CMS Integration */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaWordpress className="text-3xl text-purple-400 mr-2" />
                                <h3 className="text-xl font-semibold text-purple-400">Headless CMS Integration</h3>
                            </div>
                            <p className="text-gray-300">
                                Adopt headless CMS architecture for a flexible, API-driven approach that seamlessly delivers content across platforms.
                            </p>
                        </div>

                        {/* Content Strategy & Optimization */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaFileAlt className="text-3xl text-green-400 mr-2" />
                                <h3 className="text-xl font-semibold text-green-400">Content Strategy</h3>
                            </div>
                            <p className="text-gray-300">
                                Develop targeted content strategies to maximize engagement and streamline your digital storytelling.
                            </p>
                        </div>

                        {/* Workflow Automation */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaDatabase className="text-3xl text-red-500 mr-2" />
                                <h3 className="text-xl font-semibold text-red-500">Workflow Automation</h3>
                            </div>
                            <p className="text-gray-300">
                                Optimize your operations with automated workflows that reduce manual tasks and speed up the publishing process.
                            </p>
                        </div>

                        {/* Security & Scalability */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaCogs className="text-3xl text-yellow-500 mr-2" />
                                <h3 className="text-xl font-semibold text-yellow-500">Security & Scalability</h3>
                            </div>
                            <p className="text-gray-300">
                                Ensure your CMS is secure and built to scale—ready to handle growing traffic and evolving business needs.
                            </p>
                        </div>

                        {/* Analytics & Reporting */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaDatabase className="text-3xl text-indigo-500 mr-2" />
                                <h3 className="text-xl font-semibold text-indigo-500">Analytics & Reporting</h3>
                            </div>
                            <p className="text-gray-300">
                                Gain insights into your content performance with robust analytics and reporting features.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gradient-to-r to-[#851212] from-[#68720d]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
                        Our CMS Implementation Process
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-green-500">1. Discovery & Planning</h3>
                            <p className="text-gray-300">
                                We assess your content needs, business goals, and technical environment to devise a bespoke CMS strategy.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-green-500">2. Design & Development</h3>
                            <p className="text-gray-300">
                                Our team designs an intuitive interface and develops a robust CMS solution that scales with your business.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-green-500">3. Integration & Training</h3>
                            <p className="text-gray-300">
                                We integrate your CMS with existing tools and provide comprehensive training to ensure a seamless transition.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-green-500">4. Launch & Ongoing Support</h3>
                            <p className="text-gray-300">
                                After deployment, we provide continuous support and optimization to keep your system secure and efficient.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio / Success Stories Section */}
            <section className="bg-gradient-to-r to-[#851212] from-[#68720d] py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Our CMS Success Stories
                    </h2>
                    <p className="text-gray-100 text-center max-w-2xl mx-auto mb-8">
                        See how our CMS solutions have helped businesses streamline content management and boost engagement.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className=" p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">Corporate Website Revamp</h3>
                            <p className="text-gray-300">
                                Redesigned and implemented a custom CMS to enhance content delivery and brand consistency.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">E-commerce Portal Optimization</h3>
                            <p className="text-gray-300">
                                Integrated advanced CMS features to streamline product management and improve user experience.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">Resource & Blog Hub</h3>
                            <p className="text-gray-300">
                                Developed a scalable CMS that supports high-volume publishing and seamless content updates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gradient-to-r to-[#781a1a] from-[#68720d] py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto ">
                        <div className="p-4 rounded-lg shadow bg-gradient-to-r to-[#851212] from-[#68720d]">
                            <h3 className="font-semibold text-lg text-green-400">
                                What CMS platforms do you work with?
                            </h3>
                            <p className="text-gray-300 mt-2 ">
                                Our expertise includes custom CMS development as well as integrations with popular platforms like WordPress, Drupal, and Contentful.
                            </p>
                        </div>
                        <div className="p-4 rounded-lg shadow bg-gradient-to-r to-[#851212] from-[#68720d]">
                            <h3 className="font-semibold text-lg text-green-400">
                                How long does a CMS implementation take?
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Timelines vary by project scope, but most implementations range from 4 to 12 weeks.
                            </p>
                        </div>
                        <div className=" p-4 rounded-lg shadow bg-gradient-to-r to-[#851212] from-[#68720d]">
                            <h3 className="font-semibold text-lg text-green-400">
                                Do you offer post-launch support?
                            </h3>
                            <p className="text-gray-300 mt-2">
                                Yes, we provide ongoing maintenance, optimization, and support to ensure your CMS remains secure and efficient.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r to-[#12853e] from-[#0c5f72] text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Content Management?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us today to discover how our CMS solutions can streamline your workflow and boost engagement.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-pink-400 text-white py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Cms;
