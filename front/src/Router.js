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
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/account/security" element={<AccountSecurityPage />} />
        <Route path="/category/add" element={<CategoryAddPage />} />
      </Routes>
    </BrowserRouter>
  );
}


function HomePage() {
  return (
    <div>
      <Navbar></Navbar>
      <section className='section'>
        <Slider />
      </section>
    </div>
  );
}


function LoginPage() {
  return (
    <div>
      {/* header part */}
      <Navbar></Navbar>
      {/* body part */}
      <section className="section">
        <LoginForm /></section>
    </div >

  );
}


function RegisterPage() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="section">
        <RegisterForm /></section>
    </div>
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


function AccountPage() {
  return (
    <>
      <Navbar />
      <AccountSection />
    </>
  );

}

function AccountSecurityPage() {
  return (
    <>
      <Navbar />
      <MyAccountForm />
    </>
  );

}

function CategoryAddPage() {
  return (
    <>
      <Navbar />
      <CategoryAdd />
    </>
  )
}


// function LoginPage() {
//   return (
//     <div>
//       {/* header part */}
//       <Navbar></Navbar>
//       {/* body part */}
//       <section className="section">
//         <MyAccountForm /></section>
//     </div >
//   );
// }

export default Router;