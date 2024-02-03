const mongoose = require('mongoose')
// define Schema
const Schema = mongoose.Schema
//Task Schema
const studentShema = new Schema({
  Name:{ type:String, required:true},
  className:{ type:String, required:true},
  classId:{ type:String, required:true}
})
  // compile schema to model
  module.exports = mongoose.model('student', studentShema);

