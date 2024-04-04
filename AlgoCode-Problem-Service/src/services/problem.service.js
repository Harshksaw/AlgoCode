const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {

      //1. Sanitize the markdown content
      problemData.description = sanitizeMarkdown(problemData.description);

      const problem = this.problemRepository.createProblem(problemData);

      return problem;

  }


  async getAllProblems() {

      const problems = await this.problemRepository.getAllProblems();
      return problems;
  
  }


}

module.exports = ProblemService;
