const mongoose = require("mongoose");

const aboutModelSchema = mongoose.Schema({
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

const about = mongoose.model("about",aboutModelSchema);


module.exports = about;