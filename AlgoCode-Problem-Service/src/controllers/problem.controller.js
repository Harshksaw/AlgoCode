const NotImplemented = require("../errors/notimplemented.error")

function pingProblemController(req, res) {
    res.json({message: 'Problem service is alive'})
}

function addProblem(req, res, next) {
    try {
        
        throw new NotImplemented('addProblem')
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