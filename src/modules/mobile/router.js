const express = require('express');
const login = require('./login');
const localization = require('./localization');

const router = express.Router();

router.use('/login', login.API);
router.use('/localization', localization.API);

module.exports = router;
