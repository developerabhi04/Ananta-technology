import { useNavigate } from 'react-router-dom';
import ParticleBg from '../../../Particles/ParticleBg';
import vid from "../../../assets/143016-781982529.mp4";
import { motion } from "framer-motion";

// Be sure to include Font Awesome CSS in your project for social media icons to work (or replace with React Icons if preferred)

const ContactPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#1a041f] to-[#05000a] py-48 flex flex-col items-center justify-center overflow-hidden">

      {/* Background Video */}
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

      {/* Particle Background Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ParticleBg />
      </div>

      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-12 z-30"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold drop-shadow-lg">
          Get in Touch
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          We’d love to hear from you! Fill out the form or visit our office location.
        </p>
      </motion.div>

      {/* Main Content: Contact Form & Map */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row gap-12 z-30">
        {/* Contact Form with 3D Hover Effect */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ rotateX: 5, rotateY: 5 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="sm:w-1/2 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl p-8"
          style={{ perspective: "1000px" }}
        >
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white bg-opacity-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white bg-opacity-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-200 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white bg-opacity-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-200 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white bg-opacity-80 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="sm:w-1/2 z-30"
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3978.3637492448365!2d77.07801599979969!3d28.573365951394283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRZB-214%20Old%20Meheauli%20road%2C%20Raj%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110045%2C%20India.!5e1!3m2!1sen!2sin!4v1743867267503!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[600px] rounded-xl shadow-2xl"
          ></iframe>
        </motion.div>
      </div>

      {/* Additional Contact Information: 3D Interactive Cards */}
      <section className="py-16 mt-12 w-full max-w-6xl z-30">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
            style={{ perspective: "1000px" }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-200">
              <a href="mailto:contact@example.com" className="hover:underline">
                contact@example.com
              </a>
            </p>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
            style={{ perspective: "1000px" }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-200">
              <a href="tel:+1234567890" className="hover:underline">
                +1 234 567 890
              </a>
            </p>
          </motion.div>

          {/* Address Card */}
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: 5 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
            style={{ perspective: "1000px" }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-200">
              RZB-214 Old Meheauli Road, Raj Nagar, New Delhi, India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-16 w-full z-30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Connect With Us
          </h2>
         
        </div>
      </section>

      {/* Final Call-to-Action Section */}
      

      {/* Additional 3D Call-to-Action Section */}
      <section className="bg-white bg-opacity-20 backdrop-blur-md  py-16 z-30">
      
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Have a project in mind? Let's build it together.
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            We're eager to collaborate with you and turn your vision into reality. Whether you're a startup or an enterprise, our team is ready to deliver cutting-edge solutions.
          </motion.p>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
