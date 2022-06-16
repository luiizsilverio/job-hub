const express = require("express");
const Job = require('../models/Job');
const router = express.Router();

// renderiza a página de cadastro da vaga
router.get('/add', (req, res) => {
  res.render('add')
});

// rota de inclusão de job
router.post('/add', async (req, res) => {
  let { title, salary, company, description, email, new_job } = req.body;

  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  })
  .then(() => res.redirect('/'))
  .catch(err => console.warn(err));
});

// detalhes da vaga
router.get('/details/:id', async (req, res) => {
  const { id } = req.params

  Job.findOne({
    where: { id }
  })
  .then(job => res.render('details', { job }))
  .catch(err => console.warn(err))
})

module.exports.jobsRoutes = router
