import React from 'react';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import MyAccountForm from './components/MyAccountForm'
import AccountSection from './components/AccountSection'
import Slider from './components/Slider'
import Cart from './components/Cart'
import Order from './components/Order'
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
        <Route path="/order" element={<OrderPage />} />
        <Route path="/jeans" element={<JeansPage />} />
        <Route path="/tshirts" element={<TshirtsPage />} />
        <Route path="/jackets" element={<JacketsPage />} />
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
        <Cart/>
        <div>
          <Link to="/">Back to home</Link>
        </div>
      </section>
    </div>
  );
}

function OrderPage() {
  return (
    <>
      <Navbar />
      <section>
        <Order />
      </section>
    </>
  )
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

function JeansPage() {
  return (
    <>
      <Navbar/>
      <h2>청파지 파는곳이다</h2>
    </>
  )
}

function TshirtsPage() {
  return (
    <>
      <Navbar/>
      <h2>티셔츠 파는곳이다</h2>
    </>
  )
}

function JacketsPage() {
  return (
    <>
      <Navbar/>
      <h2>자켓 파는곳이다</h2>
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