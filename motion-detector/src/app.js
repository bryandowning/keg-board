const Gpio = require('pigpio').Gpio;
const fs = require("fs");

// const led = new Gpio(17, {mode: Gpio.OUTPUT});
const motion = new Gpio(4, {mode: Gpio.INPUT, alert:true});

const timeout = 2 * 60 * 1000; // two minutes
var timer = null;

const writeToDisplayPower = (value) => {
	const data = "" + value;
	try {
		fs.writeFileSync("/sys/class/backlight/rpi_backlight/bl_power", data);
	} catch (err) {
		console.error(error);
	}
	console.log("Successfully toggled display power");
};

const turnDisplayOff = () => {
	console.log("Motion sensor trigger: turn display off");
	// led.digitalWrite(0);
	writeToDisplayPower(1);
	timer = null;
};

const turnDisplayOn = () => {
	console.log("Motion sensor trigger: turn display on");
	// led.digitalWrite(1);
	writeToDisplayPower(0);
};

const motionDetector = (level, tick) => {
	if (level === 0) {
		timer = setInterval(turnDisplayOff, timeout);
	} else if (level === 1) {
		turnDisplayOn();

		if (timer != null) {
			clearInterval(timer);
			timer = null;
		}
	}
};

motionDetector(motion.digitalRead());
motion.on('alert', motionDetector);
