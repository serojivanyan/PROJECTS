const express = require("express");
const bodyParser = require('body-parser');
const request  = require("request");

const mongooseConnection = require("./libs/mongooseConnect.js");

const workerRouter = require("./routes/worker.js");
const patientRouter = require("./routes/patient.js");
const doctorRouter = require("./routes/doctor.js");
const hospitalRouter = require("./routes/hospital.js");

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//connect mongodb
mongooseConnection();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// apply the routes to our application
app.use('/workers', workerRouter);
app.use('/patients', patientRouter);
app.use('/doctors', doctorRouter);
app.use('/hospitals', hospitalRouter);


app.listen(3000,function(){
	console.log("Server succesfully started");
});

