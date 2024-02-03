'use strict';

const Boom = require('@hapi/boom');
const classModel = require('../schemas/addClass');

module.exports = async (request, h) => {
  const {
  } = request;
  try {
  
    const ClassData = await classModel.find();

    return {
      statusCode: 200,
      message: 'Class Fetched Successfully',
      data: ClassData
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
