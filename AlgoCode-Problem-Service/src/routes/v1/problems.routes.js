const express = require('express');

const { ProblemController  } = require('../../controllers');

const problemRouter = express.Router();

// If any request comes and route continues with /ping, we map it to pingProblemController
problemRouter.get('/ping', ProblemController.pingProblemController);

problemRouter.get('/:id', ProblemController.getProblems);

problemRouter.get('/', ProblemController.getProblems);

problemRouter.post('/', ProblemController.addProblem);

problemRouter.delete('/:id', ProblemController.deleteProblem);

problemRouter.put('/:id', ProblemController.updateProblem);


module.exports = problemRouter;