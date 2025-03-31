import ParticleBg from '../../Particles/ParticleBg';
import vid from "../../assets/astronaut-huemor-chrome.webm";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <>
            {/* 🌌 Main Banner Section */}
            <div className="relative z-0 bg-gradient-to-r from-[#1a041f] to-[#05000a] h-screen flex justify-center items-center overflow-hidden">

                {/* 🎥 Background Video */}
                <div className="fixed inset-0 w-full h-screen z-10 overflow-hidden pointer-events-none">
                    <video
                        src={vid}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-70"
                        style={{ objectFit: 'cover' }}
                    />
                </div>

                {/* ✨ Starry Particles Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    <ParticleBg />
                </div>

                {/* 📝 Foreground Content */}
                <motion.div
                    className="text-center text-white z-30 pt-20 space-y-6 px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }} // Delay after Bottomline
                >

                
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        Welcome to <span className="text-[#915EFF]">Ananta</span> Technologies
                    </h1>

                    <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                            Empowering your business with cutting-edge solutions 🚀
                        </span>
                    </p>

                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        We provide innovative web and software solutions tailored for startups, SMBs, and enterprises. Our expert team leverages the latest technologies to drive digital transformation and business growth.
                    </p>

                    <div className="flex justify-center space-x-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white rounded-lg shadow-lg hover:opacity-90 transition-all duration-300">
                            Get Started
                        </button>
                        <button className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-slate-950 transition-all duration-300">
                            Learn More
                        </button>
                    </div>

                </motion.div>
            </div>
        </>
    );
};

export default Banner;
