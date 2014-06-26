LIFX WiFi Bulb and SmartThings
------------------------------

This is a sample application to control [LIFX WiFi][1] Bulb using [SmartThings][2]. LIFX can only be controlled within local network, as of now we cannot control LIFX from outside the network. One solution to control from outside network is to use an intermediate local server which listens for commands and control the bulb locally. There an official [LIFX Ruby SDK][3]. There are also some unofficial node.js library which can control the LIFX bulb, on such library is [Lifxjs][4]. 

To communicate to the local server from outside the network, we can use MQTT, Server Sent Events, etc... For this demo I am using MQTT. Eclipse foundation is maintaining a [Sandbox MQTT Server][5] for development purpose. We can use MQTT clients to publish and subscribe messages, there is also one [HTTP Bridge][6] which provides RESTful APIs to send and receive messages. This is very useful service, we just need to call REST services and we can easily manage the messages. For this one I am using the REST APIs.

In this demo, I created a SmartThings Custom Device type LIFX with '**Switch**' capability. Whenever the switch turns on the application calls the MQTT HTTP Bridge service and publishes a message with topic "***lifxcmd***" and payload ***command='1'*** and when it turns off publish with payload ***command='0'***. The local node.js server listens for this topic and whenever it receives it turns the bulb on/off.

This is a pretty straight forward to control the bulb. Currently I only implemented on/off functionality but planning to incorporate more in near future.

Here is a demo video of the application in action (sorry, no audio).

Happy LIFX and SmartThings coding :)


  [1]: http://www.lifx.co
  [2]: http://www.smartthings.com
  [3]: https://github.com/LIFX/lifx-gem
  [4]: https://www.npmjs.org/package/lifx
  [5]: http://iot.eclipse.org/sandbox.html
  [6]: http://eclipse.mqttbridge.com/