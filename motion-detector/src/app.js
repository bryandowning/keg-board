const Gpio = require('pigpio').Gpio;
const http = require("http");
const fs = require("fs");

// const led = new Gpio(17, {mode: Gpio.OUTPUT});
const motion = new Gpio(4, {mode: Gpio.INPUT, alert:true});

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
};

const turnDisplayOn = () => {
	console.log("Motion sensor trigger: turn display on");
	// led.digitalWrite(1);
	writeToDisplayPower(0);
};

const motionDetector = (level, tick) => {
	if (level === 0) {
		turnDisplayOff();
	} else if (level === 1) {
		turnDisplayOn();
	}
};

motionDetector(motion.digitalRead());
motion.on('alert', motionDetector);

const server = http.createServer((request, response) => {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	response.write("Hello, world!");
	response.end();
});

server.listen(3000);
