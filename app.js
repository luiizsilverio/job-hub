const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')

const db = require('./db/connection')
const routes = require('./routes')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// handlebars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static folder
app.use(express.static(path.join(__dirname, 'public')))

// db connection
db.authenticate()
  .then(() => {
    console.log('Conectou ao BD!')
  })
  .catch(err => {
    console.warn("Ocorreu um erro ao conectar", err)
  });

app.get('/', (req, res) => {
  res.render('index')
})

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor JOB-HUB rodando na porta ${PORT}...`)
});

