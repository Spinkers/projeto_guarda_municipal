const express = require('express');
const login = require('./login');

const router = express.Router();

router.use('/login', login.API);

module.exports = router;
