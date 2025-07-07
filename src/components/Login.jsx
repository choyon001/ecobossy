import { useContext, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
  const { signInUser, signInWithGoogle,resetPassword } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignInUser = (event) => {
  event.preventDefault();
  setLoading(true);
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;

  signInUser(email, password)
    .then(() => {
      toast.success("Login successful!", {
        autoClose: 2000,
        onClose: () => navigate(from, { replace: true })
      });
    })
    .catch((error) => {
      toast.error(error.message || "Login failed. Please try again.");
      setLoading(false);
    });
};

const handleGoogleSignIn = () => {
  setLoading(true);
  signInWithGoogle()
    .then(() => {
      toast.success("Google login successful!", {
        autoClose: 2000,
        onClose: () => navigate(from, { replace: true })
      });
    })
    .catch((error) => {
      toast.error(error.message || "Google login failed");
      setLoading(false);
    });
};

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        User Login
      </h2>

      <form onSubmit={handleSignInUser} className="space-y-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaUser className="text-green-500" />
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full pl-10 pr-3 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Email"
          />
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaLock className="text-green-500" />
          </span>
          <input
            type="password"
            name="password"
            required
            className="w-full pl-10 pr-3 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Password"
          />
        </div>

        <div className="text-right">
          <Link
            to="/auth/forgotPassword"
            className="text-sm text-green-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 px-4 text-white rounded-lg ${
            loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
          } transition-colors`}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-xl" />
          Sign up with Google
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-green-600">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          state={{ from: location.state?.from }}
          className="text-green-600 font-medium hover:underline"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Login;