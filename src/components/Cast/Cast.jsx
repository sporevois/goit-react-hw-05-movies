import { fetchCredits } from 'services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import defaultAvatar from '../../images/default.png';

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
    <div>
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      <ul>
        {cast.map(({ id, original_name, character, profile_path }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : defaultAvatar
              }
              alt={`${original_name} avatar`}
              width="140"
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
