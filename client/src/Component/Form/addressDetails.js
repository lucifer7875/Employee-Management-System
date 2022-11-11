import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const Navigate = useNavigate();
  const [addressDetails, setaddressDetails] = useState({
    state: "",
    city: "",
    address: "",
    tripShedual: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddressDetails({
      ...addressDetails,
      [name]: value,
    });
    // const { checked } = e.target;
    //   const { tripShedual } = addressDetails;

    //   console.log(`${value} is ${checked}`);

    //   //  checks the box
    //   if (checked) {
    //     setaddressDetails({
    //       tripShedual: [...tripShedual, value],
    //     });
    //   }

    //   // unchecks the box
    //   else {
    //     setaddressDetails({
    //       tripShedual: tripShedual.filter((e) => e !== value),
    //     });
    //   }
  };
  const AddressDetails = () => {
    addressDetails.employee_id = JSON.parse(
      localStorage.getItem("employeeDetails")
    )._id;
    axios
      .post("http://localhost:9002/addressDetails", addressDetails)
      .then((res) => {
        alert(res.data.message);
        Navigate("/home/showDetails");
      });
  };
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
        <h3>Address Details Form</h3>
        <hr className="hr" />
        {/*------------------- select state div ------------------------------------*/}
        <div>
          <select
            name="state"
            id="state"
            className="form-control"
            onChange={handleChange}
            value={addressDetails.state}
          >
            <option value="selectState">Select State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <br />
        {/* -----------------------------select city Div---------------------------------    */}
        <div>
          <select
            name="city"
            id="city"
            className="form-control"
            onChange={handleChange}
            value={addressDetails.city}
          >
            <option value="selectCity">Select City</option>
            <option value="Ankleshwer">Ankleshwer</option>
            <option value="Ahemdabad">Ahemdabad</option>
            <option value="Surat">Surat</option>
            <option value="Bhavnagar">Bhavnagar</option>
            <option value="Sidhpur">Sidhpur</option>
            <option value="Patan">Patan</option>
            <option value="Bhruch">Bhruch</option>
            <option value="Mehsana">Mehsana</option>
          </select>
        </div>
        <br />
        {/* -----------------------------Address Div---------------------------------    */}

        <div className="mb-3">
          <input
            type="text"
            name="address"
            className="form-control"
            placeholder="Enter your Address"
            onChange={handleChange}
            value={addressDetails.address}
          />
        </div>
        <br />

        <h3>Trip Shedual</h3>
        <hr className="hr" />
        <div>
          <tr>
            <td style={{ width: "100px" }}>intrest Areas</td>
            <td>
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Weekly events"
                    id="flexCheck"
                    name="tripShedual"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" for="flexCheck">
                    Weekly events
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value="Monthly Events"
                    id="flexCheck1"
                    name="tripShedual"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" for="flexCheck1">
                    Monthly Events
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    value=" Yearly Events(Annual Trip)"
                    id="flexCheck2"
                    name="tripShedual"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" for="flexCheck2">
                    Yearly Events(Annual Trip)
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </div>
        <button className="btn btn-primary" onClick={AddressDetails}>
          Submmit
        </button>
      </div>
    </div>
  );
};

export default Address;
