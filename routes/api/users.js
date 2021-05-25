const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please entered a password with 6 or more characters').isLength({ min: 6})
], (req, res) => {
    // In order to get the data, it needs middleware in server.js
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // 400 means bad request
        return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
    res.send('User route');
});

module.exports = router;