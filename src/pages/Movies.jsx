import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SearchBox from 'components/SearchBox/SearchBox';
import { searchMovies } from 'services/api';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const getMoviesByQuery = async () => {
      try {
        const movies = await searchMovies(searchQuery);
        const searchResults = movies.map(({ id, original_title }) => {
          return { id, original_title };
        });
        setFoundMovies([...searchResults]);
      } catch (error) {
        setError(error.message);
      } finally {
        return;
      }
    };
    getMoviesByQuery();
  }, [searchQuery, searchParams]);

  const handleSubmit = query => {
    if (searchQuery !== query) {
      setError(null);
      setSearchParams(query !== '' ? { query } : {});
    }
  };

  return (
    <>
      <SearchBox value={searchQuery} onSubmit={handleSubmit} />
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      <ul>
        {foundMovies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`}>{original_title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
