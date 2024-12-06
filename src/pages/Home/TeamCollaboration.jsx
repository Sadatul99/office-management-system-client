

const TeamCollaboration = () => {
    return (
        <div>
            <section id="team-collaboration" className=" py-16">
                <div className="container mx-auto px-4 text-center">
                    {/* Section Heading */}
                    <h2 className="text-4xl font-extrabold mb-6">
                        Team Collaboration
                    </h2>
                    <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                        Empowering your team with dynamic spaces designed for productivity and creativity. Discover the perfect synergy between functionality and aesthetics.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Feature 1 */}
                        <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-gold transform hover:-translate-y-2 transition duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">Collaborative Workspaces</h3>
                            <p className="text-gray-400">
                                Spaces designed to foster teamwork and innovation. Work together seamlessly with a touch of luxury.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-gold transform hover:-translate-y-2 transition duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">State-of-the-Art Technology</h3>
                            <p className="text-gray-400">
                                Equip your team with cutting-edge tools and seamless connectivity for unparalleled efficiency.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-gold transform hover:-translate-y-2 transition duration-300">
                            <h3 className="text-2xl font-bold text-white mb-4">Private Meeting Rooms</h3>
                            <p className="text-gray-400">
                                Exclusive spaces for strategic planning and high-stake discussions in a confidential setting.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default TeamCollaboration;