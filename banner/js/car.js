const car = document.querySelector(".car");
const container = document.querySelector(".section-car");

// Animation
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 5;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 5;

    car.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
}
)

// Animate In 
container.addEventListener("mouseenter", (e) => {
    car.style.transform = "none";
});

// Animate Out 

container.addEventListener("mouseleave", (e) => {
    car.style.transform = "all 1s ease";
    car.style.transform = `rotateY(0deg) rotateX(0deg)`;
});