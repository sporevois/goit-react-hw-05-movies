import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async id => {
      try {
        const reviewInfo = await fetchReviews(id);
        setReviews(reviewInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        return;
      }
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <div>
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      {!reviews && <h4>We don`t have any reviews for this movie</h4>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
