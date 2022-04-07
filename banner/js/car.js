	// CAR SECTION
    const car = document.querySelector(".car");
    const container = document.querySelector(".section-car");
    
                // ANIMATION
    container.addEventListener("mousemove", (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 5;
    
        car.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }
    )
    
            // ANIMATE IN
    container.addEventListener("mouseenter", (e) => {
        car.style.transform = "none";
    });
    
            // ANIMATE OUT
    
    container.addEventListener("mouseleave", (e) => {
        car.style.transform = "all 1s ease";
        car.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
            // END OF CAR SECTION