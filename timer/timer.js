class Timer {
	constructor(durationInput, startBtn, pauseBtn, callbacks) {
		this.durationInput = durationInput;
		this.startBtn = startBtn;
		this.pauseBtn = pauseBtn;

		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onComplete = callbacks.onComplete;
		}

		// Event Listeners
		this.startBtn.addEventListener("click", this.start);
		this.pauseBtn.addEventListener("click", this.pause);
	}

	// Start Timer
	start = () => {
		if (this.onStart) this.onStart(this.timeRemaining);
		this.tick();
		this.interval = setInterval(this.tick, 20);
	};

	// Pause Timer
	pause = () => {
		clearInterval(this.interval);
	};

	// countdown timer
	tick = () => {
		if (this.timeRemaining <= 0) {
			if (this.onComplete) this.onComplete();
			this.pause();
		} else {
			this.timeRemaining = this.timeRemaining - 0.02;
			if (this.onTick) this.onTick(this.timeRemaining);
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}

	set timeRemaining(time) {
		this.durationInput.value = time.toFixed(2);
	}
}
