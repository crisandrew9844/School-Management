'use strict';

module.exports = {
  method: 'POST',
  path: '/api/teacher',
  options: {
    tags: ['api'],
    description: 'Add teacher',
    validate: require('../validations/addTeacher')
  },
  handler: require('../handlers/addTeacher')
};
