const Gpio = require('pigpio').Gpio;

const motion = new Gpio(7, {mode: Gpio.INPUT, alert:true});

console.log("starting")

motion.on('alert', (level, tick) => {
	console.log("ALERT level: " + level + " tick: " + tick);
});

console.log("started")
