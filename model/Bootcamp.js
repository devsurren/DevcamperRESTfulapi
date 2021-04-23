const mongoose = require('mongoose');

const bootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Bootcamp Must Have Name"],
        unique:[true,"Bootcamp Name Must be Unique"],
        maxlenght:[50,"Name Not Morethan 50 Characters"]
    },
    slug:String,
    description:{
        type:String,
        maxlength:[500,"Not Morethan 500 characters"]
    },
    carrers:{
        type:[String],
        enum:["web design,web development,data science,business"],
        required:[true,"Carrers Option Must"]
    }
})

module.exports=mongoose.model('bootcamp',bootcampSchema);