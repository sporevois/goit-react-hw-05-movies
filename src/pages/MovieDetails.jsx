import { Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetails = async id => {
      try {
        const movieInfo = await fetchDetails(id);
        setDetails(movieInfo);
      } catch (error) {
        setError(error.message);
      } finally {
        return;
      }
    };
    getDetails(movieId);
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = details;

  return (
    <>
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      <img
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        width="280"
        alt={`${original_title} poster`}
      />
      <h2>
        {original_title} ({parseInt(release_date)})
      </h2>
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <h3>OwerView</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres && genres.map(genre => genre.name).join(' ')}</p>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={'cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
