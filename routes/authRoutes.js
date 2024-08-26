const express = require('express');
const { registerUser, loginEmployee ,getEmployeeById,storeMessage,getAllMessages} = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginEmployee);
router.post('/getEmployeeById',getEmployeeById)
router.post('/storeMessage',storeMessage)
router.get('/getAllMessages',getAllMessages)
module.exports = router;
