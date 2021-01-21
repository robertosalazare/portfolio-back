const { User } = require('../../../../models/user');

async function getAllUsers(req, res) {
  const users = await User.scan().exec();

  res.status(200).json(users);
}

module.exports = getAllUsers;