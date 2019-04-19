import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import { HomePage } from '@Views/home/HomePage';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }
  
  table {
    border-collapse: collapse;
  }
  
  body {
    background-color: #f2f2f2;
  }
`;

const App: React.FunctionComponent<{}> = (): React.ReactElement => (
  <React.Fragment>
    <GlobalStyle />
    <HomePage />
  </React.Fragment>
);

export { App };
