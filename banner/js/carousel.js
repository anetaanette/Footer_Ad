let counter = 1;
		setInterval(function() {
			document.querySelectorAll(".radio" + counter).checked = true;
			counter++;
			if(counter > 5) {
				counter = 1;
			} 
		}, 5000);


        console.log("heddjc");