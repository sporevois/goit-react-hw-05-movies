import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from 'pages/Home/Home';
import GlobalStyle from './GlobalStyle';
import { Container } from 'utils/Container.styled';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              <Container>
                <h4>Sorry, page not found</h4>
              </Container>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
