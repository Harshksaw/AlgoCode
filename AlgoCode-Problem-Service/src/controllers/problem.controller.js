function pingProblemController(req, res) {
    res.json({message: 'Problem service is alive'})
}

function addProblem(req, res) {
    

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