/*
 * Using a PIR motion sensor with Pi
 *
 */

var five = require('johnny-five');
var Raspi = require("raspi-io").RaspiIO;
var board = new five.Board({
  io: new Raspi()
});

board.on('ready', function() {
	console.log('board is ready');

	// Create a new `motion` hardware instance.
	var motion = new five.IR.Motion('P1-7'); //pin 7 (GPIO 4)

	// 'calibrated' occurs once, at the beginning of a session,
	motion.on('calibrated', function() {
		console.log('calibrated');
	});

	// 'motionstart' events are fired when the 'calibrated'
	// proximal area is disrupted, generally by some form of movement
	motion.on('motionstart', function() {
		console.log('motionstart');
	});

	// 'motionend' events are fired following a 'motionstart' event
	// when no movement has occurred in X ms
	motion.on('motionend', function() {
		console.log('motionend');
	});
});
