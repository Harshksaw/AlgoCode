const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
    title:{
      type: String,
        required: true
    },
    description:{
      type: String,
        required:[true, 'Description is required']
    },
    difficulty:{
      type: String,
        enum: ['easy', 'medium', 'hard'],
        required: true,
        default: 'easy'
    },
    testCases:[
        {
            input: {
              type: String,
                required: true
            }
            ,output: {
              type: String,
                required: true
            }   
        }
    ],
    editorial:{
      type: String,
        required: false
    }


})

const Problem = mongoose.model('Problem', ProblemSchema);
module.exports = Problem;