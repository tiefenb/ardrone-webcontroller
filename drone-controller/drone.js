var arDrone = require('ar-drone');
var control = arDrone.createUdpControl();
var io = require('socket.io').listen(4000);

var ref  = {
	emergency: true
};
var pcmd = {
	front:0,
	left:0
};

io.sockets.on('connection', function (socket) {
  socket.on('movement', function (data) {
		if((pcmd.left !== data.left) || (pcmd.front !== data.front)) {
			pcmd.front = data.front;
			pcmd.left = data.left;
			sendControls();
			console.log('movement', JSON.stringify(data), JSON.stringify(pcmd));
		}
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
		sendControls();
  });	

	socket.on('recover', function (data) {
    console.log('Recovering from emergency mode if there was one ...');
		ref.fly = false;
		ref.emergency = true;
		sendControls();
  });

});

var sendControls = function() {
	control.ref(ref);
 	control.pcmd(pcmd);
	control.flush();
};

console.log('now take off your drone!');