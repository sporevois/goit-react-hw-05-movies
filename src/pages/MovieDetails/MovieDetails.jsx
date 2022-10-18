import { Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchDetails } from 'services/api';
import GoBackLink from 'components/GoBackLink/GoBackLink';
import { Container } from 'utils/Container.styled';
import { Box, Wrapper, StyledLink, NavList } from './MovieDetails.styled';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
      <Container>
        <GoBackLink to={backLinkHref}>Go back</GoBackLink>
        {error && <h3>{error}</h3>}
        <Box>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            width="280"
            alt={`${original_title} poster`}
          />
          <Wrapper>
            <h2>
              {original_title} ({parseInt(release_date)})
            </h2>
            <p>User Score: {Math.round(vote_average * 10)}%</p>
            <h3>OwerView</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genres && genres.map(genre => genre.name).join(' ')}</p>
          </Wrapper>
        </Box>

        <p>Additional information</p>
        <NavList>
          <li>
            <StyledLink to={'cast'} state={{ from: location.state.from }}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to={'reviews'} state={{ from: location.state.from }}>
              Reviews
            </StyledLink>
          </li>
        </NavList>

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default MovieDetails;
