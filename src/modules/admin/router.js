const express = require('express');
const assisted = require('./assisted');

const router = express.Router();

router.use('/assisted', assisted.API);

module.exports = router;
