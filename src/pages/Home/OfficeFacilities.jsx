
const OfficeFacilities = () => {
    return (
        <div>
            <section id="office-facilities" className=" py-16">
  <div className="container mx-auto px-4">
    {/* Section Heading */}
    <h2 className="text-4xl font-extrabold mb-6 text-center  bg-clip-text bg-gradient-to-r from-gold to-yellow-500">
      Office Facilities
    </h2>
    <p className="text-lg text-gray-900 text-center mb-12 max-w-3xl mx-auto">
      WorkNest provides top-notch facilities to ensure a premium work experience, blending comfort with productivity.
    </p>

    {/* Facilities */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* Facility 1 */}
      <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-gold transition duration-300">
        <div className="text-gold text-4xl mr-4">
          <i className="fas fa-coffee"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Cafeteria</h3>
          <p className="text-gray-400">Enjoy gourmet meals and snacks in a relaxing environment.</p>
        </div>
      </div>

      {/* Facility 2 */}
      <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-gold transition duration-300">
        <div className="text-gold text-4xl mr-4">
          <i className="fas fa-wifi"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">High-Speed Internet</h3>
          <p className="text-gray-400">Stay connected with reliable and fast Wi-Fi throughout the office.</p>
        </div>
      </div>

      {/* Facility 3 */}
      <div className="flex items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-gold transition duration-300">
        <div className="text-gold text-4xl mr-4">
          <i className="fas fa-dumbbell"></i>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">Fitness Center</h3>
          <p className="text-gray-400">Maintain a healthy lifestyle with our state-of-the-art gym facilities.</p>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default OfficeFacilities;