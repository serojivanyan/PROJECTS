

const mongoose = require("mongoose");

const tourModelSchema = mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    langId:{
        type:String
    },
    typeId:{
        type:String
    },
    images:{
        type:[]
    }
 
})







// toursSchema.statics.findTours = function (tourId,callback) {
// 	var querry = {_id:tourId};
// 	return this.find(querry,callback);
// }

const tour = mongoose.model("tours",tourModelSchema);


module.exports = tour;