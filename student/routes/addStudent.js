'use strict';

module.exports = {
  method: 'POST',
  path: '/api/student',
  options: {
    tags: ['api'],
    description: 'Add Student',
    validate: require('../validations/addStudent')
  },
  handler: require('../handlers/addStudent')
};
