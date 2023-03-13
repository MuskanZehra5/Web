//import mongooes for creation of new schema
import mongoose from "mongoose";

const todoitemschema = mongoose.Schema({

    task:{
        type: String,
        required: true
    }
});

// module.exports = mongoose.model('todo',todoitemschema);

export default mongoose.model('todo',todoitemschema);