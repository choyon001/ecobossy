import { useContext, useState } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { updateProfile, updateEmail } from "firebase/auth";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { user } = useContext(Authcontext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update displayName and photoURL
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Update email (Firebase might require re-auth)
      if (user.email !== email) {
        await updateEmail(user, email);
      }

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br  px-4 font-source-serif">
      <form
        onSubmit={handleUpdate}
        className="p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-green-600">
          Update Profile
        </h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="url"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition duration-200"
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
