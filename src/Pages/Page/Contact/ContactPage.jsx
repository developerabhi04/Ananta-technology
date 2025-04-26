// src/pages/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "../../Home/Quote";

const ContactPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#0f6ca5] to-[#640e9e] py-20 px-6 sm:px-16 text-white overflow-hidden">
      <ContactForm />

      {/* Map Section (now full width) */}
      <section className="w-full px-0 mt-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="w-full"
        >
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3978.3637492448365!2d77.07801599979969!3d28.573365951394283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRZB-214%20Old%20Meheauli%20road%2C%20Raj%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110045%2C%20India.!5e1!3m2!1sen!2sin!4v1743867267503!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-96 rounded-xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 mt-12 w-full max-w-6xl mx-auto z-30 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-200">
              <a href="mailto:contact@example.com" className="hover:underline">
                contact@example.com
              </a>
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-200">
              <a href="tel:+1234567890" className="hover:underline">
                +1 234 567 890
              </a>
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-200">
              RZB-214 Old Meheauli Road, Raj Nagar, New Delhi, India
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
