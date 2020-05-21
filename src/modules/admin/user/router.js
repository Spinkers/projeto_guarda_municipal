const express = require('express');
const controller = require('./controller');

const { validationMiddleware } = require('../../validation');
const schemas = require('./validations');

const router = express.Router();

router.post('/', validationMiddleware(schemas.register, 'body'), controller.register);
module.exports = router;
