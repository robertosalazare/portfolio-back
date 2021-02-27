async function me(req, res) {
  const user = { ...req.user._doc };
  delete user.password;
  delete user.__v;

  res.status(200).send(user);
}

module.exports = me;