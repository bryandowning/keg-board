const Gpio = require('pigpio').Gpio;

const led = new Gpio(17, {mode: Gpio.OUTPUT});
const motion = new Gpio(4, {mode: Gpio.INPUT, alert:true});

console.log("starting")

const motionDetector = (level, tick) => {
	console.log("ALERT level: " + level + " tick: " + tick);

	if (level === 0) {
		led.digitalWrite(0);
	} else if (level === 1) {
		led.digitalWrite(1);
	}
};

motionDetector(motion.digitalRead(), null);
motion.on('alert', motionDetector);

console.log("started")
