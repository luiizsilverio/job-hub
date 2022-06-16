const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const db = require('./db/connection')
const routes = require('./routes')
const Job = require('./models/Job')

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// handlebars
// app.set('views', path.join(__dirname, 'views')) // não precisa, o padrão já é buscar na pasta views
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

// routes
app.get('/', (req, res) => {
  const busca = req.query.job

  if (!busca) {
    Job.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    })
    .then(jobs => {
      res.render('index', { jobs })
    })
    .catch(err => console.warn(err))

  } else {
    Job.findAll({
      where: {title: {[Op.like]: "%" + busca + "%"}},
      order: [
        ['createdAt', 'DESC']
      ]
    })
    .then(jobs => {
      res.render('index', { jobs, busca })
    })
    .catch(err => console.warn(err))
  }
})

app.use(routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor JOB-HUB rodando na porta ${PORT}...`)
});

