
import { useContext, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Authcontext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const { resetPassword,loading,setLoading } = useContext(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    resetPassword(email)
      .then(() => {
        setEmailSent(true);
         toast.success("Password reset email sent. Please check your inbox.");
        setLoading(false);
      })
      .catch(() => {
         toast.error(error.message || "Failed to send reset email");
        setLoading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
        Reset Password
      </h2>

      {emailSent ? (
        <div className="text-center">
          <p className="mb-4 text-green-600">
            Password reset email sent to {email}. Please check your inbox.
          </p>
          <Link
            to="/auth/login"
            className="text-green-600 hover:underline font-medium"
          >
            Back to Login
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaEnvelope className="text-green-500" />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 text-white rounded-lg ${
              loading ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            } transition-colors`}
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="mt-4 text-center text-sm text-green-600">
            Remember your password?{" "}
            <Link
              to="/auth/login"
              className="text-green-600 font-medium hover:underline"
            >
              Login here
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;