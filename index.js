const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const resultsRouter = require('./routes/resultRoutes');

const app = express();

app.use(express.json());
// app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors("*"));

app.use("/status", (req,res) => {
    return res.send({message: "ALL GOOD"})
})

app.use(resultsRouter);


var port = process.env.PORT || 8020

mongoose.connect('mongodb://localhost:27017/uni-douala', { useUnifiedTopology: true, useNewUrlParser: true,}, (err,res) => {
    if(err) {
        console.log(err);
    }else {
        console.log("CONNECTED TO DATABASE");
    }
})

app.listen(port,(err) => {
    if(err) {
        console.log("There was an error");
        console.log(err)
    }else {
        console.log(`SERVER RUNNING ON PORT ${port}`)
    }
})