const mongoose = require('mongoose');

const Problem = new mongoose.Schema({
    title:{
        typeof: String,
        required: true
    },
    description:{
        typeof: String,
        required:[true, 'Description is required']
    },
    difficulty:{
        typeof: String,
        enum: ['easy', 'medium', 'hard'],
        required: true,
        default: 'easy'
    },
    testCases:[
        {
            input: {
                typeof: String,
                required: true
            }
            ,output: {
                typeof: String,
                required: true
            }   
        }
    ],
    editorial:{
        typeof: String
    }


})