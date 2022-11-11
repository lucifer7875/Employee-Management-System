import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import axios from "axios";

const Personl = () => {
  const Navigate = useNavigate();

  const [personalDetails, setpersonalDetails] = useState({
    name: "",
    email: "",
    contact: "",
    DOB: "",
    age: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpersonalDetails({
      ...personalDetails,
      [name]: value,
    });
  };

  const PersonalDetails = () => {
    personalDetails.employee_id = JSON.parse(
      localStorage.getItem("employeeDetails")
    )._id;
    axios
      .post("http://localhost:9002/personalDetails", personalDetails)
      .then((res) => {
        alert(res.data.message);
        Navigate("/home/addressDetails");
      });
  };

  console.log(JSON.parse(localStorage.getItem("employeeDetails")));

  return (
    <div
      style={{
        width: "600px",
        margin: "100px 0px 0px 500px",
        boxShadow: "4px 6px 9px 0px gray",
        padding: "20px",
        borderRadius: "16px",
      }}
    >
      <div>
        <h3 className="heading">Personl Details Form</h3>
      </div>
      <hr className="hr" />
      <div className="informationDiv">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter your Name"
            onChange={handleChange}
            value={personalDetails.name}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter your Email-Id"
            onChange={handleChange}
            value={personalDetails.email}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Enter your Contact Number"
            onChange={handleChange}
            value={personalDetails.contact}
          />
        </div>
        <div className="mb-3 d-flex w-60">
          <input
            type="date"
            id="start"
            name="DOB"
            min="1960-01-01"
            max="2022-11-10"
            onChange={handleChange}
            value={personalDetails.date}
          />

          <input
            type="text"
            name="age"
            className="form-control"
            placeholder="Enter your age"
            onChange={handleChange}
            value={personalDetails.age}
          />
        </div>

        <div className="d-flex mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault1"
              onChange={handleChange}
              value="male"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="flexRadioDefault2"
              style={{ marginLeft: "10px" }}
              onChange={handleChange}
              value="female"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
        </div>
        <button className="btn btn-primary" onClick={PersonalDetails}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Personl;
