import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Register
      </h2>

      <form>
        <div className="mb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-green-400" />
            </span>
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaEnvelope className="text-green-400" />
            </span>
            <input
              type="email"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email Address"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-green-400" />
            </span>
            <input
              type="password"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-green-400" />
            </span>
            <input
              type="password"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Create Account
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-green-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-600 hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
};
export default Register;
