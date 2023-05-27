import React from 'react';
import {Routes,Route} from "react-router-dom";
import CarInputsPage from '../Pages/Dealers_pg/CarInputsPage';
import Signup from '../Pages/Authantication/Signup';
import Login from '../Pages/Authantication/Login';
import DealersPage from '../Pages/Dealers_pg/DealersPage';
import Home from '../Pages/Home';
import Dealpage from '../Pages/Dealpage';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
     <Route path="/uploadpost/:id" element={<CarInputsPage/>}></Route> 
     <Route path="/signup" element={<Signup/>}></Route> 
     <Route path='/login' element={<Login/>}></Route>
     <Route path='/dealerspage' element={<DealersPage/>} ></Route>
     <Route path='/carinputpage' element={<CarInputsPage/>} ></Route>
     <Route path='/dealpage' element={<Dealpage/>} ></Route>
  </Routes>
  )
}

export default AllRoutes
