const { User } = require('../../../../models/user');
const encrypter = require('../../../../utils/encrypter');

async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if(!user) {
    return res.status(404).json({
      message: "Wrong email or password.",
    });
  }

  const hashedPassword = encrypter.hashPassword(password);

  if(hashedPassword !== user.password) {
    return res.status(404).json({
      message: "Wrong email or password.",
    });
  }

  const token = encrypter.createJWT(user.email);

  res.cookie('token', token, {
    expires: new Date(Date.now() + 604800000),
    secure: false,
    httpOnly: true,
  });

  res.status(200).json({
    ...user.toJSON(),
    password: undefined,
  });
}

module.exports = login;