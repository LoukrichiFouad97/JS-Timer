// get buttons
const duration = document.getElementById("duration");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");

// get the circle
const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * Math.PI * 2;
circle.setAttribute("stroke-dasharray", perimeter);

let totalTime;
// Timer class Instantiation
const timer = new Timer(duration, startBtn, pauseBtn, {
	onStart(totalDuration) {
		totalTime = totalDuration;
	},
	onTick(timeRemianing) {
		circle.setAttribute(
			"stroke-dashoffset",
			(perimeter * timeRemianing) / totalTime - perimeter
		);
	},
	onComplete() {
		circle.setAttribute("stroke-dashoffset", perimeter);
		document.querySelector("audio").src = "1.mp3";
	},
});
