import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import MainNavigation from "./components/Navigation/MainNavigation";
import { ROUTE_ARR } from "./utills/route";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AuthContext } from "./utills/AuthContext";
import RequireAuth from "./utills/RequireAuth";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import AccountSercurity from "./pages/user/AccountSecurity";
import AccountDelete from "./pages/user/AccountDelete";
import Account from "./pages/user/Account";
import Main from "./components/Main";
import CategoryAdd from "./pages/category/CategoryAdd";
import ProductAdd from "./pages/product/ProductAdd";
import ProductList from "./pages/product/ProductList";
import ProductDetail from "./pages/product/ProductDetail";
import Cart from "./pages/cart/Cart";
import Order from "./pages/cart/Order";
import OrderComplete from "./pages/cart/OrderComplete";
import Admin from "./pages/admin/Admin";
import CategoryManage from "./pages/category/CategoryManage";
import OrderHistory from "./pages/user/OrderHistory";
import OrderManage from "./pages/admin/OrderManage";
import UserManage from "./pages/admin/UserManage";
import FindUserPassword from "./pages/user/FindUserPassword";
import Unauthorized from "./utills/Unauthorized";
import Test from "./utills/Test";

function App() {
  const navigate = useNavigate();
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
    navigate("/");
  }, []);

  useEffect(() => {
    const storedData = localStorage.getItem("token");
    if (storedData) {
      login(storedData);
    }
  }, [login]);

  return (
    <div className="App">
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
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/list/:category" element={<ProductList />} />
          <Route path="/product/detail/:id" element={<ProductDetail />} />
          <Route path="/unaurhotized" element={<Unauthorized />} />
          <Route path="/login/finduserpassword" element={<FindUserPassword />} />
          <Route path="/" element={<Test />} />
          <Route element={<RequireAuth />}>
            <Route path="/account" element={<Account />} />
            <Route path="/account/signout" element={<AccountDelete />} />
            <Route path="/account/orders" element={<OrderHistory />} />
            <Route path="/account/security" element={<AccountSercurity />} />
            <Route path="/order" element={<Order />} />
            <Route path="/order/complete" element={<OrderComplete />} />
          </Route>
          <Route element={<RequireAuth allowedRole="admin" />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/orders" element={<OrderManage />} />
            <Route path="/admin/users" element={<UserManage />} />
            <Route path="/category/add" element={<CategoryAdd />} />
            <Route path="/category/manage" element={<CategoryManage />} />
            <Route path="/product/add" element={<ProductAdd />} />
          </Route>
          <Route path="*" element={<section className="container-center">Not Found</section>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
