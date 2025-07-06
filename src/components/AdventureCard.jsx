import { useContext } from 'react';
import { FaLeaf, FaArrowRight } from 'react-icons/fa';
import { Authcontext } from '../provider/AuthProvider';
import { Link, useLocation } from 'react-router-dom';

const AdventureCard = ({ adventure }) => {
    const {user} = useContext(Authcontext);
    
  return (
    <div className=" bg-white rounded-lg overflow-hidden shadow-lg  flex flex-col h-full">
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
        
        
        <div className="mt-auto pt-4">
          <Link to={user?`/explore/${adventure.id}`:"/auth/login"} className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors" >
            Explore Now <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdventureCard;