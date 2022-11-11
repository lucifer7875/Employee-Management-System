import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Component/Register/register";
import Login from "./Component/login/login";
import Home from "./Component/Home/home";
import Personl from "./Component/Form/personalDetails";
import Address from "./Component/Form/addressDetails";
import ShowDetails from "./Component/Form/showDetails";
import TotalEmployee from "./Component/showAll";
import One from "./Component/Home/1";

const App = () => {
  const [employee, setLoginEmployee] = useState({
    // employeeName: "",
    // employeeId: "",
    // password: "",
    // cPassword: "",
  });
  return (
    <div>
      <div>
        <Router>
          <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/"
              element={<Login setLoginEmployee={setLoginEmployee} />}
            ></Route>
            <Route
              path="/home"
              element={
                employee && employee._id ? (
                  <Home setLoginEmployee={setLoginEmployee} />
                ) : (
                  <Login setLoginEmployee={setLoginEmployee} />
                )
              }
            >
              <Route path="/home/personalDetails" element={<Personl />}></Route>
              <Route path="/home/addressDetails" element={<Address />}></Route>
              <Route path="/home/showDetails" element={<ShowDetails />}></Route>
              <Route path="/home/one" element={<One />}></Route>
            </Route>
            <Route path="/showAllEmployee" element={<TotalEmployee />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
