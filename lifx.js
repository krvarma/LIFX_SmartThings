var mqtt = require('mqtt')
var lifx = require("lifx");
var bulbFound = false;

var lx = lifx.init();
var client = mqtt.createClient(1883, 'iot.eclipse.org');

client.subscribe('lifxcmd');

lx.on('bulb', function(b){
	bulbFound = true;
});

client.on('message', function (topic, message) {
	console.log(message);
  
	var msg = message.split('=');
	
	console.log(msg[0]);
	console.log(msg[1]);
  
	if("command" == msg[0]){
		if("1" == msg[1]){
			if(bulbFound) lx.lightsOn();
		}
		else{
			if(bulbFound) lx.lightsOff();
		}
	}
});
