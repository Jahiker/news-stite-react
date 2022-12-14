import React, { useState } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";

import { HashRouter, Routes, Route } from "react-router-dom";
import { router } from "./router";

import { GlobalStyles } from "./GlobalStyles";

import { themeStorage } from "./helpers";

function App() {

  const [darkTheme, setDarkTheme] = useState(themeStorage());

  return (
    <HashRouter>
      <GlobalStyles darkTheme={darkTheme} />
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <SearchBar />
      <Routes>
        {router.map((route) => {
          return (
            <Route
              path={route.path}
              element={<route.element />}
              key={`route-${route.id}`}
            >
              {route.innerRouter &&(
                <Route path={route.innerRouter.path} element={<route.innerRouter.element />} key={`subroute-${route.id}`} />
              )}
            </Route>
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
