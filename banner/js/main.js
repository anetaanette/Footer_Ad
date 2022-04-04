"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */

		let showDefault = function(){
			// if(window.innerWidth >)
			
		}

		let showExpanded = function(){

		}

		Premium.jpxApi.on("default", showDefault);
		Premium.jpxApi.on("expand", showExpanded);

		const counter = 1;
		setInterval(function() {
			document.getElementById('radio' + counter).checked = true;
			counter++;
			if(counter > 4) {
				counter = 1;
			}
		}, 5000);

		/* END OF CUSTOM JS */
	}
}