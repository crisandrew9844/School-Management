'use strict';

const teacherModel = require('../schemas/teacherSchema');
const Boom = require('@hapi/boom');

module.exports = async (request, h) => {
  const { payload } = request;
  try {
    // Assuming teacherModel is a Mongoose model
    const teacherData = await teacherModel.create(payload);

    return {
      statusCode: 201,
      message: `Teacher is created`,
      data: teacherData
    };
  } catch (e) {
    return Boom.badRequest(e.message || 'Error creating teacher');
  }
};
