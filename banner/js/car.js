const car = document.querySelector(".car");
const container = document.querySelector(".section-car");

container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 5;

    car.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`
}

)