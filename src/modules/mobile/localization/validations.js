const Joi = require('@hapi/joi');
const { errorMessages } = require('../../validation/i18n');

module.exports = {
  position: Joi.object({
    position: Joi.array()
      .max(2)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),
  }),
};
