const teams = require('../data/teams');

const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];
  if (requiredProperties.every((p) => p in req.body)) next();
  else res.sendStatus(400);
};

module.exports = validateTeam;