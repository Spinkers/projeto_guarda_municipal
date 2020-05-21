const JWT = require('jsonwebtoken');
const config = require('../../../config');

module.exports = {
  signIn: (req, res) => {
    const { user } = req;

    // Generate token
    const token = JWT.sign({}, config.get('authentication.jwtSecret'), {
      audience: 'gm-web-admin',
      subject: `${user.id}`,
    });

    res.json({ token: `bearer ${token}`, id: user.id, name: user.fullName });
  },
  verifyToken: (_req, res) => {
    res.sendStatus(200);
  },
};
