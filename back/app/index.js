const express = require('express');
const knex = require('knex');
const cors = require('cors');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);
const app = express()
const port = 3000

app.use(cors());  
app.use(express.json());

app.get('/todos', async (req, res) => {
  try {
    const todos = await db('todos').select('*');
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/todos', async (req, res) => {
  try {
    const response = await db('todos').insert(req.body);
    if(response) {
      res.status(201).json({})
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

app.put('/todos/:id', async (req, res) => {
  try {
    const response = await db('todos').where({id: req.params.id}).update(req.body);
    if(response) {
      res.status(204).json({});
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
