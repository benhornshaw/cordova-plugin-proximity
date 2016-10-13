cordova-plugin-proximity
=========================

This plugin can be use to get Proximity sensor data for a app from a device.

The API supports to one time call and repeated calls which will directed to callback functions.

A successful response receive as a JSON, {"distance":5}
Most devices generates two values as proximity sensor output. 0 or 5, but 5 can be changed 
according to the device.


Installation
--------------

<code> cordova plugin add https://github.com/DeshanKTD/cordova-plugin-proximity </code>

Methods
-------
- window.plugin.proximity.getReading
- window.plugin.proximity.watchReadings
- window.plugin.proximity.stop


window.plugin.proximity.getReading
-----------------------------------

This method get a single reading from the proximity sensor

<pre>
<code>
	window.plugin.proximity.getReading(
	    function success(reading){
	      console.log(JSON.stringify(reading)); 
	      alert(JSON.stringify(reading));
	      // Output: {x: 23.113, y:-37.245, z:6.172, magnitude: 44.266}
	    }, 
	    function error(message){
	     console.log(message);
	    }
  	)
  </code>
 </pre>

 `reading` object properties:
 - `distance`


window.plugin.proximity.watchReadings
----------------------------------

This helps get reapeated readings from the proximity sensor.

<pre>
	<code>
		window.plugin.proximity.watchReadings(
		    function success(reading){
		      console.log(JSON.stringify(reading));
		      alert(JSON.stringify(reading)); 
		      // Output: {x: 23.113, y:-37.245, z:6.172, magnitude: 44.266}
		    }, 
		    function error(message){
		     console.log(message);
		    }
		  )
	</code>
</pre>


 `reading` object properties
 - `distance`




window.plugin.proximity.stop
----------------------------

Stops gettings readings from the proximity sensor.
<pre>
	<code>
	  window.plugin.proximity.stop([watchID])
	</code>
</pre>

Supported Platforms
--------------------

- Android
