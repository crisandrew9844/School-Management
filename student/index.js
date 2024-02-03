
exports.plugin = {
    name: 'student',
    register: (server) => {
         server.route(require('./routes/addStudent'));               
         server.route(require('./routes/getStudent'));        

    }
};