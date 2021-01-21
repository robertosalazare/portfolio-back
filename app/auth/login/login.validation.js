const loginSchema = {
  type: 'object',
  additionalProperties: false,
  required: [
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
  },
};

module.exports = loginSchema;