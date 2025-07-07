
import { FaMountain, FaWater, FaLeaf, FaTree, FaBinoculars, FaMapMarkedAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Hero Section */}
            <div className="text-center mb-10 sm:mb-16">
                <h1 className="text-3xl sm:text-5xl font-bold text-green-800 mb-4 sm:mb-6">About EcoBossy</h1>
                <p className="text-base sm:text-xl text-gray-700 max-w-3xl mx-auto">
                    Connecting adventure seekers with sustainable travel experiences that respect nature and support local communities.
                </p>
            </div>

            {/* Mission Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
                <div className="order-1 md:order-none">
                    <img 
                        src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                        alt="Sustainable mountain trekking" 
                        className="rounded-xl shadow-lg w-full h-56 sm:h-72 md:h-80 object-cover"
                    />
                </div>
                <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-4 sm:mb-6">Our Adventure Ethos</h2>
                    <p className="text-gray-700 mb-3 sm:mb-4 text-base sm:text-lg">
                        At EcoAdventure, we believe the most rewarding adventures are those that leave no trace but create lasting memories. 
                        Since 2025, we've been curating exceptional eco-friendly adventure experiences that prioritize:
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg">
                        <li className="flex items-start">
                            <FaLeaf className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                            <span>Minimal environmental impact practices</span>
                        </li>
                        <li className="flex items-start">
                            <FaTree className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                            <span>Carbon-neutral adventure options</span>
                        </li>
                        <li className="flex items-start">
                            <FaBinoculars className="text-green-600 mt-1 mr-3 flex-shrink-0" />
                            <span>Authentic connections with local ecosystems</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Adventure Types */}
            <div className="mb-12 md:mb-20">
                <h2 className="text-2xl sm:text-3xl font-semibold text-green-700 mb-8 sm:mb-12 text-center">Our Eco-Adventure Categories</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <div className="border border-green-100 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
                        <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                            <FaMountain className="text-xl sm:text-2xl text-green-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium text-center mb-2 sm:mb-3">Mountain Treks</h3>
                        <p className="text-gray-600 text-center text-sm sm:text-base">
                            Sustainable hiking experiences with certified guides who practice Leave No Trace principles.
                        </p>
                    </div>
                    <div className="border border-green-100 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
                        <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                            <FaWater className="text-xl sm:text-2xl text-green-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium text-center mb-2 sm:mb-3">Ocean Dives</h3>
                        <p className="text-gray-600 text-center text-sm sm:text-base">
                            Coral-friendly diving adventures that support marine conservation efforts.
                        </p>
                    </div>
                    <div className="border border-green-100 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-shadow">
                        <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                            <FaMapMarkedAlt className="text-xl sm:text-2xl text-green-700" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-medium text-center mb-2 sm:mb-3">Wilderness Expeditions</h3>
                        <p className="text-gray-600 text-center text-sm sm:text-base">
                            Multi-day sustainable adventures with eco-conscious outfitters and local guides.
                        </p>
                    </div>
                </div>
            </div>

            

            
        </div>
    );
};

export default About;