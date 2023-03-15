const teams = require('../data/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const idExists = teams.find((t) => t.id === id);
  if (idExists) next();
  else res.sendStatus(404);
};

module.exports = existingId;