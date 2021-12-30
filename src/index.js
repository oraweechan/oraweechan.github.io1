import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyle';
import App from './App';
import Typography from './styles/Typography';


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Typography />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

