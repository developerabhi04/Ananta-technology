import { motion } from "framer-motion";
import { TbWriting } from "react-icons/tb";


const ContentWriting = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4 text-center py-24">
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <TbWriting className="text-6xl mb-4" />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Content Writing Services
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Engaging, SEO-friendly content to elevate your brand and drive traffic.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-white text-blue-500 py-3 px-6 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get a Quote
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Why Our Content Writing Stands Out
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                        Our team of expert writers crafts compelling narratives and engaging articles that resonate with your target audience. We blend creativity with robust SEO techniques to ensure your content not only informs but also drives measurable results.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Content Writing Solutions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Blog Posts & Articles</h3>
                            <p className="text-gray-700">
                                Fresh and informative content that builds authority and engages your readers.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Copywriting</h3>
                            <p className="text-gray-700">
                                Persuasive copywriting that transforms prospects into loyal customers.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">SEO Content</h3>
                            <p className="text-gray-700">
                                Keyword-rich content designed to boost your search engine rankings.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Technical Writing</h3>
                            <p className="text-gray-700">
                                Clear and concise documentation, manuals, and guides that simplify complex topics.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Product Descriptions</h3>
                            <p className="text-gray-700">
                                Compelling product descriptions that highlight key features and drive sales.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Social Media Content</h3>
                            <p className="text-gray-700">
                                Impactful posts designed to engage your audience and grow your social presence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Our Content Writing Process
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">1. Research & Strategy</h3>
                            <p className="text-gray-700">
                                We research your industry, analyze competitors, and identify your target audience to develop a custom content strategy.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">2. Content Creation</h3>
                            <p className="text-gray-700">
                                Our talented writers produce original, high-quality content that perfectly aligns with your brand voice.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">3. Review & Optimization</h3>
                            <p className="text-gray-700">
                                Rigorous editing and SEO optimization ensure that your content is error-free and search-engine friendly.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-1">4. Delivery & Revisions</h3>
                            <p className="text-gray-700">
                                We deliver the content promptly, and our flexible revision process guarantees your satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Our Portfolio
                    </h2>
                    <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8">
                        Take a look at some of our recent projects and see how our expertly crafted content has helped brands succeed.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Tech Blog Series</h3>
                            <p className="text-gray-700">
                                A series of insightful articles on the latest technology trends.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">E-commerce Copy</h3>
                            <p className="text-gray-700">
                                High-converting product descriptions and landing pages for an online store.
                            </p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-2">Social Media Campaign</h3>
                            <p className="text-gray-700">
                                Creative content crafted for boosting engagement and brand awareness.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Writer John Doe"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">John Doe</h3>
                            <p className="text-gray-700">Senior Content Strategist</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Writer Jane Smith"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Jane Smith</h3>
                            <p className="text-gray-700">Creative Copywriter</p>
                        </div>
                        <div className="text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Writer Mark Lee"
                                className="mx-auto rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Mark Lee</h3>
                            <p className="text-gray-700">SEO Specialist</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <p className="text-gray-700 italic">
                                The team delivered outstanding content that perfectly captured our brand's voice. Our traffic and engagement have significantly improved.
                            </p>
                            <p className="mt-4 font-semibold text-gray-900">- Alex Johnson, CEO, TechCorp</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <p className="text-gray-700 italic">
                                Their research-driven approach and creative storytelling have set them apart. I highly recommend their services.
                            </p>
                            <p className="mt-4 font-semibold text-gray-900">- Emily Davis, Marketing Director, ShopEase</p>
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
                                What is your turnaround time for content projects?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Our turnaround time typically ranges from 3-7 days, depending on the project scope.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                Do you offer revisions if I'm not satisfied with the content?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                Absolutely. We offer revisions as part of our commitment to ensuring your satisfaction.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="font-semibold text-lg">
                                How do you ensure the content is SEO-friendly?
                            </h3>
                            <p className="text-gray-700 mt-2">
                                We work closely with SEO experts to incorporate targeted keywords, meta tags, and on-page optimization strategies in every piece.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Ready to Elevate Your Content?
                    </h2>
                    <p className="text-lg md:text-xl mb-8">
                        Contact us today to kickstart your journey toward compelling, conversion-driven content.
                    </p>
                    <a
                        href="/contact-page"
                        className="bg-white text-blue-500 py-3 px-8 rounded-full font-semibold hover:bg-gray-100 transition"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ContentWriting;
