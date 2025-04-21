
import { motion } from "framer-motion";
import {
    FaShoppingCart,
    FaChartLine,
    FaBullseye,
    FaCogs,
    FaMobileAlt
} from "react-icons/fa";

const EcomStrategy = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468]  text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <FaShoppingCart className="text-6xl mb-4 text-orange-500" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        E-commerce Strategy Projects
                    </h1>

                    <p className="text-xl md:text-2xl mb-8">
                        Transforming your online business with data-driven strategies and innovative solutions.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-pink-500 text-gray-300 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get a Consultation
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-600 to-purple-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-100">
                        About Our E-commerce Strategy
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                        We specialize in driving online business growth by leveraging robust market research, data analytics,
                        and innovative technology integration. Our custom e-commerce strategies deliver a seamless customer experience,
                        boost conversion rates, and optimize your return on investment.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-600 to-purple-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
                        Our E-commerce Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Market Analysis */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaChartLine className="text-3xl text-green-500 mr-2" />
                                <h3 className="text-xl font-semibold text-green-400">Market Analysis</h3>
                            </div>
                            <p className="text-gray-200">
                                In-depth research on market trends, customer behavior, and competitor insights to position your business effectively.
                            </p>
                        </div>
                        {/* Targeted Strategy */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaBullseye className="text-3xl text-red-500 mr-2" />
                                <h3 className="text-xl font-semibold text-red-400">Targeted Strategy</h3>
                            </div>
                            <p className="text-gray-200">
                                Customized approaches designed to capture and convert your target audience through tailored marketing strategies.
                            </p>
                        </div>
                        {/* Technology Integration */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaCogs className="text-3xl text-blue-500 mr-2" />
                                <h3 className="text-xl font-semibold text-blue-400">Technology Integration</h3>
                            </div>
                            <p className="text-gray-200">
                                Seamless incorporation of the latest e-commerce tools, payment systems, and inventory management software.
                            </p>
                        </div>
                        {/* Mobile Optimization */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaMobileAlt className="text-3xl text-pink-600 mr-2" />
                                <h3 className="text-xl font-semibold text-pink-400">Mobile Optimization</h3>
                            </div>
                            <p className="text-gray-100">
                                Enhancing your online store’s mobile experience to engage users across all devices and platforms.
                            </p>
                        </div>
                        {/* Conversion Optimization */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaShoppingCart className="text-3xl text-yellow-500 mr-2" />
                                <h3 className="text-xl font-semibold text-yellow-500">Conversion Optimization</h3>
                            </div>
                            <p className="text-gray-100">
                                Proven techniques, including A/B testing and UX improvements, to maximize your conversion rates and sales.
                            </p>
                        </div>
                        {/* Performance Analytics */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaChartLine className="text-3xl text-blue-500 mr-2" />
                                <h3 className="text-xl font-semibold text-blue-500">Performance Analytics</h3>
                            </div>
                            <p className="text-gray-100">
                                Ongoing monitoring and reporting to refine strategies based on real-time data and customer feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gradient-to-r from-yellow-600 to-purple-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-100">
                        Our Strategic Process
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-green-400">1. Discovery & Research</h3>
                            <p className="text-gray-300">
                                We analyze your market, competitors, and customer segments to craft a bespoke strategy that drives engagement.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-red-400">2. Strategy Development</h3>
                            <p className="text-gray-300">
                                Our experts develop an integrated strategy tailored to your business goals, ensuring alignment with your brand identity.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-blue-400">3. Implementation & Integration</h3>
                            <p className="text-gray-300">
                                We seamlessly implement your strategy with the latest technologies and best practices for e-commerce success.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-orange-400">4. Monitoring & Optimization</h3>
                            <p className="text-gray-300">
                                Through continuous analysis and feedback, we fine-tune your strategy to maximize performance and revenue growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies / Portfolio Section */}
            <section className="bg-gradient-to-r from-yellow-600 to-purple-600 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100">
                        Case Studies
                    </h2>
                    <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
                        Explore our recent success stories and see how our e-commerce strategies have transformed businesses.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-green-400">Retail Platform Revamp</h3>
                            <p className="text-gray-300">
                                Redesigned and optimized an online retail store, resulting in a 35% increase in revenue.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-pink-400">Digital Marketplace Optimization</h3>
                            <p className="text-gray-300">
                                Leveraged data analytics and conversion strategies for a marketplace, boosting user engagement by 40%.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2 text-orange-400">Luxury Fashion E-store</h3>
                            <p className="text-gray-300">
                                Developed a comprehensive strategy to elevate an e-store's online presence, driving significant brand growth.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team/Experts Section */}
            {/* <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our E-commerce Experts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Expert John Doe"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-700">E-commerce Strategist</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Expert Jane Smith"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-700">Digital Marketing Specialist</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Expert Mike Johnson"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Mike Johnson</h3>
                            <p className="text-gray-700">Conversion Optimization Expert</p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* FAQ Section */}
            <section className="bg-gradient-to-r from-yellow-600 to-purple-600 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg text-[#3d0179]">How long does it take to implement an e-commerce strategy?</h3>
                            <p className="text-gray-200 mt-2">
                                Our projects typically range from 4 to 12 weeks, depending on the complexity and requirements.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg text-[#3d0179]">What is the cost of an e-commerce strategy project?</h3>
                            <p className="text-gray-200 mt-2">
                                We offer customized solutions that align with your business goals and budget. Contact us for a personalized quote.
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg text-[#3d0179]">Do you provide ongoing support after the project?</h3>
                            <p className="text-gray-200 mt-2">
                                Yes, we offer continuous optimization and support services to ensure sustained growth and success.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Transform Your Online Business?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us today to get started on a tailored e-commerce strategy that drives results.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-white text-indigo-500 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
};

export default EcomStrategy;
