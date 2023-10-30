import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import OurBrands from './components/Brands';
import Home from './components/Home';
import EmployeeDashboard from './components/EmployeeDashboard';
import HrDash from './components/HrDash';
import AboutUs from './components/AboutUs';
import HrMenu from './components/HrMenu';
import EmpMenu from './components/EmpMenu';
import Resign from './components/Resign'; 
import EmployeeLogin from './components/EmployeeLogin';
import HRLogin from './components/HRLogin';
import LoginController from './components/LoginController';
import UserContext from "./Context/UserContext";
import { useState } from "react";
import Blogs from './components/Blogs';

function App() {
  // const [reason, setreason] = useState("");

  return (
    <div className="main">
      <BrowserRouter>
      {/* <UserContext.Provider value={{ reason, setreason }}> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginController />} />
          <Route path='/employeelogin' element={<EmployeeLogin/>} />
          <Route path='/hrlogin' element={<HRLogin/>} />
          <Route path="/brands" element={<OurBrands />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/empdashboard" element={<EmployeeDashboard />} />
          <Route path="/hrdashboard" element={<HrDash />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/resign" element={<Resign />} /> 
          <Route path="/hrmenu" element={<HrMenu />} />
          <Route path="/empmenu" element={<EmpMenu />} />
        </Routes>
      {/* </UserContext.Provider> */}
      </BrowserRouter>
    </div>
  );
}
export default App;