// import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { fetchDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  //   const [details, setDetails] = useState({});
  //   const [error, setError] = useState(null);

  //   const getDetails = async id => {
  //     try {
  //       const data = await fetchDetails(id);
  //       setDetails(data);
  //       console.log(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       return;
  //     }
  //   };
  //   getDetails(id);
  return (
    <>
      {/* {error && <h3 style={{ marginLeft: '15px' }}>{error}</h3>} */}
      <h3>{movieId}</h3>
    </>
  );
};

export default MovieDetails;
