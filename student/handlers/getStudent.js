'use strict';

const Boom = require('@hapi/boom');
const studentModel = require('../schemas/studentSchema');

module.exports = async (request, h) => {
  const {
  } = request;
  try {
  
    const studentData = await studentModel.find();

    return {
      statusCode: 200,
      message: 'students Fetched Successfully',
      data: studentData
    };
  } catch (e) {
    return Boom.badRequest(e);
  }
};
