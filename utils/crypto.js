const crypto = require('crypto');

module.exports = {
  hash: function(str) {
    const hash = crypto.createHmac('sha256', process.env.PASSWORD_SECRET).update(str).digest('hex');

    return hash;
  },
};
