import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";
import { ROUTE_ARR } from "./utills/route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./utills/AuthContext";
import ProtectedRoute from "./utills/ProtectedUserRoute";

function App() {
  // const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const login = useCallback((token, isAdmin) => {
    setToken(token);
    setIsAdmin(isAdmin);
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdmin);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setIsAdmin(null);
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("cart");
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("token");
    if (storedData) {
      login(storedData);
    }
  }, [login]);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthContext.Provider
          value={{
            isLoggedIn: !!token,
            token: token,
            isAdmin: isAdmin,
            login: login,
            logout: logout,
          }}
        >
          <MainNavigation></MainNavigation>
          <Routes>
            {ROUTE_ARR.map((route, index) => {
              return (
                <Route
                  path={route.path}
                  element={
                    route.protected ? (
                      <ProtectedRoute>
                        <route.element />
                      </ProtectedRoute>
                    ) : (
                      <route.element />
                    )
                  }
                  key={index}
                />
              );
            })}
            <Route
              path="*"
              element={
                <section className="container-center">
                  없는 경로 입니다.
                </section>
              }
            />
          </Routes>
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
