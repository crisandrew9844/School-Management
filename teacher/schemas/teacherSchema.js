const mongoose = require('mongoose')
// define Schema
const Schema = mongoose.Schema
//Task Schema
const teacherShema = new Schema({
  name:{ type:String, required:true},
  employeeId:{ type:String, required:true}
})
  // compile schema to model
  module.exports = mongoose.model('teacher', teacherShema);

