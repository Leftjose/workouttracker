const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,

    }
}




excercise: {[
    type: {
        type: String,
        required: ""

    }
    name: {
        type: String,
    }
    weight: {
        type: Number,
    }
    sets: {
        type: Number,

    }
    reps: {
        type: Number,


    }
    duration: {
        type: String 


    }
    distance: {
        type: Number
        
    }

]})
