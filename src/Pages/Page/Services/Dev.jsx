import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaMobileAlt,
  FaAndroid,
  FaApple,
  FaDesktop,
  FaLaptopCode,
  FaDraftingCompass
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dev = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0e3468] to-[#3a195b] text-white py-20">
        <div className="container mx-auto px-4 text-center py-24">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaReact className="text-6xl mb-4 text-green-600" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-pink-600">No-Code Mobile App</span> &amp; <span className="text-green-600">Web Development</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Cutting‑edge solutions that bring your digital vision to life.
          </p>
          <button
            onClick={() => navigate("/contact-page")}
            className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Our Development Services
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            We specialize in crafting visually appealing, high‑performance mobile
            applications and websites that deliver an exceptional user experience.
            Whether you need a robust mobile app built on React Native for both
            Android and iOS, or a responsive and engaging website, our team uses
            the latest technologies and design trends to exceed your expectations.
          </p>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: <FaReact />, label: "React Native" },
              { icon: <FaApple />, label: "Swift (iOS)" },
              { icon: <FaAndroid />, label: "Kotlin (Android)" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex flex-col items-center">
                {React.cloneElement(icon, {
                  className: "text-5xl text-green-600",
                })}
                <span className="mt-2 text-lg font-medium text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* No-Code App Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            No-Code App &amp; Web Development
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Build and deploy applications and websites with no-code tools,
            achieving rapid time-to-market and reducing development complexity.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              {
                icon: <FaDraftingCompass />, 
                label: "Visual Development",
                desc: "Drag-and-drop interfaces to create apps and sites without code.",
              },
              {
                icon: <FaLaptopCode />, 
                label: "Custom Logic",
                desc: "Implement workflows and automations visually.",
              },
              {
                icon: <FaMobileAlt />, 
                label: "Cross-Platform",
                desc: "One solution for web, iOS, and Android using no-code builders.",
              },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="flex flex-col items-center max-w-xs">
                {React.cloneElement(icon, {
                  className: "text-5xl text-green-600 mb-2",
                })}
                <h3 className="text-xl font-semibold mb-2">{label}</h3>
                <p className="text-gray-200 text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Development Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ // existing services array ]
              {
                icon: <FaMobileAlt />,
                title: "Mobile App Development",
                desc: "Leverage our expertise in React Native to build robust, scalable mobile apps that run smoothly on both Android and iOS platforms.",
              },
              {
                icon: <FaAndroid />,
                title: "Android Applications",
                desc: "Create a native‑like experience on Android devices with our performance‑optimized apps crafted using the latest frameworks.",
              },
              {
                icon: <FaApple />,
                title: "iOS Applications",
                desc: "Deliver sophisticated and smooth iOS apps that combine stunning design with high performance to captivate your audience.",
              },
              {
                icon: <FaDesktop />,
                title: "Web Design",
                desc: "Our creative web design solutions merge aesthetics with functionality to ensure your website is visually engaging and user‑friendly.",
              },
              {
                icon: <FaReact />,
                title: "Web Development",
                desc: "Build dynamic, responsive websites utilizing modern frameworks and best practices to deliver secure and scalable web applications.",
              },
              {
                icon: <FaDesktop />,
                title: "UI/UX Design",
                desc: "Our professional UI/UX design services focus on creating intuitive interfaces and seamless user experiences that keep your customers engaged",
              }
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-900 bg-opacity-50 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center mb-4">
                  {React.cloneElement(icon, {
                    className: "text-3xl text-green-600 mr-2",
                  })}
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
                <p className="text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Development Process
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: "1. Consultation & Analysis",
                desc: "We start by understanding your business goals and technical requirements to craft a tailored strategy.",
              },
              {
                step: "2. Design & Prototyping",
                desc: "Our design team creates interactive prototypes and wireframes to visualize the final product and user journey.",
              },
              {
                step: "3. Development & Testing",
                desc: "With agile methodologies, we develop your project using cutting‑edge technologies and perform rigorous testing for quality assurance.",
              },
              {
                step: "4. Deployment & Support",
                desc: "After launch, we offer ongoing maintenance and support, ensuring your platform remains secure, updated, and optimized.",
              },
            ].map(({ step, desc }) => (
              <div key={step}>
                <h3 className="text-xl font-semibold mb-1 text-gray-200">
                  {step}
                </h3>
                <p className="text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call‑to‑Action Section */}
      <section className="bg-gradient-to-r from-[#38B6FF] to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{`Let's`} Build Something Amazing Together</h2>
          <p className="text-lg md:text-xl mb-8">
            Contact us today to discuss your project, and see how we can turn your vision into reality.
          </p>
          <button
            onClick={() => navigate("/contact-page")}
            className="text-gray-100 py-3 px-6 rounded-full font-semibold bg-gradient-to-r from-[#915EFF] to-purple-600 transition"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Dev;
