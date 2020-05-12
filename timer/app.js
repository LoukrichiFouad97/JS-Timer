class Timer {
	constructor(durationInput, startBtn, pauseBtn, clb) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;

		// if callbacks provided create those fields
		if (clb) {
			this.onStart = clb.onStart;
			this.onTick = clb.onTick;
			this.onComplete = clb.onComplete;
		}

		// Event Listeners
		this.startBtn.addEventListener("click", this.start);
		this.pauseBtn.addEventListener("click", this.pause);
	}

	// Start Timer
	start = () => {
		if (this.onStart) this.onStart();
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};

	// Pause Timer
	pause = () => {
		clearInterval(this.interval);
	};

	tick = () => {
		if (this.updateUILeftTime > 0) {
			this.updateUILeftTime = this.timeRemainingLogic - 1;
			if (this.onTick) this.onTick();
		} else {
			if (this.onComplete) this.onComplete();
		}
	};

	get timeRemainingLogic() {
		return parseFloat(this.durationInput.value);
	}

	set updateUILeftTime(time) {
		this.durationInput.value = time;
	}
}

// get buttons
const duration = document.getElementById("duration");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");

// Timer Instantiation
const timer = new Timer(duration, startBtn, pauseBtn, {
	onStart() {
		console.log("start");
	},
	onTick() {
		console.log("ticked");
	},
	onComplete() {
		console.log("completed");
	},
});
