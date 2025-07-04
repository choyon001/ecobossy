import { FaLeaf, FaMapMarkerAlt, FaClock, FaUsers, FaArrowRight } from 'react-icons/fa';
import 'animate.css';

const ExploreMore = ({ adventure }) => {
  return (
    <div className="animate__animated animate__fadeInUp bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={adventure.image} 
          alt={adventure.adventureTitle} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full mb-2">
          {adventure.categoryName}
        </span>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{adventure.adventureTitle}</h3>
        
        {/* Short Description */}
        <p className="text-gray-600 mb-4">{adventure.shortDescription}</p>
        
        {/* Eco Features */}
        <div className="mb-4">
          <div className="flex items-center text-green-600 mb-2">
            <FaLeaf className="mr-2" />
            <span className="font-medium">Eco-Friendly Features:</span>
          </div>
          <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600">
            {adventure.ecoFriendlyFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-1" />
            {adventure.location}
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" />
            {adventure.duration}
          </div>
          <div className="flex items-center">
            <FaUsers className="mr-1" />
            Max {adventure.maxGroupSize}
          </div>
        </div>
        
        {/* Price and Button */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-800">${adventure.adventureCost}</span>
            <span className="text-gray-500 text-sm ml-1">/person</span>
          </div>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Explore Now <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;