const express = require('express');
const { registerEmployees } = require('../controllers/employeeController');
const { auth, admin } = require('../middlewares/auth');
const router = express.Router();

router.post('/add-employee', registerEmployees);
// router.get('/', auth, getEmployees);

module.exports = router;
