//https://www.eclipse.org/paho/clients/js/

/*
function LED1_On() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
	message = new Paho.MQTT.Message("ON");
        message.destinationName = "israelnoriega1998@hotmail.com/test1";
        client.send(message);
}	
	
function LED1_Off{
	//alert("led off");
	console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
	message = new Paho.MQTT.Message("OFF");
        message.destinationName = "israelnoriega1998@hotmail.com/test1";
        client.send(message);

  
}

*/

var i =1;
function LED1_On() {
	//alert("led on");
	console.log("led on");
	document.getElementById("sensor").innerHTML="led On";
	message = new Paho.MQTT.Message("ON");
    	message.destinationName = "israelnoriega1998@hotmail.com/test1";
    	client.send(message);
  
}
function LED1_Off(){	
	//alert("led off");
	console.log("led off");
	document.getElementById("sensor").innerHTML="led Off";
	message = new Paho.MQTT.Message("OFF");
    	message.destinationName = "israelnoriega1998@hotmail.com/test1";
    	client.send(message);
}

function ESTADO_On_Off(){	

   	if (i % 2 == 0)
  	{
		console.log("led on");
		document.getElementById("sensor").innerHTML="led On";
		message = new Paho.MQTT.Message("ON");
   		message.destinationName = "israelnoriega1998@hotmail.com/test1";
    		client.send(message);

  	}
	else 
	{
		console.log("led off");
		document.getElementById("sensor").innerHTML="led Off";
		message = new Paho.MQTT.Message("OFF");
    		message.destinationName = "israelnoriega1998@hotmail.com/test1";
    		client.send(message);
	}
	i=i+1;
}

	
	
	





// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "lfrenteriax@hotmail.com",
    password: "lfrenteriax",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("israelnoriega1998@hotmail.com/test");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "israelnoriega1998@hotmail.com/test1";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    console.log("onMessageArrived:"+message.payloadString);
	  document.getElementById("sensor").innerHTML=message.payloadString;
  }
  
