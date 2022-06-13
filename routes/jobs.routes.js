const express = require("express");
const Job = require('../models/Job');
const router = express.Router();

router.get('/add', (req, res) => {
  res.render('add')
});

router.post('/add', async (req, res) => {
  let { title, salary, company, description, email, new_job } = req.body;

  try {
    const job = Job.create({
      title,
      description,
      salary,
      company,
      email,
      new_job
    });

    res.status(201).json({ message: "Job incluído com sucesso!"});  //res.redirect('/'))
  }
  catch(err) {
    console.warn(err);
  }
});

module.exports.jobsRoutes = router
