'use strict';

module.exports = {
  method: 'POST',
  path: '/api/class',
  options: {
    tags: ['api'],
    description: 'Add Class',
    validate: require('../validations/addClass')
  },
  handler: require('../handlers/addClass')
};
