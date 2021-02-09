const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
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