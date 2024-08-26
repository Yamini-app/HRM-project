const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.auth = async (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};

exports.admin = (req, res, next) => {
    if (req.user.role !== 'admin') return res.status(403).send('Access denied.');
    next();
};
