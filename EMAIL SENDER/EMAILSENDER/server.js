const express = require("express");
const bodyParser = require('body-parser');
const request  = require("request");
const path = require("path");
const http = require("http");
const cookieParser = require('cookie-parser');

var sendmail= require("./server/methods/actions")

const mongooseConnection = require("./server/libs/mongooseConnect.js");
// var ruRouter = require("./server/routes/ruRouter.js");
// var enRouter = require("./server/routes/enRouter.js");
// var armRouter = require("./server/routes/armRouter.js");
// var aboutRouter = require("./server/routes/aboutRouter.js");





const app = express();

app.use(express.static(path.join(__dirname, 'dist')));


//connect mongodb
mongooseConnection();
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}) );

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// app.use('/settings',(req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.use('/dashboard',(req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.use("/sendmail/",sendmail.sendMail)

// app.use('/ru',(req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
// app.use('/arm',(req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
// app.use('/en',(req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

// app.use("/site",function(req,res){
//    res.redirect("/en");
 
// })
// app.use("/ru",ruRouter);
// app.use("/en",enRouter);
// app.use("/arm",armRouter);
// app.use("/about",aboutRouter);
const port = process.env.PORT || '5000';
app.set('port',port);
const server = http.createServer(app);
server.listen(port,() => console.log('Running'))
