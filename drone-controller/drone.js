var arDrone = require('ar-drone');
var control = arDrone.createUdpControl();
var io = require('socket.io').listen(4000);

var ref  = {
	emergency: true
};
var pcmd = {};

io.sockets.on('connection', function (socket) {
  socket.on('movement', function (data) {
    console.log('movement', data);
		if(data.front) pcmd.front = data.front || 0;
		if(data.back) pcmd.back = data.back || 0;
		if(data.left) pcmd.left = data.left || 0;
		if(data.right) pcmd.right =  data.right || 0;
  });

	socket.on('takeoff', function (data) {
    console.log('takeoff');
		ref.emergency = false;
		ref.fly       = true;
		pcmd.up = 0.1;
		setTimeout(function() {
		  pcmd.up = 0;
		}, 1000);
  });

	socket.on('land', function (data) {
    console.log('land');
		ref.fly = false;
  });

	socket.on('recover', function (data) {
    console.log('Recovering from emergency mode if there was one ...');
		ref.fly = false;
		ref.emergency = true;
  });

});

setInterval(function() {
  control.ref(ref);
  control.pcmd(pcmd);
  control.flush();
}, 30);

console.log('now take off your drone!');