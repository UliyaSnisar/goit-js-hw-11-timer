  
class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this._timerID = null;
    this.start();
  }
  setDate(deltaTime) {
    if (deltaTime <= 0) {
      clearInterval(this._timerID);
    } else {
      let days = this.selector.querySelector('span[data-value="days"]');
      let hours = this.selector.querySelector('span[data-value="hours"]');
      let mins = this.selector.querySelector('span[data-value="mins"]');
      let secs = this.selector.querySelector('span[data-value="secs"]');
      days.textContent = Math.floor(deltaTime / (1000 * 60 * 60 * 24));
      hours.textContent = Math.floor(
        (deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      mins.textContent = Math.floor(
        (deltaTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      secs.textContent = Math.floor((deltaTime % (1000 * 60)) / 1000);
    }
  }
  makeInterval() {
    if (this._timerID === null) {
      this._timerID = setInterval(() => {
        const velTime = this.targetDate - Date.now();
        this.setDate(velTime);
      }, 1000);
    }
  }
  start() {
    this.makeInterval();
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('Jul 17, 2021'),
});