const Results = require('../models/Results');


exports.addNewResults  = async (req,res) => {
    try {

        console.log("NEW REQ");
        console.log(req.body)

        let checkResultExist = await Results.findOne({year: req.body.year, semester: req.body.semester, name: req.body.name});

        if(checkResultExist) {
            return res.status(409).send({message: "Result for semester already exist"})
        }

        let newResult = new Results(req.body);

        await newResult.save();

        res.status(200).send({message: "Result Added Successfuly"});

    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "There was an error with request"})
    }
}


exports.getStudentResult = async (req,res) => {
    try {
        // console.log("REQUEST GOT HERE");
        let year = req.params.year;
        let name = req.params.name;
        let semester = req.params.semester;

        // console.log(year);
        // console.log(name);
        // console.log(semester);
        let allData = await Results.find({});
        // console.log('ALL DATA');
        // console.log(allData);

        let studentResult = await Results.findOne({year: year, name: name, semester: semester});
        console.log('RESULT');
        console.log(studentResult)
        return res.status(200).send({data: studentResult, message: "Student Result"});
    } catch (error) {
        return res.status(500).send({message: "There was an error"});
    }
}
