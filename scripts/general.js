var socket = io.connect('http://localhost:4000');

$(document).ready(function() {
<<<<<<< HEAD
  
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
  
=======
	
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
			socket.emit('movement', { front: 0, left: 0, back: 0, right: 0 });
		}
	});
	
	$('#box div.arrow').on('mouseup', function() {
		socket.emit('movement', { front: 0, left: 0, back: 0, right: 0 });
	});

>>>>>>> Arrow Controls
});

var controller = {};
controller.move =  function(x, y) {
<<<<<<< HEAD
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
  } else if(fb > 100+tolerance) {
    movement.front = ((((10/(100+tolerance))*fb/10) - 1)*10);
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


  
=======
	var fb = y; // front-back
	var lr = x; // left-right
	var tolerance = 10;
	var movement = {
		front: 0,
		left: 0
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
	
	// left
	if(lr < 100-tolerance) {
		movement.left = Math.abs(((((10/(100-tolerance))*lr/10) - 1)*10));
		movement.left = Math.round(movement.left)/10;
		movement.left = (movement.left>1) ? 1 : movement.left;
	} else if(lr > 100+tolerance) {
		movement.left = ((((10/(100+tolerance))*lr/10) - 1)*10);
		movement.left = Math.round(movement.left)/10;
		movement.left = ((movement.left>1) ? 1 : movement.left) * -1;
	} else {
		movement.left = 0;
	}
	
	return movement;
};
>>>>>>> Arrow Controls
