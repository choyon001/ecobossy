import { useState, useEffect } from 'react';
import { collection, getDocs, query, limit, orderBy, startAfter } from 'firebase/firestore';
import { db } from '../firebase/firebase.config';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

const HomepageReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  // Fetch initial reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsRef = collection(db, 'reviews');
        const q = query(
          reviewsRef, 
          orderBy('timestamp', 'desc'), 
          limit(3)
        );
        const querySnapshot = await getDocs(q);
        
        const reviewsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setReviews(reviewsData);
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        setHasMore(reviewsData.length === 3);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        toast.error('Failed to load reviews');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const loadMoreReviews = async () => {
    if (!hasMore) return;
    
    setLoading(true);
    try {
      const reviewsRef = collection(db, 'reviews');
      const q = query(
        reviewsRef, 
        orderBy('timestamp', 'desc'),
        startAfter(lastVisible),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      
      const newReviews = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setReviews(prev => [...prev, ...newReviews]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(newReviews.length === 3);
    } catch (error) {
      console.error('Error loading more reviews:', error);
      toast.error('Failed to load more reviews');
    } finally {
      setLoading(false);
    }
  };

  if (loading && reviews.length === 0) {
    return <div className="text-center py-8">Loading reviews...</div>;
  }

  if (reviews.length === 0) {
    return <div className="text-center py-8">No reviews yet</div>;
  }

  return (
    <section className="py-12 font-source-serif">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          What Our Adventurers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center">
            <button
              onClick={loadMoreReviews}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Load More Reviews'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="bg-green-100 p-3 rounded-full mr-4">
          <img 
            src={review.userPhoto || "https://i.ibb.co/2tRrRfq/default-user.png"} 
            alt={review.userName} 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{review.userName}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'} 
              />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{review.comment}</p>
      <p className="text-sm text-gray-500">
        {review.timestamp?.toDate().toLocaleDateString()}
      </p>
    </div>
  );
};

export default HomepageReviews;