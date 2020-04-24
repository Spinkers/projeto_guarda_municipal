const express = require('express');
const assisted = require('./assisted');
const author = require('./author');

const router = express.Router();

router.use('/assisted', assisted.API);
router.use('/author', author.API);

module.exports = router;
