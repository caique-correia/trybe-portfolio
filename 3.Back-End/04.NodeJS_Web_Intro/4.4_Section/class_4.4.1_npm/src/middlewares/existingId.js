const teams = require('../data/teams');

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const idExists = teams.find((t) => t.id === id);
  if (!idExists) return res.status(404).json({ message: 'Time não encontrado.' });
  next();
};

module.exports = existingId;