const mongoose = require('mongoose');

//create the option Schema
const OptionSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },
    text:{
        type:String,
        required:true
    },
    votes:{
        type:Number
    },
    link_to_vote:{
        type:String
    }


},
    {
        timestamps:true
    }
);

const Option = mongoose.model('Option', OptionSchema);
module.exports = Option;