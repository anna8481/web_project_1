// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { ROUTE_ARR } from './utills/route'

import {
  Routes,
  BrowserRouter,
  Route,
} from 'react-router-dom';



function App() {


  return (

    <div className="App">
      <div className="app-container">
        <BrowserRouter>
          <Navbar ></Navbar>
          <Routes>
            {ROUTE_ARR.map((route, index) => {
              return <Route path={route.path} element={<route.element />} key={index} />
            })}
          </Routes>
        </BrowserRouter >
      </div>
    </div>
  );
}


export default App;
