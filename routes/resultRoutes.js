const express = require('express');

const resultsController = require('../controllers/resultscontroller');

const resultsRouter = express.Router();


resultsRouter.get("/results/:name/:year/:semester", resultsController.getStudentResult);

resultsRouter.post("/results", resultsController.addNewResults);

module.exports = resultsRouter;