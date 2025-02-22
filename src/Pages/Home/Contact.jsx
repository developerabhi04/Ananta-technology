

const Contact = () => {
    return (
        <section className="relative z-10 bg-gradient-to-r from-gray-800 to-gray-900 py-20 px-6 sm:px-16 text-white">
            <div className="max-w-7xl mx-auto text-center space-y-10">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                    Get in <span className="text-[#915EFF]">Touch</span>
                </h2>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
                    Ready to take your business to the next level? Contact us today to discuss your project and how we can help you achieve your goals with cutting-edge technology solutions.
                </p>
                <div className="bg-slate-900 bg-opacity-60 p-10 rounded-xl shadow-lg max-w-4xl mx-auto" >
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white sm:col-span-2"
                        />
                        <input
                            type="number"
                            placeholder="Phone Number"
                            className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white sm:col-span-2"
                        />
                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="p-4 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-white sm:col-span-2"
                        ></textarea>
                        <button
                            type="submit"
                            className="sm:col-span-2 bg-gradient-to-r from-[#915EFF] to-purple-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                    {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                        <div>
                            <h3 className="text-xl font-semibold">📞 Phone</h3>
                            <p className="text-gray-400 mt-2">+1 234 567 890</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">📧 Email</h3>
                            <p className="text-gray-400 mt-2">info@anantatech.com</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">📍 Location</h3>
                            <p className="text-gray-400 mt-2">Silicon Valley, CA, USA</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default Contact;