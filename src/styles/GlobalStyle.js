import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #162933;
    --beige: #99857F;
    --deep-dark: #1E1E1E;
    --white : white;
    --black: black;
  }
  html{
    font-size: 12px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }


`;
export default GlobalStyles;
