import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Quote = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
            <div className="container mx-auto px-4 text-center py-52">
                {/* Main Headline */}
                <motion.h2
                    className="text-4xl sm:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Have a project in mind? Let's build it together.
                </motion.h2>

                {/* Supporting text */}
                <motion.p
                    className="text-xl sm:text-2xl mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    We’re here to turn your innovative ideas into reality. Whether you need a website, mobile app, or custom software solution, our expert team collaborates with you to create seamless, high-performance digital products. Let’s collaborate to bring your vision to life.
                </motion.p>

                {/* Button Group */}
                <div className="flex justify-center space-x-4">
                    <motion.a
                        onClick={() => navigate("/contact-page")}
                        className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}

                    >
                        Get a Quote
                    </motion.a>
                    <motion.a
                        onClick={() => navigate("/learn-more")}
                        className="inline-block border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Learn More
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Quote;
