const express = require("express");
const bodyParser = require('body-parser');
const request  = require("request");
const path = require("path");

const mongooseConnection = require("./server/libs/mongooseConnect.js");

const apiRouter = require("./server/routes/api.js");
const postRouter = require("./server/routes/postRouter.js");
const userRouter = require("./server/routes/userRouter.js");
// const commentRouter = require("./routes/commentRouter.js");

const app = express();

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'dist')));


//connect mongodb
mongooseConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// // set static folder
// app.use(express.static(path.join(__dirname, "client" )))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// apply the routes to our application
app.use('*',apiRouter);
app.use('/posts',postRouter);
app.use('/users',userRouter);
// app.use('/feature-requests',commentRouter);




app.listen(3000,function(){
  console.log("Server succesfully started (app.js)");
});
