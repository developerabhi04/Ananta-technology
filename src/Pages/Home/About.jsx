
const About = () => {
    return (
        <section className="relative z-10 bg-gradient-to-r from-[#241533] to-[#0c0120] py-20 px-6 sm:px-16 text-white">
            <div className="max-w-7xl mx-auto text-center space-y-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    About <span className="text-[#915EFF]">Ananta</span> Technologies
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
                    At Ananta Technologies, we are dedicated to delivering cutting-edge IT solutions that empower businesses to thrive in a digital-first world. Our mission is to provide scalable, secure, and high-performance applications tailored to meet the unique needs of startups, SMBs, and enterprises.
                </p>
                <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                    With a proven track record in web development, mobile solutions, cloud integration, and cybersecurity, our expert team ensures that every project we undertake drives innovation, enhances productivity, and achieves measurable results.
                </p>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4">🎯 Our Mission</h3>
                        <p className="text-sm text-gray-400">
                            To harness the power of technology and provide solutions that enable businesses to achieve operational excellence, drive growth, and stay ahead in a competitive market.
                        </p>
                    </div>
                    <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4">💡 Our Vision</h3>
                        <p className="text-sm text-gray-400">
                            To be a globally recognized IT solutions provider, known for delivering innovative, reliable, and user-centric technology services that transform ideas into reality.
                        </p>
                    </div>
                    <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                        <h3 className="text-2xl font-semibold mb-4">🤝 Why Choose Us</h3>
                        <p className="text-sm text-gray-400">
                            We prioritize client satisfaction through continuous collaboration, transparent communication, and a results-driven approach. Our team of experts is committed to delivering solutions that align with your business objectives.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
