import { StyledLink, Header, Nav } from './AppBar.styled';
const AppBar = () => {
  return (
    <Header>
      <Nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
      </Nav>
    </Header>
  );
};
export default AppBar;
