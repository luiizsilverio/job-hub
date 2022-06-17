const express = require("express");
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const { jobsRoutes } = require('./jobs.routes')
const Job = require('../models/Job')

const routes = express.Router();

routes.get('/', (req, res) => {
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

routes.use('/jobs', jobsRoutes);

module.exports = routes
