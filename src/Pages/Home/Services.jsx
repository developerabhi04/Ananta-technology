const Services = () => {
  return (
    <section className="relative z-10 bg-gradient-to-r from-[#0c0120] to-[#241533] py-20 px-6 sm:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Our <span className="text-[#915EFF]">Services</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
          At Ananta Technologies, we offer a comprehensive range of IT services designed to accelerate your business growth, enhance operational efficiency, and deliver outstanding user experiences.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">🌐 Web Development</h3>
            <p className="text-sm text-gray-400">
              Robust, responsive, and scalable web applications developed using the latest technologies such as React, Vite, and Node.js, tailored to your business needs.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">📱 Mobile App Development</h3>
            <p className="text-sm text-gray-400">
              Cross-platform mobile solutions that provide seamless user experiences, ensuring high performance and scalability on both iOS and Android platforms.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">☁️ Cloud Solutions</h3>
            <p className="text-sm text-gray-400">
              Comprehensive cloud services including architecture, migration, and management to ensure your business stays agile, secure, and cost-effective.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">🔒 Cybersecurity Services</h3>
            <p className="text-sm text-gray-400">
              Advanced cybersecurity solutions designed to protect your business from evolving digital threats, ensuring data integrity and privacy.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">🧪 AI & Machine Learning</h3>
            <p className="text-sm text-gray-400">
              Leverage the power of AI and ML to automate processes, gain valuable insights, and make data-driven decisions that propel your business forward.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">📊 Data Analytics</h3>
            <p className="text-sm text-gray-400">
              Transform your data into actionable insights with our advanced analytics solutions, empowering smarter business strategies and growth.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">💡 Digital Marketing</h3>
            <p className="text-sm text-gray-400">
              End-to-end digital marketing services including SEO, PPC, content marketing, and social media strategies that enhance your brand's visibility and generate leads.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">🎨 UI/UX Design</h3>
            <p className="text-sm text-gray-400">
              Designing intuitive, user-friendly interfaces with a focus on user experience, ensuring seamless navigation and enhanced engagement.
            </p>
          </div>
          <div className="bg-slate-900 bg-opacity-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">🔗 Blockchain Solutions</h3>
            <p className="text-sm text-gray-400">
              Secure, transparent, and efficient blockchain development services, including smart contract creation, dApp development, and cryptocurrency integrations.
            </p>
          </div>
        </div>
        <div className="mt-16 bg-slate-800 rounded-lg p-10 text-center shadow-lg">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            Need a Custom Solution? Let’s Create Something Exceptional Together.
          </h3>
          <button className="mt-4 px-8 py-3 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;