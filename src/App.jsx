import React, {useState} from 'react'
import { Header } from "./components/Header";

import { GlobalStyles } from './GlobalStyles';

function App() {
  const [darkTheme, setDarkTheme] =  useState(false);

  return (
    <>
      <GlobalStyles darkTheme={darkTheme} />
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
    </>
  );
}

export default App;
