const User = require('../models/User');

exports.getUserProfile = async (req, res) => {
    res.json(req.user);
};
