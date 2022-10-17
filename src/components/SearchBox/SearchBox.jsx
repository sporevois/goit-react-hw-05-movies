import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from './SearchBox.styled';

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
    <Form onSubmit={handleSubmit}>
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
    </Form>
  );
};
export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
