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

    cpf: Joi.string()
      .max(11)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    street: Joi.string()
      .max(300)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    district: Joi.string()
      .max(60)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    number: Joi.string()
      .max(5)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    cep: Joi.string()
      .max(8)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    city: Joi.string()
      .max(20)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    state: Joi.string()
      .max(15)
      .required()
      .messages({
        'any.required': errorMessages.MESSAGES.ANY_REQUIRED,
      }),

    observation: Joi.string()
      .max(300)
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
