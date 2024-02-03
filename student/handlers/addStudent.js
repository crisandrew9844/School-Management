'use strict';

const studentModel = require('../schemas/studentSchema');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
  
    const data = Object.assign({}, payload);
    const studentData = await studentModel.create(data);

    return {
      statusCode: 201,
      message: `student is created`,
      data: studentData
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
