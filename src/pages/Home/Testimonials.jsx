

const Testimonials = () => {
    return (
        <div>
            <section id="testimonials" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16">
  <div className="container mx-auto px-4 text-center">
    {/* Section Heading */}
    <h2 className="text-4xl font-extrabold mb-6 text-white bg-clip-text bg-gradient-to-r from-gold to-yellow-500">
      What Our Clients Say
    </h2>
    <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
      WorkNest is trusted by real estate leaders, homeowners, and investors alike. See what they have to say about their experience with us.
    </p>

    {/* Testimonial Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Testimonial 1 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-gold transform hover:-translate-y-2 transition duration-300">
        <img
          src="https://via.placeholder.com/80"
          alt="Client 1"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gold"
        />
        <h3 className="text-xl font-bold text-white mb-2">Sarah Thompson</h3>
        <p className="text-gray-400 mb-4 italic">
          "WorkNest is simply outstanding. They made the impossible happen, finding us the perfect property at the perfect price."
        </p>
        <span className="text-gold text-sm">Homebuyer</span>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-gold transform hover:-translate-y-2 transition duration-300">
        <img
          src="https://via.placeholder.com/80"
          alt="Client 2"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gold"
        />
        <h3 className="text-xl font-bold text-white mb-2">Mark Johnson</h3>
        <p className="text-gray-400 mb-4 italic">
          "The team at WorkNest is second to none. They guided us through every step of selling our property effortlessly."
        </p>
        <span className="text-gold text-sm">Property Seller</span>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-gold transform hover:-translate-y-2 transition duration-300">
        <img
          src="https://via.placeholder.com/80"
          alt="Client 3"
          className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-gold"
        />
        <h3 className="text-xl font-bold text-white mb-2">Jessica Lee</h3>
        <p className="text-gray-400 mb-4 italic">
          "WorkNest not only met our expectations but exceeded them in every way. I can't recommend them enough."
        </p>
        <span className="text-gold text-sm">Real Estate Investor</span>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Testimonials;