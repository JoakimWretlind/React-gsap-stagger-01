import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'lato', sans-serif;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(-15deg, #EBD2C2, #C69789);
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;