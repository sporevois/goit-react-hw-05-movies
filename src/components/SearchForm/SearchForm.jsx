import { useState } from 'react';
const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

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
export default SearchForm;
