async function logout(_, res) {
  res.clearCookie('token');

  return res.status(200).json('success');
}

module.exports = logout;