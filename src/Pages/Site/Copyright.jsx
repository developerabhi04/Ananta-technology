
const Copyright = () => {
    return (
        <div className="bg-white text-gray-800 px-6 py-24 lg:px-20 max-w-5xl mx-auto">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-4xl font-bold mb-2">Copyright Policy</h1>
                <p className="text-gray-600 text-sm">Effective Date: March 31, 2025</p>
            </header>

            {/* Section 1 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">1. Ownership of Content</h2>
                <p className="text-gray-700 leading-relaxed">
                    All content, including but not limited to text, images, code, designs, software, and graphics, made available on Ananta Technology website and platforms is the intellectual property of Ananta Technology or its licensors, and is protected by applicable copyright laws.
                </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">2. Use of Materials</h2>
                <p className="text-gray-700 leading-relaxed">
                    You may not copy, reproduce, distribute, transmit, display, or create derivative works from any content on our site without prior written consent from Ananta Technology, except where explicitly permitted (e.g., for personal, non-commercial use).
                </p>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">3. Reporting Copyright Infringement</h2>
                <p className="text-gray-700 leading-relaxed">
                    If you believe that your copyrighted work has been used in a way that constitutes copyright infringement, please contact us at <a href="mailto:work.anantatechnologies@gmail.com" className="text-blue-600 underline">work.anantatechnologies@gmail.com</a> with the following information:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                    <li>Your name and contact information</li>
                    <li>Description of the copyrighted work</li>
                    <li>URL or location of the infringing content</li>
                    <li>A statement that you believe the use is unauthorized</li>
                    <li>Your electronic or physical signature</li>
                </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">4. Response and Removal</h2>
                <p className="text-gray-700 leading-relaxed">
                    Upon receiving a valid copyright notice, we will promptly investigate and may remove or restrict access to the infringing material. We reserve the right to terminate accounts of repeat infringers.
                </p>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold mb-3">5. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                    We may update this Copyright Policy from time to time. All changes will be posted on this page with an updated effective date.
                </p>
            </section>

            {/* Footer */}
            <footer className="pt-10 border-t mt-12 text-sm text-gray-600">
                <p>&copy; {new Date().getFullYear()} Ananta Technology. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Copyright;
