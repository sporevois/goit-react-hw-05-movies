import { fetchCredits } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCredits = async id => {
      try {
        const castInfo = await fetchCredits(id);
        setCast(castInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        return;
      }
    };
    getCredits(movieId);
  }, [movieId]);

  return (
    <>
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      <ul>
        {cast.map(({ id, original_name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
              alt={`${original_name} avatar`}
              width="180"
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
