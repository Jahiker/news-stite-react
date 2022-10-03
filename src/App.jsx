import React, { useState } from "react";
import { Header } from "./components/Header";

import { HashRouter, Routes, Route } from "react-router-dom";
import { router } from "./router";

import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <HashRouter>
      <GlobalStyles darkTheme={darkTheme} />
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Routes>
        {router.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.element />}
              key={`route-${route.id}`}
            />
          );
        })}
        <Route
          path="*"
          element={<h2>404 - Not Found</h2>}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
