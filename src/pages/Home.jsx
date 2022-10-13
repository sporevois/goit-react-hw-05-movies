import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/api';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getTrending = async () => {
      try {
        const trendingMovies = await fetchTrending();
        setTrending([...trendingMovies]);
      } catch (error) {
        setError(error.message);
      } finally {
        return;
      }
    };
    getTrending();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      <ul>
        {trending.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
