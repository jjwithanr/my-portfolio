import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import Taskbar from './components/Taskbar';
import './App.css';

import original from 'react95/dist/themes/original';

import "./fonts/w95fa.woff";
import { RecoilRoot } from 'recoil';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Pixel" !important;
  }
  ${styleReset}
`;

const App = () => (
  <RecoilRoot>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Taskbar />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;