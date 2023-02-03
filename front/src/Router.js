import React from 'react';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import MyAccountForm from './components/MyAccountForm'
import AccountSection from './components/AccountSection'
import CategoryAdd from './components/CategoryAdd';


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
        {/* <Route path="/product/list" element={<ProductList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}




function CartPage() {
  return (
    <div>
      <Navbar></Navbar>
      <section className='section'>
        <h2>Cart Page</h2>
        <div>
          <Link to="/">Back to home</Link>
        </div>
      </section>
    </div>
  );
}


export default Router;