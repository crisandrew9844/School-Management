'use strict';

const Joi = require('joi');

module.exports = {
  payload: Joi.object({
    className: Joi.string().required()
  })
};
