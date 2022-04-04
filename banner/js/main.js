"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */
		let image = document.querySelectorAll('.image');
		let showDefault = function(){
			
			
		}

		let showExpanded = function(){
			if(window.innerWidth > 1024) {
				image.style.width = '200px';
				image.style.height = 160 + 'px';
			}
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