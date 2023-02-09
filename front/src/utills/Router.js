import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ROUTE_ARR } from './route'

import {
  Routes,
  BrowserRouter,
  Route,
} from 'react-router-dom';



const Router = () => {

  return (
    <BrowserRouter>
      <Navbar ></Navbar>
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return <Route path={route.path} element={<route.element />} key={index} />
        })}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter >
  );
}

export default Router;