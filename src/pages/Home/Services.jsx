

const Services = () => {
    return (
        <div>
            <section id="services" className="bg-gray-100 py-16">
                <div className="container mx-auto px-4 text-center">
                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Our Premium Services
                    </h2>
                    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
                        At WorkNest, we provide top-notch services tailored to meet all your real estate needs, ensuring a seamless and premium experience.
                    </p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                            <div className="flex justify-center items-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-blue-600"
                                >
                                    <path d="M..." /> {/* Add relevant SVG paths */}
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Luxury Property Listings
                            </h3>
                            <p className="text-gray-600">
                                Explore a curated selection of premium real estate properties that redefine elegance and comfort.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                            <div className="flex justify-center items-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-blue-600"
                                >
                                    <path d="M..." /> {/* Add relevant SVG paths */}
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Personalized Consulting
                            </h3>
                            <p className="text-gray-600">
                                Get expert advice tailored to your requirements for buying, selling, or renting properties.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
                            <div className="flex justify-center items-center mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="h-12 w-12 text-blue-600"
                                >
                                    <path d="M..." /> {/* Add relevant SVG paths */}
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Virtual Tours & Inspections
                            </h3>
                            <p className="text-gray-600">
                                Experience properties virtually from the comfort of your home with our state-of-the-art virtual tours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;