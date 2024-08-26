const User = require('../models/User');
const jwt = require('jsonwebtoken');
const Message = require('../models/message.js');
exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).send('User already exists.');

        user = new User({ name, email, password });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).send('Server error');
    }
};

const Employee = require('../models/Employee.js'); // Adjust path as needed

exports.loginEmployee = async (req, res) => {
    try {
        const { email, employeeId } = req.body;

        // Query using findOne
        const employee = await Employee.findOne({ mailId: email, employeeId: employeeId });

        if (employee) {
            return res.json(employee);
        } else {
            return res.status(404).json({ message: 'No matching employee found' });
        }
    } catch (error) {
        console.error('Error while finding employee:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        if (employees.length > 0) {
            return res.json(employees);
        } else {
            return res.status(404).json({ message: 'No employees found' });
        }
    } catch (error) {
        console.error('Error while fetching employees:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};


exports.getEmployeeById = async (req, res) => {
    const { id } = req.body; 
    
    try {
        const employee = await Employee.findOne({ employeeId: id });  

        if (employee) {
            return res.json(employee); 
        } else {
            return res.status(404).json({ message: 'Employee not found' }); 
        }
    } catch (error) {
        console.error('Error while fetching employee:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};



exports.storeMessage = async (req, res) => {
    const { employeeId, name, message } = req.body;

    try {
        const newMessage = new Message({
            employeeId,
            name,
            message
        });
        await newMessage.save();

        return res.status(201).json({ message: 'Message stored successfully', data: newMessage });
    } catch (error) {
        console.error('Error while storing message:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();

        if (messages.length > 0) {
            return res.json(messages);
        } else {
            return res.status(404).json({ message: 'No messages found' }); 
        }
    } catch (error) {
        console.error('Error while fetching messages:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

