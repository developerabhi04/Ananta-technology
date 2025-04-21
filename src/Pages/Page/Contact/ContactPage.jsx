import ParticleBg from '../../../Particles/ParticleBg';
import vid from "../../../assets/143016-781982529.mp4";
import { motion } from "framer-motion";
import { useState } from 'react';
import { Alert, Snackbar } from "@mui/material";
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Bottomline from "../../../Components/BottomLine/Bottomline";

export const ErrorText = styled.div`
  color: red;
  margin-top: 4px;
  text-align: left;
`;

const FormContainer = styled.div`
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  padding: 2rem;
`;

const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9+\-\s()]{10,20}$/;

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setErrors(errs => ({
      ...errs,
      [name]: !value.trim()
        ? 'Required'
        : name === 'email' && !emailRegex.test(value)
          ? 'Invalid email'
          : name === 'phone' && !phoneRegex.test(value)
            ? 'Invalid phone'
            : undefined
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const v = {};
    if (!form.name.trim()) v.name = 'Name required';
    if (!form.email.trim()) v.email = 'Email required';
    else if (!emailRegex.test(form.email)) v.email = 'Invalid email';
    if (!form.phone.trim()) v.phone = 'Phone required';
    else if (!phoneRegex.test(form.phone)) v.phone = 'Invalid phone';
    if (!form.message.trim()) v.message = 'Message required';

    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }

    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      { from_name: form.name, from_email: form.email, from_phone: form.phone, message: form.message },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setOpen(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const handleCloseSnack = (_, reason) => {
    if (reason !== 'clickaway') setOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#1a041f] to-[#05000a] py-36 flex flex-col items-center justify-start overflow-hidden">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full z-10 pointer-events-none">
        <video src={vid} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70" />
      </div>
      {/* Particle Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <ParticleBg />
      </div>

      {/* Get a Quote Section */}
      <section className="relative z-30 w-full max-w-4xl text-center px-4 mb-16">
        <motion.h2 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Get a <span className="text-[#915EFF]">Quote</span>
        </motion.h2>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="mx-auto w-24">
          <Bottomline />
        </motion.div>
        <p className="text-gray-300 text-lg mb-8">Tell us about your project and we'll provide a tailored estimate.</p>
        <FormContainer>
          <form onSubmit={handleSubmit} className="grid gap-6">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none" />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none" />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none" />
            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Project Details" className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none" />
            {errors.message && <ErrorText>{errors.message}</ErrorText>}
            <button type="submit" disabled={loading} className={`w-full py-3 rounded-full bg-gradient-to-r from-[#915EFF] to-purple-600 text-white font-bold ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'} transition`}>{loading ? 'Sending...' : 'Get Quote'}</button>
          </form>
        </FormContainer>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnack} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
          <Alert onClose={handleCloseSnack} severity="success" variant="filled">Thanks! We’ll be in touch shortly.</Alert>
        </Snackbar>
      </section>

      {/* Contact & Map Section */}
      <section className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 z-30 px-4">
        {/* Contact Us Form */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }} className="lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl text-white font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none" />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </div>
            <div>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none" />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>
            <div>
              <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none" />
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </div>
            <div>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Message" className="w-full p-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-[#915EFF] outline-none"></textarea>
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-full hover:opacity-90 transition" >{loading ? 'Please wait...' : 'Send Message'}</button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 1 }} className="lg:w-1/2">
          <iframe title="Our Location" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3978.3637492448365!2d77.07801599979969!3d28.573365951394283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRZB-214%20Old%20Meheauli%20road%2C%20Raj%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110045%2C%20India.!5e1!3m2!1sen!2sin!4v1743867267503!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-96 rounded-xl shadow-2xl"></iframe>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 mt-12 w-full max-w-6xl z-30 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-200"><a href="mailto:contact@example.com" className="hover:underline">contact@example.com</a></p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-200"><a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a></p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-6 shadow-lg text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-200">RZB-214 Old Meheauli Road, Raj Nagar, New Delhi, India</p>
          </motion.div>
        </div>
      </section>

      {/* Social & CTA */}
      <section className="py-16 w-full max-w-6xl z-30 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8">Connect With Us</h2>
        <div className="flex justify-center space-x-6 text-white text-2xl">
          {/* Add icon links here */}
        </div>
      </section>

      <section className="bg-white bg-opacity-20 backdrop-blur-md py-16 w-full z-30 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Have a project in mind? Let's build it together.</h2>
        <p className="text-lg md:text-xl text-white mb-8 text-center">We're eager to collaborate with you and turn your vision into reality.</p>
      </section>
    </div>
  );
};

export default ContactPage;
