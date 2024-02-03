'use strict';

module.exports = {
  method: 'GET',
  path: '/api/student',
  config: {
    tags: ['api'],
    description: 'get student List',
  },
  handler: require('../handlers/getStudent')
};
