// const mongoose = require("mongoose");
// mongoose.connect('mongodb://admin:12784596@ds143342.mlab.com:43342/hospital');

// var db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we are conected");
// });
// var WorkerSchema = mongoose.Schema({
// 	name:String,
// 	lastname:String,
// 	age:Number
// })

// var worker = mongoose.model('Worker',WorkerSchema);
// var workerAshotyan = new worker({name:"Armen",
// 								lastname:"Ashotyan",
// 								age:52
// 							});

// workerAshotyan.save(function (err,worker) {
//   if (err) return console.error(err);
//   console.log("Good Bye")

// });
// console.log("hello");

// worker.find(function (err, workers) {
//   if (err) return console.error(err);
//   console.log(workers);
// });
// worker.findOne({ _id:"59552d7eb50d220fd8742425" }, {name:0 }, function (err, person) {
//   if (err) return console.log(err);
//   console.log("person",person); // Space Ghost is a talk show host.
// })