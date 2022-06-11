const express = require("express");

const { jobsRoutes } = require('./jobs.routes')

const routes = express.Router();

routes.use('/jobs', jobsRoutes);

module.exports = routes
