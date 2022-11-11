import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeName: "string",
  employeeId: "string",
  password: "string",
  personal: [{}],
  addressDetails: [{}],
});

const Employee = new mongoose.model("Employee", employeeSchema);

export default Employee;
