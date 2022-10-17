import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  margin-left: 10px;
  text-decoration: none;
  color: black;
  font-size: 18px;
  font-weight: bold;
  &.active {
    color: red;
  }
`;

export const Header = styled.header`
  margin: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
