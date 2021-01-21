const { User } = require('../../../../models/user');
const { hashPassword } = require('../../../../utils/encrypter');

async function postUser(req, res) {
  const user = await User.create({
    email: req.body.email,
    name: req.body.name,
    password: hashPassword(req.body.password),
  });

  res.status(200).json(user.toJSON());
}

module.exports = postUser;