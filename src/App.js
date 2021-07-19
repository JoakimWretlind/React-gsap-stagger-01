import { useRef, useEffect } from 'react';
import { GlobalStyle } from './globalStyle';

import Home from './components/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
