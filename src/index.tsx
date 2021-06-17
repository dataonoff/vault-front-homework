import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import GlobalStyle from './GlobalStyle';
import theme from './components/UI/theme';

const rootNode = document.getElementById('root');

render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
  rootNode,
);
