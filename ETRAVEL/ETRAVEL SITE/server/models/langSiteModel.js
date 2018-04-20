const mongoose = require("mongoose");

const langSiteModelSchema = mongoose.Schema({
  en:Object,
  ru:Object,
  arm:Object
	
})

langSiteModelSchema.statics.findLang = function (langId,callback) {
	var querry = {_id:langId};
	return this.find(querry,callback);
}

const langSite = mongoose.model("langSite",langSiteModelSchema);


module.exports = langSite;