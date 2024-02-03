'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    Name: Joi.string().required(),
    className: Joi.string().required(),
    classId: Joi.string().required()

  })
};
