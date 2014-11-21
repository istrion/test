var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'home_index_view',
    
    itinialize : function () {
        console.log("test");    
    },
    
    postRender : function () {
        io = require("socketIoClient");
        var socket = io.connect('http://localhost');
        socket.emit('connection', { my: 'data' });
        socket.on('news', function (data) {
          console.log(data);
          socket.emit('my other event', { my: 'data' });
        });
    }
});
module.exports.id = 'home/index';
