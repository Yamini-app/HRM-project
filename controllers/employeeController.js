const Employee = require('../models/Employee');
const jwt = require('jsonwebtoken');

exports.registerEmployees = async (req, res) => {
    const employeeData = req.body; 

    try {
        for (let data of employeeData) {
            let employee = await Employee.findOne({ employeeId: data["Employee Id"] });
            if (!employee) {
                employee = new Employee({
                    employeeId: data["Employee Id"],
                    name: data.Name,
                    addressLine1: data["Address line 1"],
                    addressLine2: data["Address line 2"],
                    city: data.City,
                    state: data.State,
                    pincode: data.Pincode,
                    phone: data["Phone number"], 
                    maritalStatus: data["Marital Status"],
                    fathersName: data["Farther's Name"],
                    mothersName: data["Mother's Name"],
                    emergency: data["Emergency number"],
                    nationality: data.Nationality,
                    dob: data.DOB,
                    attendance: data.Attendance,
                    noOfDaysAbsent: data["No of days absent"],
                    position: data.Position,
                    currentSalary: data["Current salary "],
                    bloodGroup: data["Blood group"],
                    mailId: data["Mail id"],
                    role: data.role
                });
                await employee.save();
            }
        }
        res.status(201).json({ message: 'Employees registered successfully.' });
    } catch (error) {
        console.error('Error:', error); 
        res.status(500).send('Server error');
    }
};

exports.loginEmployee = async (req, res) => {
    const { mailId } = req.body;

    try {
        const employee = await Employee.findOne({ mailId });
        if (!employee) return res.status(400).send('Invalid credentials.');

        const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, employee });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
};
