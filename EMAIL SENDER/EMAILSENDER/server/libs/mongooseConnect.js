const mongoose = require("mongoose");

module.exports = function(){
	console.log("mongoose log");
	mongoose.connect('mongodb://touradmin:password@ds111138.mlab.com:11138/tourdatabase');
	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function(){
  		console.log("we are conected");
	});
};
