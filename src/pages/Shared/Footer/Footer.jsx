

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-bold text-white mb-4">About WorkNest</h2>
                        <p className="text-sm">
                            WorkNest is your trusted partner in finding luxury real estate properties.
                            We bring you premium spaces to live, work, and thrive.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h2 className="text-lg font-bold text-white mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="#home" className="hover:text-white transition">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#properties" className="hover:text-white transition">Properties</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-lg font-bold text-white mb-4">Contact Us</h2>
                        <p className="text-sm mb-2">
                            <span className="font-medium">Address:</span> 123 Luxury Ave, Real Estate City
                        </p>
                        <p className="text-sm mb-2">
                            <span className="font-medium">Email:</span>{" "}
                            <a href="mailto:info@worknest.com" className="hover:text-white transition">
                                info@worknest.com
                            </a>
                        </p>
                        <p className="text-sm">
                            <span className="font-medium">Phone:</span>{" "}
                            <a href="tel:+1234567890" className="hover:text-white transition">
                                +123 456 7890
                            </a>
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} WorkNest. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;