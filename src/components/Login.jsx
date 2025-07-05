import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md ">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Login
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
              placeholder="Username or Email"
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
              placeholder="Password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4  text-white rounded-lg bg-green-600 hover:bg-green-700 transition-colors"
        >
          Sign In
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-green-600">
        <a href="#" className="text-green-600 hover:underline">
          Forgot password?
        </a>
      </div>
      <div className="mt-4 text-center text-sm text-green-600">
        Don't have an account?{" "}
        <Link to="/auth/register" className="text-green-600 hover:underline">
          Register
        </Link>
      </div>
    </div>
  );
};
export default Login;
