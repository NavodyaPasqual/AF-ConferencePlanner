const mongoose = require("mongoose");

/**
 * user model
 * @type {*}
 */
const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    contactNo:{type:String,required:true},
    password:{type:String,required:true},
    type:{type:String,required:true},
    id:{type:String},
});

/**
 * export user model as 'User'
 */

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;