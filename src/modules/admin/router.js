const express = require('express');
const assisted = require('./assisted');
const author = require('./author');
const login = require('./login');
const user = require('./user');

const router = express.Router();

router.use('/assisted', assisted.API);
router.use('/author', author.API);
router.use('/login', login.API);
router.use('/user', user.API);

module.exports = router;
