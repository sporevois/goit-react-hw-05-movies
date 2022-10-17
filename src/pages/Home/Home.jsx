import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/api';
import { Container } from 'utils/Container.styled';
import { ListItem } from './Home.styled';

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
    <Container>
      <h1>Trending today</h1>
      {error && <h3>{error}</h3>}
      <ul>
        {trending.map(({ id, original_title }) => (
          <ListItem key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </ListItem>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
