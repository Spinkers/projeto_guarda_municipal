const express = require('express');
const controller = require('./controller');
const auth = require('../auth');

const { secureJwt } = auth;

const { validationMiddleware } = require('../../validation');
const schemas = require('./validations');

const router = express.Router();

router.post(
  '/',
  [secureJwt, validationMiddleware(schemas.position, 'body')],
  controller.localization,
);
module.exports = router;
