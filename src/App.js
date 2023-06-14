import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AppBar, styleReset } from 'react95';
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
  const [focused, setFocused] = useRecoilState(focusedElement);
  const currentButtons = useRecoilValue(menubarButtons);
  const [isMobile, setIsMobile] = React.useState(false);

  const checkWindowSize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  React.useEffect(() => {
    checkWindowSize();
    window.addEventListener('resize', checkWindowSize);
    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  const handleClick = React.useCallback(
    (e) => {
      if (e.target.dataset && e.target.dataset.name === "start-menu") return;
      const closest = e.target.closest("[data-name]");
      if (!closest) return setFocused("");
      const { name } = closest.dataset;
      setFocused(name);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focused, setFocused, currentButtons]
  );

  document.addEventListener("click", handleClick);
  document.addEventListener("touchstart", handleClick);

  return isMobile ? <AppBar fullWidth className="mobile"></AppBar> : <Desktop />;
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