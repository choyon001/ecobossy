import { 
  FaLeaf, 
  
  FaMapMarkerAlt, 
  FaClock, 
  FaSignal, 
  FaUsers, 
  FaCheckCircle, 
  FaExclamationTriangle 
} from 'react-icons/fa';
import 'animate.css';
import { useLoaderData, useLocation } from 'react-router-dom';

const ExploreMore = () => {
  const data = useLoaderData();
  const location = useLocation().pathname;
  const adventure = data.find(adventure => adventure.id === parseInt(location.split('/explore/')[1]));
  console.log("Adventure in ExploreMore:", adventure);
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col h-full w-11/12 md:w-8/12 mx-auto my-10 mb-10">
  {/* Image */}
  <div className="h-48 overflow-hidden">
    <img 
      src={adventure.image} 
      alt={adventure.adventureTitle} 
      className="w-full h-full object-cover"
    />
  </div>
  
  {/* Content */}
  <div className="p-6 flex flex-col flex-grow">
    {/* Category */}
    <span className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full mb-2">
      {adventure.categoryName}
    </span>
    
    {/* Title */}
    <h3 className="text-xl font-bold text-gray-800 mb-2">{adventure.adventureTitle}</h3>
    
    {/* Short Description */}
    <p className="text-gray-600 mb-4 text-wrap">{adventure.shortDescription}</p>
    
    {/* Key Details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div className="flex items-center">
        <FaMapMarkerAlt className="text-green-600 mr-2" />
        <span className="text-sm text-gray-700">{adventure.location}</span>
      </div>
      <div className="flex items-center">
        <FaClock className="text-green-600 mr-2" />
        <span className="text-sm text-gray-700">{adventure.duration}</span>
      </div>
      <div className="flex items-center">
        <FaSignal className="text-green-600 mr-2" />
        <span className="text-sm text-gray-700">{adventure.adventureLevel}</span>
      </div>
      <div className="flex items-center">
        <FaUsers className="text-green-600 mr-2" />
        <span className="text-sm text-gray-700">Max {adventure.maxGroupSize} people</span>
      </div>
    </div>
    
    {/* Price & Availability */}
    <div className="flex justify-between items-center mb-4 gap-2">
      <span className="text-lg font-bold text-green-700">
        ${adventure.adventureCost.toLocaleString()}
      </span>
      <span className={`px-2 py-1 text-xs rounded-full ${adventure.bookingAvailability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
        {adventure.bookingAvailability ? 'Available' : 'Sold Out'}
      </span>
    </div>
    
    {/* Included Items */}
    <div className="mb-4">
      <div className="flex items-center text-green-600 mb-2">
        <FaCheckCircle className="mr-2" />
        <span className="font-medium">What's Included:</span>
      </div>
      <ul className="grid grid-cols-1 gap-1 text-sm text-gray-600">
        {adventure.includedItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Eco Features */}
    <div className="mb-4">
      <div className="flex items-center text-green-600 mb-2">
        <FaLeaf className="mr-2" />
        <span className="font-medium">Eco-Friendly Features:</span>
      </div>
      <ul className="grid grid-cols-1 gap-1 text-sm text-gray-600">
        {adventure.ecoFriendlyFeatures.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    
    {/* Special Instructions */}
    {adventure.specialInstructions && adventure.specialInstructions.length > 0 && (
      <div className="mb-4">
        <div className="flex items-center text-yellow-600 mb-2">
          <FaExclamationTriangle className="mr-2" />
          <span className="font-medium">Important Notes:</span>
        </div>
        <ul className="text-sm text-gray-600">
          {adventure.specialInstructions.map((note, index) => (
            <li key={index} className="flex items-start mb-1">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2 mt-1.5"></span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    )}
    
    {/* CTA Button */}
    <div className="mt-auto pt-4">
      
    </div>
  </div>
</div>
  );
};

export default ExploreMore;