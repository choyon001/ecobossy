import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const ProfileSection = () => {
  const { user } = useContext(Authcontext);

  if (!user) return null;

  return (
    <div className="flex justify-center items-center py-8 px-4 min-h-screen font-source-serif">
      <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-lg shadow-md w-full max-w-md sm:max-w-xl bg-white">
        <div className="avatar">
          <div className="w-16 sm:w-20 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-2 overflow-hidden">
            <img 
              src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
              alt={user.displayName || "User"} 
              className="object-cover h-full"
            />
          </div>
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
            <span className="font-josefin-sans text-green-600">User:</span> {user.displayName || "Anonymous User"}
          </h2>
          <p className="text-lg text-gray-500"><span className="font-josefin-sans text-green-600">Email: </span>{user.email || "No email provided"}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;