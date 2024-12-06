

const ContactUs = () => {
    return (
        <div>
            <section id="contact-us" className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold text-gray-800">
                            Get in Touch with Us
                        </h2>
                        <p className="text-lg text-gray-600 mt-4">
                            We’d love to hear from you. Whether you have questions or need assistance, feel free to reach out!
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Contact Info */}
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Details</h3>
                            <p className="text-gray-600 mb-4">
                                Feel free to use the contact details below to connect with us directly.
                            </p>

                            <div className="space-y-4">
                                {/* Address */}
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt text-gold text-xl mr-4"></i>
                                    <p className="text-gray-700">123 WorkNest Avenue, Suite 456, City, Country</p>
                                </div>
                                {/* Phone */}
                                <div className="flex items-center">
                                    <i className="fas fa-phone-alt text-gold text-xl mr-4"></i>
                                    <p className="text-gray-700">+123 456 7890</p>
                                </div>
                                {/* Email */}
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-gold text-xl mr-4"></i>
                                    <p className="text-gray-700">support@worknest.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                            <form className="space-y-6">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-gold focus:outline-none"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-gold focus:outline-none"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-gray-600 font-medium mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-gold focus:outline-none"
                                        placeholder="Write your message"
                                    ></textarea>
                                </div>
                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gold text-white py-2 px-4 rounded-lg font-bold hover:bg-yellow-600 transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ContactUs;