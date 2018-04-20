const mongoose = require("mongoose");

module.exports = function(){
	console.log("mongoose log");
	mongoose.connect('mongodb://hospitalProjectAdmin:12784596hospital@ds139342.mlab.com:39342/hospitaldatabase');
	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function(){
  		console.log("we are conected");
	});
};
