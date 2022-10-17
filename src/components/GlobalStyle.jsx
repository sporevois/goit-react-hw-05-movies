import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  li {
    list-style: none;
  }

  ul {
    padding-left: 0;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: 0;
  }`;

export default GlobalStyle;
