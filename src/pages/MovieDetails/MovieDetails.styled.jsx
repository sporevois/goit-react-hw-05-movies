import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom 15px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);
`;

export const StyledLink = styled(NavLink)`
  padding: 5px;
  color: black;
  font-size: 16px;
  line-height: 1.12;
  font-weight: 500;
  border: 1px solid black;
  text-decoration: none;

  &.active {
    color: red;
    border-color: red;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.25);

  li {
    list-style: none;
  }
`;
