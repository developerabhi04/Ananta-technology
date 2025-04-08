import { motion } from "framer-motion";
import {
    FaBullhorn,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

const Smo = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <FaBullhorn className="text-6xl mb-4" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Social Media Campaigns
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Amplify your brand’s voice with creative and data-driven social media strategies.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-pink-500 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get Started
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Why Choose Our Campaigns?
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                        Our strategic social media campaigns are designed to engage your audience, boost brand awareness, and drive conversions. By leveraging the latest trends, precise audience targeting, and creative content, we help you build a lasting online presence that converts followers into customers.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Social Media Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Facebook & Instagram Campaigns */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaFacebookF className="text-3xl text-blue-600 mr-2" />
                                <FaInstagram className="text-3xl text-pink-500 mr-2" />
                                <h3 className="text-xl font-semibold">Facebook & Instagram</h3>
                            </div>
                            <p className="text-gray-700">
                                Engage your audience with targeted campaigns on Facebook and Instagram that maximize reach and drive engagement.
                            </p>
                        </div>

                        {/* Twitter Campaigns */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaTwitter className="text-3xl text-blue-400 mr-2" />
                                <h3 className="text-xl font-semibold">Twitter Campaigns</h3>
                            </div>
                            <p className="text-gray-700">
                                Leverage real-time conversations and trending topics to boost your brand’s visibility on Twitter.
                            </p>
                        </div>

                        {/* LinkedIn Marketing */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaLinkedinIn className="text-3xl text-blue-700 mr-2" />
                                <h3 className="text-xl font-semibold">LinkedIn Marketing</h3>
                            </div>
                            <p className="text-gray-700">
                                Build professional credibility and network with a polished LinkedIn strategy, tailored for B2B engagement.
                            </p>
                        </div>

                        {/* Content Strategy & Creation */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaBullhorn className="text-3xl text-purple-500 mr-2" />
                                <h3 className="text-xl font-semibold">Content Strategy</h3>
                            </div>
                            <p className="text-gray-700">
                                Our expert team crafts compelling content strategies and creative posts that tell your brand’s story and resonate with your audience.
                            </p>
                        </div>

                        {/* Analytics & Optimization */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaBullhorn className="text-3xl text-green-500 mr-2" />
                                <h3 className="text-xl font-semibold">Analytics & Optimization</h3>
                            </div>
                            <p className="text-gray-700">
                                We continuously measure campaign performance and optimize every detail based on data insights to maximize ROI.
                            </p>
                        </div>

                        {/* Influencer Partnerships */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition duration-300">
                            <div className="flex items-center mb-4">
                                <FaBullhorn className="text-3xl text-orange-500 mr-2" />
                                <h3 className="text-xl font-semibold">Influencer Partnerships</h3>
                            </div>
                            <p className="text-gray-700">
                                Collaborate with trusted influencers to expand your reach and lend authenticity to your campaigns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Our Campaign Process
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">1. Research & Audience Analysis</h3>
                            <p className="text-gray-700">
                                We start by diving deep into market trends, audience behaviors, and competitor analysis to shape a strategy that drives engagement.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">2. Strategy & Content Planning</h3>
                            <p className="text-gray-700">
                                Our team creates a comprehensive plan that includes creative content, platform-specific strategies, and actionable advertising plans.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">3. Execution & Monitoring</h3>
                            <p className="text-gray-700">
                                We implement your campaign across relevant platforms while monitoring performance in real time to ensure optimal delivery.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">4. Review & Optimization</h3>
                            <p className="text-gray-700">
                                Through continuous analysis and feedback, we refine your campaigns, optimizing for superior performance and measurable results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies / Portfolio Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Success Stories
                    </h2>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                        Explore our case studies to see how our innovative social media campaigns have transformed brands and driven exceptional results.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Brand Engagement Uplift</h3>
                            <p className="text-gray-700">
                                A well-executed campaign that increased audience engagement by 55% in just three months.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Conversion Boost</h3>
                            <p className="text-gray-700">
                                Our targeted strategy for a retail brand resulted in a 40% increase in online conversions.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Influencer Success</h3>
                            <p className="text-gray-700">
                                Collaborating with industry influencers helped amplify reach and drive significant brand buzz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                How do you determine the right platforms for my campaign?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                We assess your target audience and industry trends to determine the best platforms for reaching your customers.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                Can you manage campaigns across multiple networks simultaneously?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Yes, our integrated approach allows us to run concurrent campaigns on Facebook, Twitter, Instagram, and LinkedIn seamlessly.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                What is the typical duration of a campaign?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                While campaign length varies based on objectives, most of our projects run between 1 to 3 months with ongoing evaluation and adjustment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Elevate Your Social Presence?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us today and let’s create a social media campaign that drives real results.
                    </p>
                    <a
                        href="/contact"
                        className="bg-white text-pink-500 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Smo;
