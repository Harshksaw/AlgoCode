const NotFound = require("../errors/notfound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      //porblem.protype.find.mockResolvedValue([])
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblemById(problemId) {

    if(!problemId){
      throw new NotFound('Problem', problemId)
    }
   

    const problem = await Problem.findById(problemId);
    return problem;
  }

  async deleteProblem(id) {
    try {
        const deletedProblem = await Problem.findByIdAndDelete(id);
        if(!deletedProblem) {
            throw new NotFound("problem", id);
        }
        return deletedProblem;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

}

module.exports = ProblemRepository;
