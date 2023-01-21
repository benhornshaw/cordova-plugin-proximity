var argscheck = require('cordova/argscheck');
var utils = require('cordova/utils');
var exec = require('cordova/exec');
var timers = {};


var Proximity = function(){

}


Proximity.prototype = {
	getReading: function(onSuccessCallback,onErrorCallback){
		cordova.exec(onSuccessCallback,onErrorCallback,"Proximity","getReading",[]);

	},

	watchReadings: function(onSuccessCallback, onErrorCallback, time){
		//start timer to get distance
		var proximity = this;
		var id = utils.createUUID();

		if (cordova.platformId === 'android') {
			timers[id] = window.setInterval(function() {
          		proximity.getReading(onSuccessCallback, onErrorCallback);
      		}, time); // every 40 ms (25 fps)
		}
		else {
			cordova.exec(onSuccessCallback,onErrorCallback, "Proximity","watchReadings",[]);
			return id;
		}
	},

	stop: function(watchID){
		if (cordova.platformId === 'android'){
			if(watchID){
				// stop a single watch
				window.clearInterval(timers[watchID]);
				delete timers.watchID;
			}
			else{
				// stop all timers
				for (var id in timers) {
					window.clearInterval(timers[id]);
					delete timers.id;
				}
			}
		}
		else cordova.exec(function() {}, function() {throw "Error stopping proximity"}, "Proximity","stop",[]);

	}
}

module.exports  = new Proximity();
