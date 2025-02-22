import ParticleBg from '../../Particles/ParticleBg';
import vid from "../../assets/astronaut-huemor-safari.mp4";

const Banner = () => {
    return (
        <div className="relative z-0 bg-slate-950 h-screen flex justify-center items-center overflow-hidden">

            {/* 🎥 Background Video */}
            <video
                src={vid}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-15"
            />

            {/* ✨ Starry Particles Overlay */}
            <div className="absolute inset-0 z-20">
                <ParticleBg />
            </div>

            {/* 📝 Foreground Content */}
            <div className="text-center text-white z-30 pt-20 space-y-6 px-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
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
                {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="bg-slate-900 bg-opacity-50 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold">🌐 Web Development</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            High-performance web solutions crafted with React, Vite, and modern frameworks.
                        </p>
                    </div>
                    <div className="bg-slate-900 bg-opacity-50 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold">📱 Mobile Solutions</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Robust mobile applications delivering seamless user experiences across platforms.
                        </p>
                    </div>
                    <div className="bg-slate-900 bg-opacity-50 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold">☁️ Cloud Integration</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Scalable cloud solutions designed to optimize performance and reduce costs.
                        </p>
                    </div>
                    <div className="bg-slate-900 bg-opacity-50 p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-semibold">🔒 Cybersecurity</h3>
                        <p className="text-sm text-gray-400 mt-2">
                            Cutting-edge security practices to safeguard your digital assets and data.
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;
