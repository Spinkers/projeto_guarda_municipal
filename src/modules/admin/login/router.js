const express = require('express');
const controller = require('./controller');
const { validationMiddleware } = require('../../validation');
const schemas = require('./validations');
const auth = require('../auth');

const router = express.Router();

const { secureLocal, secureJwt } = auth;

router.post('/', validationMiddleware(schemas.login, 'body'), secureLocal, controller.signIn);
router.post('/verifyToken', secureJwt, controller.verifyToken);
module.exports = router;
