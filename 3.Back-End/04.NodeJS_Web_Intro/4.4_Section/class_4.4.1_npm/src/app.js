const express = require('express');
require('express-async-errors');

const app = express();
const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = require('./data/teams');

app.use(express.json());
app.use(apiCredentials);

const authUser = require('./middlewares/authUser');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', authUser, validateTeam, (req, res) => {
  if (teams.find((t) => t.sigla === req.body.sigla)) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla!' });
  };
  
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', authUser, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;