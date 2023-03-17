const express = require('express');
const peopleDB = require('../db/peopleDB');
const conn = require('../db/connection');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [result] = await conn.execute(('SELECT * FROM people'));
    if (result) res.status(200).json({ result });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Tistreza' });
  }
});

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const [result] = await peopleDB.insert(person);
    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${ result.insertId }`
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' })
  }
});

module.exports = router;