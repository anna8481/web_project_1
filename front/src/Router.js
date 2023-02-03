import React from 'react';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import MyAccountForm from './components/MyAccountForm'
import AccountSection from './components/AccountSection'
import CategoryAdd from './components/CategoryAdd';
import Cart from './components/Cart'
import Order from './components/Order'
import Slider from './components/Slider'

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
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/account" element={<AccountSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account/security" element={<MyAccountForm />} />
        <Route path="/category/add" element={<CategoryAdd />} />
        <Route path="/order" element={<OrderPage />} />
        {/* <Route path="/product/list" element={<ProductList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}




function CartPage() {
  return (
    <div>
      <section className='section'>
        <h2>Cart Page</h2>
        <div>
          <Cart />
          <Link to="/">Back to home</Link>
        </div>
      </section>
    </div>
  );
}

function OrderPage() {
  return (
    <>
      <section>
        <Order />
      </section>
    </>
  )
}


export default Router;