const { Schema, model } = require('dynamoose');
const { v4: uuidv4 } = require('uuid');

const PostSchema = new Schema({
  "id": {
    "type": String,
    "hashKey": true,
    "required": true,
    "default": uuidv4()
  },
  "title": {
    "type": String,
    "required": true
  },
  "content": {
    "type": String,
    "required": true
  },
  "excerpt": {
    "type": String,
    "required": true
  },
  "featuredImage": String,
}, {
  timestamps: true,
});

const Post = model('Posts', PostSchema);

module.exports = { Post, PostSchema }