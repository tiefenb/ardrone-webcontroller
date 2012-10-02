var socket = io.connect('http://localhost:4000');

$(document).ready(function() {
	
	$('#joystick').draggable({
		containment: 'parent',
		revert: true,
		revertDuration: 100,
		cursor: 'move',
		drag: function(event, ui) {
			var movement = controller.move(event.clientX, event.clientY);
			socket.emit('movement', movement);
		},
		stop: function(event, ui) {
			socket.emit('movement', { front: 0, side: 0 });
		}
	});
	
});

var controller = {};
controller.move =  function(x, y) {
	var fb = y; // front-back
	var lr = x; // left-right
	var tolerance = 10;
	var movement = {
		front: 0,
		side: 0
	};
	
	// front
	if(fb < 100-tolerance) {
		movement.front = Math.abs(((((10/(100-tolerance))*fb/10) - 1)*10));
		movement.front = Math.round(movement.front)/10;
		movement.front = (movement.front>1) ? 1 : movement.front;
	} else if(fb > 100+movement.tolerance) {
		movement.front = ((((10/(100+movement.tolerance))*fb/10) - 1)*10);
		movement.front = Math.round(movement.front)/10;
		movement.front = ((movement.front>1) ? 1 : movement.front) * -1;
	} else {
		movement.front = 0;
	}
	
	// side
	if(lr < 100-tolerance) {
		movement.side = Math.abs(((((10/(100-tolerance))*lr/10) - 1)*10));
		movement.side = Math.round(movement.side)/10;
		movement.side = (movement.side>1) ? 1 : movement.side;
	} else if(lr > 100+tolerance) {
		movement.side = ((((10/(100+tolerance))*lr/10) - 1)*10);
		movement.side = Math.round(movement.side)/10;
		movement.side = ((movement.side>1) ? 1 : movement.side) * -1;
	} else {
		movement.side = 0;
	}
	
	return movement;
};