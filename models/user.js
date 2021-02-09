const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  "email": {
    "type": String,
    "validate": /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
    "required": true,
  },
  "name": {
    "type": String,
    "required": true
  },
  "password": {
    "type": String,
    "required": true
  }
}, {
  "timestamps": false
});

const User = model('Users', UserSchema);

module.exports = { UserSchema, User };
