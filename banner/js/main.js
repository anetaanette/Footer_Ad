"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */
		
		let showDefault = function(){
			
			
		}

		let showExpanded = function(){
			let image = document.querySelectorAll('.image');
		if(window.innerWidth > "1024px") {
			image.style.width = "200px";
			image.style.height = "160px";
		}
		}

		Premium.jpxApi.on("default", showDefault);
		Premium.jpxApi.on("expand", showExpanded);

		const counter = 1;
		setInterval(function() {
			document.querySelectorAll(".radio" + counter).checked = true;
			counter++;
			if(counter > 5) {
				counter = 1;
			} 
		}, 2);

		/* END OF CUSTOM JS */
	}
}