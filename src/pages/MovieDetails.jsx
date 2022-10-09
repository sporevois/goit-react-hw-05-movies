import { useState } from 'react';
import { fetchDetails } from 'services/api';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);

  const getDetails = async id => {
    try {
      const data = await fetchDetails(id);
      setDetails(data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      return;
    }
  };
  //   getDetails(id);
  return (
    <>
      {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>}
      {/* <h3>{details.original_tytle}</h3> */}
    </>
  );
};

export default MovieDetails;
