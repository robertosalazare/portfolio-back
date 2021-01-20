const { User } = require('../../../../models/user');
const { hash } = require('../../../../utils/crypto');

async function postUser(req, res) {
  const user = await User.create({
    email: req.body.email,
    name: req.body.name,
    password: hash(req.body.password),
  });

  res.status(200).json(user.toJSON());
}

module.exports = postUser;