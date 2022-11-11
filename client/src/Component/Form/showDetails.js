import React from "react";
import "./form.css";
class ShowDetails extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: {},
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to execute the code
 
  componentDidMount() {
    // console.log(JSON.parse(localStorage.getItem("employeeDetails"))._id);
    const employee_id = JSON.parse(localStorage.getItem("employeeDetails"))._id;
    // console.log(employee_id);
    fetch(`http://localhost:9002/showDetails/${employee_id}`)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });

    // .catch((error) => console.log(error));
  }
  render() {
    const item = this.state.items;
    console.warn(item);
    let parsedList;
    if (Array.isArray(item)) {
      console.log("items is present");
      console.log(item);
      parsedList = item.forEach((data) => {
        <tr>
          <td>{data.email}</td>
          <td>{data.contact}</td>
          <td>{data.DOB}</td>
          <td>{data.age}</td>
        </tr>;
      });
    }
    return (
      <div className="ShowActivity">
        <div>{parsedList}1</div>
        <table
          className="table table-dark table-hover"
          style={{ width: "800px", margin: "50px 0px 0px 200px" }}
        >
          <tbody>
            <tr>
              <td>Employee Name</td>
            </tr>
            <tr>
              <td>Employee Id</td>
            </tr>
            <tr>
              <td>Email ID</td>
            </tr>
            <tr>
              <td>Contact Number</td>
            </tr>
            <tr>
              <td>Birth Date</td>
            </tr>
            <tr>
              <td>Age</td>
            </tr>
            <tr>
              <td>Gender</td>
            </tr>
            <tr>
              <td>State</td>
            </tr>
            <tr>
              <td>City</td>
            </tr>
            <tr>
              <td>Address</td>
            </tr>
            <tr>
              <td>intrest Areas</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShowDetails;
