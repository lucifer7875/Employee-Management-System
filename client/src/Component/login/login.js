import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backGd from "../assets/back2.jpeg";
import welcome from "../assets/welcome.png";

// setLoginuser use For authentication
const Login = ({ setLoginEmployee }) => {
  const Navigate = useNavigate();

  const [employee, setEmployee] = useState({
    employeeId: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const Login = () => {
    axios.post("http://localhost:9002/login", employee).then((res) => {
      if (res.data.employee) {
        alert(res.data.message);
        localStorage.setItem(
          "employeeDetails",
          JSON.stringify(res.data.employee)
        );
        setLoginEmployee(res.data.employee);
        Navigate("/home/one");
      }
    });
  };
  return (
    <div>
      <div>
        <img
          src={backGd}
          alt="bckground"
          style={{
            position: "fixed",
            width: "100vw",
          }}
        />
      </div>
      <div
        style={{
          margin: "30px 0px 0px 235px",

          display: "flex",
          backgroundColor: "#ffffffd6",
          position: "absolute",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(13 110 253 / 58%)",
            width: "500px",
            height: "600px",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
          }}
        >
          <div style={{ margin: "130px 0px 0px 60px", fontSize: "30px" }}>
            Nice to see You Again
          </div>

          <img
            src={welcome}
            style={{
              width: "300px",
              margin: "40px 0px 40px 60px",
            }}
          />
        </div>
        <div
          style={{
            width: "500px",
            padding: "16px",
          }}
        >
          <h3 style={{ textAlign: "center", marginTop: "50px" }}>Login</h3>
          <hr className="hr" />
          <div className="mb-3" style={{ marginTop: "50px" }}>
            <input
              type="text"
              name="employeeId"
              className="form-control"
              placeholder="Enter your Employee Id"
              onChange={handleChange}
              value={employee.employeeId}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              placeholder="Enter your Password"
              onChange={handleChange}
              value={employee.password}
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={Login}>
              Login
            </button>
            <br />
            New Employee?
            <a onClick={() => Navigate("/register")} href="#">
              Register{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
