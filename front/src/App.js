import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";
import { ROUTE_ARR } from "./utills/route";

import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation></MainNavigation>
        <Routes>
          {ROUTE_ARR.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
