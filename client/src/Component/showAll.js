import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch(`http://localhost:9002/totalEmployee`)
      .then((res) => res.json())
      .then((allData) => {
        console.log(allData);
        this.setState({
          allItems: allData,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { allItems } = this.state;
    let parsedList;
    if (Array.isArray(allItems)) {
      console.log(allItems);

      parsedList = allItems.map((Data, index) => (
        <tr>
          <td>{index + 1}.</td>
          <td>{Data.employeeName}</td>
          <td>&nbsp; {Data.employeeId}</td>
          <td>
            <button className="btn btn-danger" onClick={(e) => Delete()}>
              Delete
            </button>
            &nbsp;
            <button className="btn btn-primary" onClick={() => Update()}>
              Edit
            </button>
          </td>
        </tr>
      ));
    }

    return (
      <div>
        <h3>Employee Profile</h3>

        <hr />
        <table>
          <thead>
            <th>index</th>
            <th>Name</th>
            <th>Id</th>
            <th>Action</th>
          </thead>
          <tbody>{parsedList}</tbody>
        </table>
      </div>
    );
  }
}
function Delete() {
  const a = document.querySelector("tr");
  const email = a.childNodes[6];
}

// const Delete = async (email) => {
//   await fetch(`http://localhost:9002/EmployeeDe/${email}`, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });

//   await ((data) => data.email !== email);
// };

function Update() {
  window.location = "update";
}

function TotalEmployee(props) {
  const Navigate = useNavigate();
  return <Employee {...props} Navigate={Navigate} />;
}

export default TotalEmployee;
