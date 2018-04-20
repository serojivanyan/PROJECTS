const mongoose = require("mongoose");

const slideTextModelSchema = mongoose.Schema({
    text:{
            ru:{
                type:String
            },
            en:{
                type:String
            },
            arm:{
                type:String
            }
    },
   
})

const slidetext = mongoose.model("slidetext",slideTextModelSchema);


module.exports = slidetext;