const fs = require('fs').promises;
const path = require('path');

const apiCredentials = async (req, res, next) => {
  const token = req.header('X-API-TOKEN');
  const authdata = await fs
    .readFile(path.resolve(__dirname, '../authdata.json'), { encoding: 'utf-8' });
  const authorized = JSON.parse(authdata);

  if (!(token in authorized)) {
    return res.status(401).json({ message: 'Token inválido ou expirado!' });
  }
  req.teams = authorized[token];
  next();
};

module.exports = apiCredentials;