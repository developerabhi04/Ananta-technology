
const Policy = () => {
    return (
        <section className="relative z-10  pt-36 bg-gradient-to-r from-[#241533] to-[#0c0120] py-20 px-6 sm:px-16 text-white" id="about">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-2">Refund & Cancellation Policy</h1>
                <p className="text-gray-600 text-sm">Effective Date: March 31, 2025</p>
            </header>

            {/* Section 1 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">1. Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                    At Ananta Technology, we value your satisfaction. This policy outlines the terms and conditions related to refunds and cancellations of our services and digital products.
                </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">2. Subscription Services</h2>
                <p className="text-gray-700 leading-relaxed">
                    Subscriptions can be canceled at any time. When canceled, you will continue to have access to the service until the end of your current billing period. We do not offer refunds for partially used subscription periods.
                </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">3. One-Time Purchases</h2>
                <p className="text-gray-700 leading-relaxed">
                    For one-time purchases such as custom software, templates, or digital downloads, all sales are final unless explicitly stated otherwise at the time of purchase.
                </p>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">4. Cancellation of Projects</h2>
                <p className="text-gray-700 leading-relaxed">
                    For service-based projects, cancellations must be requested in writing. If work has already commenced, partial refunds may be issued based on the scope of completed work at our discretion.
                </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">5. Processing of Refunds</h2>
                <p className="text-gray-700 leading-relaxed">
                    Approved refunds will be processed to your original payment method within 5–10 business days. Processing time may vary based on your bank or payment provider.
                </p>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                    For questions regarding this policy or to request a refund or cancellation, please email us at <a href="mailto:work.anantatechnologies@gmail.com" className="text-blue-600 underline">work.anantatechnologies@gmail.com</a>.
                </p>
            </section>

            {/* Footer */}
            <footer className="pt-10 border-t mt-12 text-sm text-gray-600">
                <p>This policy is subject to change without prior notice. Please review this page periodically for updates.</p>
            </footer>
        </section>
    );
};

export default Policy;
