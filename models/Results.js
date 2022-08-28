const mongoose = require("mongoose");

const Results = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    matricule: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Results",Results);