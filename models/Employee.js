// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    addressLine1: { type: String },
    addressLine2: { type: String },
    city: { type: String },
    state: { type: String },
    pincode: { type: Number },
    phone: { type: Number }, 
    maritalStatus: { type: String },
    fathersName: { type: String },
    mothersName: { type: String },
    emergency: { type: Number },
    dob: { type: Date }, 
    attendance: { type: Number },
    noOfDaysAbsent: { type: Number },
    position: { type: String },
    currentSalary: { type: String },
    bloodGroup: { type: String },
    mailId: { type: String, required: true, unique: true }, 
    role: { type: String }
});


module.exports = mongoose.model('Employee', employeeSchema);
