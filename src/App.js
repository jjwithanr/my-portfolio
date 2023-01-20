import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { styleReset } from 'react95';
import './App.css';

import original from 'react95/dist/themes/original';

import "./fonts/w95fa.woff";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { menubarButtons, focusedElement } from "./store";
import Desktop from './components/Desktop';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Pixel" !important;
  }
  ${styleReset}
`;

function AppWrapper() {
  const [focused, setfocused] = useRecoilState(focusedElement);
  const currentButtons = useRecoilValue(menubarButtons);

  const handleClick = React.useCallback(
    (e) => {
      if (e.target.dataset && e.target.dataset.name === "start-menu") return;
      const closest = e.target.closest("[data-name]");
      if (!closest) return setfocused("");
      const { name } = closest.dataset;
      setfocused(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focused, setfocused, currentButtons]
  );

  document.addEventListener("click", handleClick);
  document.addEventListener("touchstart", handleClick);

  return <><Desktop /></>;
}

const App = () => (
  <RecoilRoot>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <AppWrapper />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;