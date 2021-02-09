const postUserSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
    'name',
    'email',
    'password',
  ],
  properties: {
    email: {
      type: 'string',
      pattern: "[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+",
    },
    password: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
  },
};

module.exports = postUserSchema;