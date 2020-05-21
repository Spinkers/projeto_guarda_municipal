const express = require('express');
const assisted = require('./assisted');
const author = require('./author');
const login = require('./login');

const router = express.Router();

router.use('/assisted', assisted.API);
router.use('/author', author.API);
router.use('/login', login.API);

module.exports = router;
