'use strict';

const ClassModel = require('../schemas/addClass');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
  
    const data = Object.assign({}, payload);
    const ClassData = await ClassModel.create(data);

    return {
      statusCode: 201,
      message: `class is created`,
      data: ClassData
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
