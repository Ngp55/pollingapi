const mongoose = require('mongoose');

//Creating the Question Schema in mongodb
const QuestionSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    options:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ]
},
{timestams:true});

// module.exports = mongoose.model('Question', QuestionSchema);
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;