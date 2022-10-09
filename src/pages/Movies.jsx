import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovies } from 'services/api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [error, setError] = useState(null);

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
  }, [searchQuery]);

  const handleSubmit = query => {
    if (searchQuery !== query) {
      setSearchQuery(query);
      setError(null);
    }
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      <ul>
        {foundMovies.map(({ id, original_title }) => (
          <li key={id}>
            <NavLink to={`movies/${id}`}>{original_title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Movies;
