const Joi = require('@hapi/joi');
const { errorMessages } = require('../../validation/i18n');

module.exports = {
  register: Joi.object({
    fullName: Joi.string()
      .max(255)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    login: Joi.string()
      .max(10)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    email: Joi.string()
      .max(60)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    permissionID: Joi.number()
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    password: Joi.string()
      .max(60)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),
  }),
};
