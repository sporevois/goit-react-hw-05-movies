import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({ value, onSubmit }) => {
  const [query, setQuery] = useState(value);

  const handleSubmit = event => {
    event.preventDefault();

    query.trim() === ''
      ? alert('Please enter something to searh querry')
      : onSubmit(query);
  };

  const handleInput = event => {
    setQuery(event.target.value.toLowerCase());
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        name="query"
        value={query}
        onInput={handleInput}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
