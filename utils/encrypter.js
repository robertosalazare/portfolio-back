const crypto = require('crypto');
const jwt = require('jsonwebtoken');

module.exports = {
  hashPassword: function(str) {
    const hash = crypto.createHmac('sha256', process.env.PASSWORD_SECRET).update(str).digest('hex');

    return hash;
  },
  createJWT: function(email) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    return token;
  },
};
