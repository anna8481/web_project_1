import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback } from "react";
import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";
import { ROUTE_ARR } from "./utills/route";
import { AuthContext } from "./utills/Auth";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider>
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
      </AuthContext.Provider>
    </div>
  );
}

export default App;
