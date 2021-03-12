import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './GlobalStyle';
import BookGrid from './BookGrid';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <BookGrid />
  </React.StrictMode>,
  // eslint-disable-next-line comma-dangle
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
