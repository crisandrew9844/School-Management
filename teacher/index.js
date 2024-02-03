
exports.plugin = {
    name: 'teacher',
    register: (server) => {
         server.route(require('./routes/addTeacher'));               
        //  server.route(require('./routes/getStudent'));        

    }
};