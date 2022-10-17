import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  width: 100px;
  text-decoration: none;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 2px;
  color: black;

  &:hover {
    scale: 1.1;
    color: red;
    border-color: red;
    transition: 250ms;
  }
`;
