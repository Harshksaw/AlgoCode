const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    try {
      //1. Sanitize the markdown content
      problemData.description = sanitizeMarkdown(problemData.description);

      const problem = this.problemRepository.createProblem(problemData);

      return problem;
    } catch (error) {}
  }
}

module.exports = ProblemService;
