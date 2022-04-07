"use strict";
var Premium = Premium || {};

Premium.creative = {
	init: function() {
		/* START OF CUSTOM JS */
		
		let showDefault = function(){
		}

		let showExpanded = function(){
		}

		Premium.jpxApi.on("default", showDefault);
		Premium.jpxApi.on("expand", showExpanded);


		
	/* END OF CUSTOM JS */
	}
}