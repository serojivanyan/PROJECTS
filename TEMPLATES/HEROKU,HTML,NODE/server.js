const express= require("express");
const bcrypt = require('bcrypt');
const session =  require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var app = express();
var userRouter = require("./routes/userRouter.js");

// var MongoStore = require('connect-mongo')(session);
//connect to MongoDB
mongoose.connect('.mlab.com:49974/reguserdatabase');
var db = mongoose.connection;


//handle mongo error 
db.on("error",console.error.bind(console,"connection error"));
db.once("open",function(){
    console.log("We are connected");
});


app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// // serve static files from template
// app.use(express.static(__dirname + '/templateLogReg'));


//use sessions for tracking logins
// app.use(session({
//    secret: 'reguser',
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//         mongooseConnection: db
//     })
// }));


  
//parse incoming request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use("/user",userRouter);

// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
  
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//   app.all("/*", function(req, res, next){
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     next();
//   });

// listen on port 3000
// 
app.set('port', (process.env.PORT || 5000)); 
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });

