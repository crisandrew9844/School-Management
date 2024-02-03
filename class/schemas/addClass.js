const mongoose = require('mongoose')
// define Schema
const Schema = mongoose.Schema
//Task Schema
const classShema = new Schema({
  className:{ type:String, required:true}
})
  // compile schema to model
  module.exports = mongoose.model('class', classShema);

