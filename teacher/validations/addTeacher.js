'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    name: Joi.string().required(),
    employeeId: Joi.string().required()

  })
};
