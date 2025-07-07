import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { db } from "../firebase/firebase.config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { FaSpinner, FaStar } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const ReviewForm = () => {
  const { user } = useContext(Authcontext);
  const navigate = useNavigate();
  const location = useLocation();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  useEffect(() => {
    const justRegistered = localStorage.getItem("justRegistered");
    if (user && justRegistered) {
      localStorage.removeItem("justRegistered");
      navigate(location.pathname, { replace: true }); // soft reload
    }
  }, [user, navigate, location.pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      toast.error("Please write your review comment");
      return;
    }

    if (comment.trim().length < 10) {
      toast.error("Please write at least 10 characters");
      return;
    }

    setIsSubmitting(true);

    const reviewData = {
      userId: user.uid,
      userName: user.displayName || "Anonymous",
      userEmail: user.email || "",
      userPhoto: user.photoURL || "https://i.ibb.co/2tRrRfq/default-user.png",
      rating: Number(rating),
      comment: comment.trim(),
      timestamp: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "reviews"), reviewData);

      toast.success("🎉 Thank you for your review!", {
        position: "top-center",
        autoClose: 2000,
      });

      setComment("");
      setRating(5);
    } catch (error) {
      console.error("Review submission error:", error);

      let errorMessage = "Failed to submit review. Please try again.";
      if (error.code === "permission-denied") {
        errorMessage = "You don't have permission to submit reviews.";
      }

      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!user?.email) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-semibold text-gray-700">
          Please log in to submit a review.
        </p>
      </div>
    );
  }

  return (
    <section className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto my-12">
      {<title>Review</title>}
      <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
        Share Your Experience
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-lg p-6 md:p-8 space-y-6 border border-green-50"
      >
        {/* User Info */}
        <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
          <img
            src={user.photoURL || "https://i.ibb.co/2tRrRfq/default-user.png"}
            alt={user.displayName || "User"}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">
              {user.displayName || "Anonymous User"}
            </h3>
            <p className="text-sm text-gray-500">
              {user.email || "Guest"}
            </p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="space-y-2">
          <label className="block text-lg font-medium text-gray-700">
            Your Rating <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`text-2xl ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                } ${!isSubmitting ? "hover:text-yellow-500" : ""}`}
                disabled={isSubmitting}
              >
                <FaStar />
              </button>
            ))}
            <span className="ml-2 text-gray-600">
              {rating} {rating === 1 ? "star" : "stars"}
            </span>
          </div>
        </div>

        {/* Comment Field */}
        <div className="space-y-2">
          <label htmlFor="comment" className="block text-lg font-medium text-gray-700">
            Your Review <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="Tell us about your experience..."
            required
            disabled={isSubmitting}
            minLength={10}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${
            isSubmitting
              ? "bg-green-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          } text-white shadow-md hover:shadow-lg`}
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Review"
          )}
        </button>
      </form>
    </section>
  );
};

export default ReviewForm;
