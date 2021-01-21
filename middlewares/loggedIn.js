const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

async function loggedIn(req, res, next) {
  const token = req.cookies.token || '';

  if(token) {
    try {
      const { email } = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.get(email);
      req.user = user;

      next();
    } catch (error) {
      res.clearCookie('token');

      res.status(401).json({
        message: 'Unauthorized.',
      });
    }
  } else {
    res.status(401).json({
      message: 'Unauthorized.',
    });
  }
}

module.exports = loggedIn;