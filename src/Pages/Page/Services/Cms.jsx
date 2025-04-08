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
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <FaCogs className="text-6xl mb-4" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Content Management System
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Streamline your content workflow with our robust, scalable CMS solutions.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-white text-indigo-600 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        About Our CMS Solutions
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our CMS solutions are designed to empower businesses with efficient content creation, management, and delivery. We tailor platforms to fit your unique needs—ensuring an intuitive user interface, seamless integration, and robust performance that scales as your business grows.
                    </p>
                </div>
            </section>

            {/* Solutions Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our CMS Capabilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Custom CMS Development */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaEdit className="text-3xl text-blue-500 mr-2" />
                                <h3 className="text-xl font-semibold">Custom CMS Development</h3>
                            </div>
                            <p className="text-gray-700">
                                Build a tailored CMS platform that fits your workflow, empowering your team with intuitive tools for content management.
                            </p>
                        </div>

                        {/* Headless CMS Integration */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaWordpress className="text-3xl text-purple-500 mr-2" />
                                <h3 className="text-xl font-semibold">Headless CMS Integration</h3>
                            </div>
                            <p className="text-gray-700">
                                Adopt headless CMS architecture for a flexible, API-driven approach that seamlessly delivers content across platforms.
                            </p>
                        </div>

                        {/* Content Strategy & Optimization */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaFileAlt className="text-3xl text-green-500 mr-2" />
                                <h3 className="text-xl font-semibold">Content Strategy</h3>
                            </div>
                            <p className="text-gray-700">
                                Develop targeted content strategies to maximize engagement and streamline your digital storytelling.
                            </p>
                        </div>

                        {/* Workflow Automation */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaDatabase className="text-3xl text-red-500 mr-2" />
                                <h3 className="text-xl font-semibold">Workflow Automation</h3>
                            </div>
                            <p className="text-gray-700">
                                Optimize your operations with automated workflows that reduce manual tasks and speed up the publishing process.
                            </p>
                        </div>

                        {/* Security & Scalability */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaCogs className="text-3xl text-yellow-500 mr-2" />
                                <h3 className="text-xl font-semibold">Security & Scalability</h3>
                            </div>
                            <p className="text-gray-700">
                                Ensure your CMS is secure and built to scale—ready to handle growing traffic and evolving business needs.
                            </p>
                        </div>

                        {/* Analytics & Reporting */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaDatabase className="text-3xl text-indigo-500 mr-2" />
                                <h3 className="text-xl font-semibold">Analytics & Reporting</h3>
                            </div>
                            <p className="text-gray-700">
                                Gain insights into your content performance with robust analytics and reporting features.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Our CMS Implementation Process
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">1. Discovery & Planning</h3>
                            <p className="text-gray-700">
                                We assess your content needs, business goals, and technical environment to devise a bespoke CMS strategy.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">2. Design & Development</h3>
                            <p className="text-gray-700">
                                Our team designs an intuitive interface and develops a robust CMS solution that scales with your business.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">3. Integration & Training</h3>
                            <p className="text-gray-700">
                                We integrate your CMS with existing tools and provide comprehensive training to ensure a seamless transition.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">4. Launch & Ongoing Support</h3>
                            <p className="text-gray-700">
                                After deployment, we provide continuous support and optimization to keep your system secure and efficient.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio / Success Stories Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our CMS Success Stories
                    </h2>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                        See how our CMS solutions have helped businesses streamline content management and boost engagement.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Corporate Website Revamp</h3>
                            <p className="text-gray-700">
                                Redesigned and implemented a custom CMS to enhance content delivery and brand consistency.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">E-commerce Portal Optimization</h3>
                            <p className="text-gray-700">
                                Integrated advanced CMS features to streamline product management and improve user experience.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Resource & Blog Hub</h3>
                            <p className="text-gray-700">
                                Developed a scalable CMS that supports high-volume publishing and seamless content updates.
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
                                What CMS platforms do you work with?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Our expertise includes custom CMS development as well as integrations with popular platforms like WordPress, Drupal, and Contentful.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                How long does a CMS implementation take?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Timelines vary by project scope, but most implementations range from 4 to 12 weeks.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                Do you offer post-launch support?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Yes, we provide ongoing maintenance, optimization, and support to ensure your CMS remains secure and efficient.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Content Management?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us today to discover how our CMS solutions can streamline your workflow and boost engagement.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-white text-indigo-600 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Cms;
