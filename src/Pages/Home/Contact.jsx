import { motion } from "framer-motion";
import Bottomline from "../../Components/BottomLine/Bottomline";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import emailjs from '@emailjs/browser';
import styled from "styled-components";

export const ErrorText = styled.div`
  color: red;
  margin-top: 4px;
  text-align: justify;
  margin-left: 10px;
`;




const Contact = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    // Form state for controlled inputs
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Object to store validation errors
    const [errors, setErrors] = useState({});

    // Regular expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{10,20}$/;

    // onChange handlers with live validation
    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (!val) {
                newErrors.email = 'Email is required';
            } else if (!emailRegex.test(val)) {
                newErrors.email = 'Invalid email address';
            } else {
                delete newErrors.email;
            }
            return newErrors;
        });
    };

    const handleNameChange = (e) => {
        const val = e.target.value;
        setName(val);
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (!val) {
                newErrors.name = 'Name is required';
            } else if (val.length < 3) {
                newErrors.name = 'Name must be at least 3 characters';
            } else {
                delete newErrors.name;
            }
            return newErrors;
        });
    };

    const handlePhoneChange = (e) => {
        const val = e.target.value;
        setPhone(val);
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (!val) {
                newErrors.phone = 'Contact number is required';
            } else if (!phoneRegex.test(val)) {
                newErrors.phone = 'Invalid phone number';
            } else {
                delete newErrors.phone;
            }
            return newErrors;
        });
    };

    const handleMessageChange = (e) => {
        const val = e.target.value;
        setMessage(val);
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (!val) {
                newErrors.message = 'Message is required';
            } else if (val.length < 3) {
                newErrors.message = 'Message must be at least 5 characters';
            } else {
                delete newErrors.message;
            }
            return newErrors;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Re-run validation on submit to catch any untouched or invalid fields.
        let validationErrors = {};

        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            validationErrors.email = 'Invalid email address';
        }

        if (!name) {
            validationErrors.name = 'Name is required';
        } else if (name.length < 3) {
            validationErrors.name = 'Name must be at least 3 characters';
        }

        if (!phone) {
            validationErrors.phone = 'Contact number is required';
        } else if (!phoneRegex.test(phone)) {
            validationErrors.phone = 'Invalid phone number';
        }

        if (!message) {
            validationErrors.message = 'Message is required';
        } else if (message.length < 5) {
            validationErrors.message = 'Message must be at least 5 characters';
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        // EmailJS parameters
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        const templateParams = {
            from_email: email,
            from_name: name,
            from_phone: phone,
            message: message,
        };

        emailjs
            .send(serviceID, templateID, templateParams, publicID)
            .then((result) => {
                // console.log('', result.text);
                setOpen(true);
                // Clear the form fields after a successful send
                setEmail('');
                setName('');
                setPhone('');
                setMessage('');
                setErrors({});
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    return (
        <section className="relative z-10 bg-gradient-to-r from-[#0c0120] to-[#241533] py-20 px-6 sm:px-16 text-white">
            <div className="max-w-7xl mx-auto text-center space-y-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    Get in <span className="text-[#915EFF]">Touch</span>
                </h2>
                {/* 🎯 BottomLine shown immediately with animation */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="z-40"
                >
                    <Bottomline />
                </motion.div>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    Ready to take your business to the next level? Contact us today to discuss your project and how we can help you achieve your goals with cutting-edge technology solutions.
                </p>
                <div className="bg-slate-900 bg-opacity-60 p-10 rounded-xl shadow-lg max-w-4xl mx-auto" >
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                        {/* Name Field */}
                        <div className="flex flex-col">
                            <input
                                type="text"
                                placeholder="Name"
                                className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white"
                                name="from_name"
                                value={name}
                                onChange={handleNameChange}
                            />
                            {errors.name && <ErrorText>{errors.name}</ErrorText>}
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white"
                                name="from_email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            {errors.email && <ErrorText>{errors.email}</ErrorText>}
                        </div>

                        {/* Phone Field (spans 2 columns) */}
                        <div className="flex flex-col sm:col-span-2">
                            <input
                                type="number"
                                placeholder="Phone Number"
                                className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white"
                                name="from_phone"
                                value={phone}
                                onChange={handlePhoneChange}
                            />
                            {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
                        </div>

                        {/* Message Field (spans 2 columns) */}
                        <div className="flex flex-col sm:col-span-2">
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white"
                                name="message"
                                value={message}
                                onChange={handleMessageChange}
                            ></textarea>
                            {errors.message && <ErrorText>{errors.message}</ErrorText>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className={`sm:col-span-2 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg transition-all duration-300 ${loading ? 'opacity-60 cursor-not-allowed' : 'hover:opacity-90'
                                }`}
                        >
                            {loading ? 'Please wait...' : 'Send Message'}
                        </button>
                    </form>


                    <Snackbar
                        open={open}
                        autoHideDuration={9000}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        onClose={handleSnackbarClose}
                        PaperProps={{
                            sx: { zIndex: 1000 },
                        }}
                    >
                        <Alert
                            onClose={handleSnackbarClose}
                            severity="success"
                            variant="filled"
                            sx={{ width: '100%' }}
                        >
                            Thank you for submitting your request! We will contact you shortly
                        </Alert>

                    </Snackbar>
                </div>
            </div>
        </section>
    );
};

export default Contact;