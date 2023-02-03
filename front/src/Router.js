import React from 'react';
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import MyAccountForm from './components/MyAccountForm'
import AccountSection from './components/AccountSection'
import CategoryAdd from './components/CategoryAdd';


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
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/account" element={<AccountSection />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/cart" element={<CartPage />} />
<<<<<<< HEAD
        <Route path="/account/security" element={<AccountSecurityPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/jeans" element={<JeansPage />} />
        <Route path="/tshirts" element={<TshirtsPage />} />
        <Route path="/jackets" element={<JacketsPage />} />
=======
        <Route path="/account/security" element={<MyAccountForm />} />
        <Route path="/category/add" element={<CategoryAdd />} />
        {/* <Route path="/product/list" element={<ProductList />} /> */}
>>>>>>> 4b7e48f3db5e4bd425b16ce14ac66bd27a8dfefa
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


<<<<<<< HEAD
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

=======
>>>>>>> 4b7e48f3db5e4bd425b16ce14ac66bd27a8dfefa
export default Router;