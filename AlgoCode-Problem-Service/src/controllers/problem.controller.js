const NotImplemented = require("../errors/notimplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());
  //Flow -> Controller -> Service -> Repository

function pingProblemController(req, res) {
  return res.json({message: 'Problem controller is up'});
}

async function addProblem(req, res, next) {
  try {
    const newproblem = await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Problem created successfully",
      error: {},
      data: newproblem,
    });
  } catch (error) {
    next(error);
  }
}
async function getProblems(req, res) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problems fetched successfully",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
  // res.json({message: 'Problem service is alive'})
}

async function getProblem(req, res){  //  <- service <- repository

  try {

    const problemId = req.params.id;

    const problemResponse = await problemService.getProblem(problemId);
    return res.status(StatusCodes.OK).json({
      success:true,
      message: 'Problem fetched successfully',
      error:{},
      data:problemResponse,
    })


    
  } catch (error) {
    console.log(error)
    next(error);


    
  }
}

function deleteProblem(req, res) {}
function updateProblem(req, res) {}

module.exports = {
  addProblem,
  getProblems,
  getProblem,
  deleteProblem,
  updateProblem,
  pingProblemController
};
