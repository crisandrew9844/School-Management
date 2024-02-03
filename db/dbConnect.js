const Mongoose = require('mongoose'); 
Mongoose.connect('mongodb+srv://admin:admin@cluster0.uahqfv5.mongodb.net/?retryWrites=true&w=majority');  
const db = Mongoose.connection;

exports.Mongoose = Mongoose;  
exports.db = db;  