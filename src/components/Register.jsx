import { useContext, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaCamera } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { Authcontext } from "../provider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserInfo, signInWithGoogle } =
    useContext(Authcontext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    let isValid = true;
    let errorMessage = "";

    if (password.length < 6) {
      isValid = false;
      errorMessage = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      isValid = false;
      errorMessage = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      isValid = false;
      errorMessage = "Password must contain at least one lowercase letter.";
    }

    setPasswordError(errorMessage);
    return isValid;
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate("/");
        toast.success("Google authentication successful!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error("Google authentication error:", error.message);
        toast.error("Google authentication failed!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          className: "bg-red-500 text-white",
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const handleRegisterUser = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const fullName = form.get("fullName");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    if (password !== confirmPassword) {
      toast.warn("Passwords do not match!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        className: "bg-red-500 text-white",
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

    if (!validatePassword(password)) {
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserInfo({ displayName: fullName, photoURL: photoURL })
          .then(() => {
            navigate("/");
            toast.success("Registration successful!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          })
          .catch((error) => {
            console.error("Error updating user information:", error.message);
            toast.error("Failed to update user information!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              className: "bg-red-500 text-white",
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          });
      })
      .catch((error) => {
        console.error("Registration error:", error.message);
        toast.error(error.message || "Registration failed!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          className: "bg-red-500 text-white",
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  return (
    <div className="max-w-sm mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
        Register
      </h2>

      <form onSubmit={handleRegisterUser}>
        <div className="mb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaUser className="text-green-400" />
            </span>
            <input
              type="text"
              required
              autoComplete="off"
              name="fullName"
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
              name="email"
              required
              autoComplete="off"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Email Address"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaCamera className="text-green-400" />
            </span>
            <input
              type="url"
              name="photoURL"
              autoComplete="off"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Photo URL (optional)"
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
              name="password"
              required
              autoComplete="off"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Password"
              onChange={(e) => validatePassword(e.target.value)}
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-xs mt-1">{passwordError}</p>
          )}
        </div>

        <div className="mb-6">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <FaLock className="text-green-400" />
            </span>
            <input
              type="password"
              name="confirmPassword"
              required
              autoComplete="off"
              className="w-full pl-10 pr-3 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition mb-4"
        >
          Create Account
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-white text-gray-700 py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-xl" />
          Sign up with Google
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