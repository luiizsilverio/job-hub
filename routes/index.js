const express = require("express");

const jobsRouter = require('./jobs.routes')

const routes = express.Router();

routes.use('/jobs', jobsRouter);

module.exports = routes
