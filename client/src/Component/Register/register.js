import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backGround from "../assets/back3.jpeg";
import Hello from "../assets/logo.png";

const Register = () => {
  const Navigate = useNavigate();
  const [employee, setEmployee] = useState({
    employeeName: "",
    employeeId: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const Register = () => {
    const { employeeName, employeeId, password, cPassword } = employee;
    if (employeeName && employeeId && password && password === cPassword) {
      axios.post("http://localhost:9002/register", employee).then((res) => {
        alert(res.data.message);
      }, Navigate("/login"));
    } else {
      alert("incorrect input");
    }
  };

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <img src={backGround} alt="background" style={{ width: "100vw" }} />
      </div>

      <div
        className="register"
        style={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          margin: "150px 0px 0px 300px",
          backgroundColor: "rgb(128 128 0 / 60%)",
          borderRadius: "20px",
          boxShadow: "inset 6px 0px 40px 1px #000",
        }}
      >
        <div
          style={{
            margin: "90px 90px 0px 50px",
            fontSize: "30px",
            fontFamily: "cursive",
            color: "black",
          }}
        >
          <img src={Hello} style={{ width: "180px", marginBottom: "30px" }} />
          <br />
          Register For <br />
          Enroll In company
        </div>
        <form
          className="form"
          style={{
            width: "600px",
            padding: "20px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>Registration</h3>
          <hr className="hr" />
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Employee Name"
              name="employeeName"
              onChange={handleChange}
              value={employee.employeeName}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Employee Id"
              className="form-control"
              name="employeeId"
              onChange={handleChange}
              value={employee.employeeId}
            />
          </div>
          <div className="mb-2 d-flex">
            <input
              style={{ width: "260px", marginRight: "15px" }}
              type="password"
              className="form-control"
              placeholder="password"
              name="password"
              onChange={handleChange}
              value={employee.password}
            />

            <input
              style={{ width: "285px" }}
              type="password"
              placeholder="Confirm password"
              className="form-control"
              name="cPassword"
              onChange={handleChange}
              value={employee.cPassword}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button className="btn btn-primary" onClick={Register}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
