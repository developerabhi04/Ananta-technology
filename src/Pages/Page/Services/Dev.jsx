import { FaMobileAlt, FaAndroid, FaApple, FaDesktop, FaReact } from "react-icons/fa";
import { SiSwift, SiKotlin } from "react-icons/si";
import { motion } from "framer-motion";


const Dev = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r to-[#3a195b] from-[#0e3468] text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <FaReact className="text-6xl mb-4 text-green-500" />
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="text-pink-600">Mobile App</span> &
                        <span className="text-green-600"> Web Design</span> &
                        <span className="text-blue-600"> Mobile App</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8">
                        Cutting-edge solutions that bring your digital vision to life.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-pink-700 text-green-300 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600 ">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
                        About Our Development Services
                    </h2>
                    <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
                        We specialize in crafting visually appealing, high-performance mobile applications and websites that deliver an exceptional user experience. Whether you need a robust mobile app built on React Native for both Android and iOS, or a responsive and engaging website, our team uses the latest technologies and design trends to exceed your expectations.
                    </p>
                </div>
            </section>

            {/* Technology Stack Section for Native Mobile Apps */}
            <section className="bg-white py-16 bg-gradient-to-r from-green-500 to-blue-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Our Native Mobile Technologies
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {/* React Native */}
                        <div className="flex flex-col items-center">
                            <FaReact className="text-5xl text-pink-400" />
                            <span className="mt-2 text-lg font-medium text-pink-700">React Native</span>
                        </div>
                        {/* Swift for iOS */}
                        <div className="flex flex-col items-center">
                            <SiSwift className="text-5xl text-orange-500" />
                            <span className="mt-2 text-lg font-medium text-orange-700">Swift</span>
                        </div>
                        {/* Kotlin for Android */}
                        <div className="flex flex-col items-center">
                            <SiKotlin className="text-5xl text-purple-500" />
                            <span className="mt-2 text-lg font-medium text-purple-600">Kotlin</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white py-16 bg-gradient-to-r from-green-500 to-blue-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
                        Our Development Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Mobile App Development */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-400">
                            <div className="flex items-center mb-4">
                                <FaMobileAlt className="text-3xl text-blue-500 mr-2" />
                                <h3 className="text-xl font-semibold text-blue-500">Mobile App Development</h3>
                            </div>
                            <p className="text-gray-300">
                                Leverage our expertise in React Native to build robust, scalable mobile apps that run smoothly on both Android and iOS platforms.
                            </p>
                        </div>
                        {/* Android App */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaAndroid className="text-3xl text-green-500 mr-2" />
                                <h3 className="text-xl font-semibold text-green-500">Android Applications</h3>
                            </div>
                            <p className="text-gray-300">
                                Create a native-like experience on Android devices with our performance-optimized apps crafted using the latest frameworks.
                            </p>
                        </div>
                        {/* iOS App Development */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaApple className="text-3xl text-gray-800 mr-2" />
                                <h3 className="text-xl font-semibold ">iOS Applications</h3>
                            </div>
                            <p className="text-gray-300">
                                Deliver sophisticated and smooth iOS apps that combine stunning design with high performance to captivate your audience.
                            </p>
                        </div>
                        {/* Web Design */}
                        <div className=" p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaDesktop className="text-3xl text-purple-500 mr-2" />
                                <h3 className="text-xl font-semibold text-purple-500">Web Design</h3>
                            </div>
                            <p className="text-gray-300">
                                Our creative web design solutions merge aesthetics with functionality to ensure your website is visually engaging and user-friendly.
                            </p>
                        </div>
                        {/* Web Development */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaReact className="text-3xl text-blue-400 mr-2" />
                                <h3 className="text-xl font-semibold text-blue-400">Web Development</h3>
                            </div>
                            <p className="text-gray-300">
                                Build dynamic, responsive websites utilizing modern frameworks and best practices to deliver secure and scalable web applications.
                            </p>
                        </div>
                        {/* UI/UX Design */}
                        <div className="p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaDesktop className="text-3xl text-red-400 mr-2" />
                                <h3 className="text-xl font-semibold text-red-400">UI/UX Design</h3>
                            </div>
                            <p className="text-gray-300">
                                Our professional UI/UX design services focus on creating intuitive interfaces and seamless user experiences that keep your customers engaged.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50 bg-gradient-to-r from-green-500 to-blue-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
                        Our Development Process
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-pink-500">1. Consultation & Analysis</h3>
                            <p className="text-gray-300">
                                We start by understanding your business goals and technical requirements to craft a tailored strategy.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-pink-500">2. Design & Prototyping</h3>
                            <p className="text-gray-300">
                                Our design team creates interactive prototypes and wireframes to visualize the final product and user journey.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-pink-500">3. Development & Testing</h3>
                            <p className="text-gray-300">
                                With agile methodologies, we develop your project using cutting-edge technologies and perform rigorous testing for quality assurance.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1 text-pink-500">4. Deployment & Support</h3>
                            <p className="text-gray-300">
                                After launch, we offer ongoing maintenance and support, ensuring your platform remains secure, updated, and optimized.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* Portfolio Section */}
            {/* <section className="bg-white position-relative  z-10 py-16 bg-gradient-to-r from-green-500 to-blue-600">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Recent Projects
                    </h2>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                        Explore a selection of our projects that showcase our expertise in mobile app and web development.
                    </p>
                    <Projects />
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="bg-gradient-to-r  from-pink-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let's Build Something Amazing Together
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us today to discuss your project, and see how we can turn your vision into reality.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-green-500 text-white py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Dev;
