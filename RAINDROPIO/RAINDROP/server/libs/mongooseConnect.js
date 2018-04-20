const mongoose = require("mongoose");

module.exports = function(){
	console.log("mongoose log");
	mongoose.connect('mongodb://admin:raindropuser@ds149134.mlab.com:49134/raindropdatabase');
	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function(){
  		console.log("we are conected");
	});
};
