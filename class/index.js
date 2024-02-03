
exports.plugin = {
    name: 'class',
    register: (server) => {
         server.route(require('./routes/addClass'));               
         server.route(require('./routes/getClass'));        

    }
};