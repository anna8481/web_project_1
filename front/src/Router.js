import React from 'react';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import MyAccountForm from './components/MyAccountForm'
import AccountSection from './components/AccountSection'
import Slider from './components/Slider'
import CategoryAdd from './components/CategoryAdd';
import ProductAdd from './components/ProductAdd';
import Cart from './components/Cart'
import Order from './components/Order'
import Admin from './components/Admin'

import {
  Routes,
  BrowserRouter,
  Route,
  Link,
  // useLocation,
  // Redirect,
} from 'react-router-dom';


const Router = () => {
  return (
    <BrowserRouter>
      <Navbar>      </Navbar>
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/account" element={<AccountSection />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account/security" element={<MyAccountForm />} />
        <Route path="/order" element={<Order />} />
        <Route path="/category/add" element={<CategoryAdd />} />
        <Route path="/product/add" element={<ProductAdd />} />
        {/* <Route path="/jeans" element={<JeansPage />} />
        <Route path="/tshirts" element={<TshirtsPage />} />
        <Route path="/jackets" element={<JacketsPage />} /> */}
      </Routes>

    </BrowserRouter>
  );
}


export default Router;