const authUser = (req, res, next) => {
  if (!req.teams.teams.includes(req.body.sigla)) {
    return res.status(422).json({ message: 'Usuário não autorizado à manipulação deste time!' });
  }

  next();
};

module.exports = authUser;