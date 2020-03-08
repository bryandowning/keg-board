const Gpio = require('pigpio').Gpio;

for (let gpioNo = Gpio.MIN_GPIO; gpioNo <= Gpio.MAX_GPIO; gpioNo += 1) {
  const gpio = new Gpio(gpioNo);

  console.log('GPIO ' + gpioNo + ':' +
    ' mode=' + gpio.getMode() +
    ' level=' + gpio.digitalRead()
  );
}

const motion = new Gpio(4, {mode: Gpio.INPUT, alert:true});

console.log("starting")

motion.on('alert', (level, tick) => {
	console.log("ALERT level: " + level + " tick: " + tick);
});

console.log("started")
