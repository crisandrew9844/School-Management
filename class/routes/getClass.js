'use strict';

module.exports = {
  method: 'GET',
  path: '/api/class',
  config: {
    tags: ['api'],
    description: 'get class List',
  },
  handler: require('../handlers/getClass')
};
