const { Schema, model } = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new Schema({
  "id": {
    "type": String,
    "hashKey": true,
    "required": true,
    "default": uuidv4()
  },
  "email": {
    "type": String,
    "validate": /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
    "required": true
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
  "timestamps": true
});

const User = model('Users', UserSchema);

module.exports = { UserSchema, User };
