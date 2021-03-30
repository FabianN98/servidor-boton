//https://www.eclipse.org/paho/clients/js/
//funciones para botones
//function LED1_On() {
	//alert("led on");
	//console.log("led on");
//	message = new Paho.MQTT.Message("ON");va
  //      message.destinationName = "marco08580212@gmail.com/test1";
    //    client.send(message);
	
	//document.getElementById("sensor").innerHTML="led on";
  
//}
//function LED1_Off(){	
	//alert("led off");
	//console.log("led off");
//	message = new Paho.MQTT.Message("OFF");
 //       message.destinationName = "marco08580212@gmail.com/test1";
  //      client.send(message);
	//document.getElementById("sensor").innerHTML="led off";
//}

// funcion  para encender y apagar led con un solo botón

/*
var btn=document.getElementById('btn'), contador=0;
function cambio()
{ if (contador==0)
	{
	message = new Paho.MQTT.Message("ENCENDER");
	message.destinationName = "israelnoriega1998@hotmail.com/test1";
	client.send(message);
	contador=1;
	}
 else
	{
	message = new Paho.MQTT.Message("APAGAR");
	message.destinationName = "israelnoriega1998@hotmail.com/test1";
	client.send(message);
	contador=0;
	}
}
*/

//------------------------------------------------------------------------------------------------------------

// HISTORIAL LED

function HISTORIAL_LED() {
	//alert("led on");
	console.log("led on");
	//document.getElementById("sensor").innerHTML="led on";
  	message = new Paho.MQTT.Message("encender");
        message.destinationName = "israelnoriega1998@hotmail.com/led";
        client.send(message);
  
}
function HISTORIAL_LED(){	
	//alert("led off");
	console.log("led off");
	//document.getElementById("sensor").innerHTML="led off";
	message = new Paho.MQTT.Message("apagar");
        message.destinationName = "israelnoriega1998@hotmail.com/led";
        client.send(message);
 	
}






// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "israelnoriega1998@hotmail.com",
    password: "israel1998",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("israelnoriega1998@hotmail.com/test1");
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
	  //comando para poner el sensor desde esp32
	  document.getElementById("sensor").innerHTML=message.payloadString;
	  if(message.payloadString==='Encendido'){
		
	  } else if(message.payloadString==='Apagado'){
		
 		
	  }
	  if(message.payloadString==='Encendido'){
	  	document.getElementById("btn").innerHTML="Apagar";
	  } else if(message.payloadString==='Apagado'){
		document.getElementById("btn").innerHTML="Encender";
	  }
	  
  }


  
