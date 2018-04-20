const mongoose = require("mongoose");

const tourModelSchema = mongoose.Schema({
    text:{
            ru:{
                type:Object
            },
            en:{
                type:Object
            },
            arm:{
                type:Object
            }
    },
    typeModel:{
        type:String
        },
    fileInfo:{
        type:[]
        }
})

const tour = mongoose.model("tours",tourModelSchema);


module.exports = tour;