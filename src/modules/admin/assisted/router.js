const express = require('express');
const multer = require('multer');
const uploadConfig = require('../../config/upload');

const controller = require('./controller');

const { validationMiddleware } = require('../../validation');
const schemas = require('./validations');

const router = express.Router();
const upload = multer(uploadConfig);

router.post(
  '/',
  upload.single('photograph'),
  validationMiddleware(schemas.register, 'file'),
  controller.register,
);
module.exports = router;
