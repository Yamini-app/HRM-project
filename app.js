const express = require("express");
const mongoose = require("mongoose");
const port = 5000;

const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(express.json());
const cors = require('cors');
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/employees', employeeRoutes);
app.use('/api/auth', authRoutes);

const DB_URL = 'mongodb+srv://yaminiharibabu:test23@cluster0.2kqzt.mongodb.net/test?retryWrites=true&w=majority';

mongoose.set("strictQuery", true);
mongoose.connect(DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
    console.log("Database connected successfully!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
