const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    employeeId: { type: String, required: true },
    name: { type: String, required: true },
    message: { type: String, required: true }
}, { timestamps: true }); 

module.exports = mongoose.model('Message', messageSchema);
