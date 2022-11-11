import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Employee from "./Model/model.employee.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/EmployeeDB",

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB Connected");
  }
);

// ----------------data send in mongo db----------------------

// -----------------------------------------------------------------------------------------
// -----------------------------------------routers-----------------------------------------
// -----------------------------------------------------------------------------------------

// register Route
app.post("/register", (req, result) => {
  // URL BASE POST APP
  const { employeeName, employeeId, password } = req.body;
  Employee.findOne({ employeeId: employeeId }, (err, employee) => {
    // check email
    if (employee) {
      result.send({ message: "user already registerd" });
    } else {
      const employee = new Employee({
        employeeName: employeeName,
        employeeId: employeeId,
        password: password,
      });
      employee.save((err) => {
        if (err) {
          result.send(err);
        } else {
          result.send({ message: "Successfully Registered , plese Login " });
        }
      });
    }
  });
});

// login Route
app.post("/login", (req, res) => {
  const { employeeId, password } = req.body;
  Employee.findOne({ employeeId: employeeId }, (err, employee) => {
    if (employee) {
      if (password === employee.password) {
        res.send({ message: "Login successfull", employee: employee });
      } else {
        res.send({ message: "password did not match" });
      }
    } else {
      res.send({ message: "enter wrong Employee ID" });
    }
  });
});

// personal Details post route

app.post("/personalDetails", async (req, res) => {
  const { employee_id } = req.body;

  console.log(req.body);
  // delete req.body.employee_id;

  Employee.updateOne(
    { _id: employee_id },
    { $set: { personal: req.body } }
  ).then((result, err) => {
    return res
      .status(200)
      .json({ data: result, message: "Details Added Successfully" });
  });
});

// Address Details post route

app.post("/addressDetails", async (req, res) => {
  const { employee_id } = req.body;

  console.log(req.body);
  // delete req.body.employee_id;

  Employee.updateOne(
    { _id: employee_id },
    { $set: { addressDetails: req.body } }
  ).then((result, err) => {
    return res
      .status(200)
      .json({ data: result, message: "Details Added Successfully" });
  });
});

//  show Details Route
app.get("/showDetails/:id", async (req, res) => {
  // console.log("showing data")
  console.log(req.params.id);
  console.log("got a request");

  const data = await Employee.findById(req.params.id);
  console.log(data);
  res.send(data);
  console.log("server request ends here");
});

// total employee
app.get("/totalEmployee", async (req, res) => {
  // console.log("showing data")

  const allEmployee = await Employee.find({});
  console.log(allEmployee);
  res.send(allEmployee);
});

// delete Route

app.get("/EmployeeDe/:email", async (req, res) => {
  // console.log("showing data")
  console.log(req.params.email);
  console.log("got a request");

  const data = await Employee.deleteByID(req.params.email);
  // findByD(req.params.email);
  console.log(data);
  res.send(data);
});
app.listen(9002, () => {
  console.log("connect on 9002");
});
