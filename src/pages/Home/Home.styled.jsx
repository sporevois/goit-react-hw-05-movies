import styled from 'styled-components';

export const ListItem = styled.li`
  margon-bottom: 2px;

  a {
    display: block;
    text-decoration: none;
    color: black;
    font-size: 16px;
  }

  &:hover a {
    color: red;
    font-weight: 500;
    letter-spacing: 3px;
    transition: 250ms;
  }
`;
