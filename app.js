const express = require('express');
const db = require('./db/connection')
const routes = require('./routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.authenticate()
  .then(() => {
    console.log('Conectou ao BD!')
  })
  .catch(err => {
    console.warn("Ocorreu um erro ao conectar", err)
  });

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor JOB-HUB rodando na porta ${PORT}...`)
});

app.get('/', (req, res) => {
  res.send('JOB-HUB 🕵️‍♀️')
})