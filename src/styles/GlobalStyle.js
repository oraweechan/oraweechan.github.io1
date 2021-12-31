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
    --light-blue: #143745;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  svg {
    width:100%;
    height: 100%;
    object-fit: cover;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

`;
export default GlobalStyles;
