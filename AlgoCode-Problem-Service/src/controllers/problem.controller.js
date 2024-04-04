const NotImplemented = require("../errors/notimplemented.error")
const {ProblemService} = require('../services')
const {ProblemRepository} = require('../repositories');
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());


function pingProblemController(req, res) {
    res.json({message: 'Problem service is alive'})
}

async function addProblem(req, res, next) {
    try {
        const newproblem = await problemService.createProblem(req.body);

        return res.status(StatusCodes.CREATED).json({
            success:true,
            message: 'Problem created successfully',
            error:{},
            data: newproblem
        })


    } catch (error) {
        next(error)
    }

    

}
function getProblems(req, res) 
{
    res.json({message: 'Problem service is alive'})
    

}

function deleteProblem(req, res) {
    

}
function updateProblem(req , res){

}

module.exports = {
    addProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}