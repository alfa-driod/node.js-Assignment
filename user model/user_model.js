const mongoose= require('mongoose');
const userSchema=mongoose.Schema({
firstName:{
    type:String,

},
lastName:{
    type:String,

},
date_Of_Birth:{
    type:Date,

},

});
const user=mongoose.model('user',userSchema)
module.exports=user;