const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/leaguesystem");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use("/leaguesystem", require("./routes/api"));

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

app.listen(process.env.port || 4000, function(){
    console.log("Now listening for requests");
});

