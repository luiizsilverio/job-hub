const express = require("express");
const Job = require('../models/Job');
const jobsRouter = express.Router();

jobsRouter.post('/add', (req, res) => {
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
  .catch((err) => console.warn(err));
});

module.exports = jobsRouter;
