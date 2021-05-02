const refs = {
  dayRef: document.querySelector('[data-value="days"]'),
  hoursRef: document.querySelector('[data-value="hours"]'),
  minsRef: document.querySelector('[data-value="mins"]'),
  secsRef: document.querySelector('[data-value="secs"]'),
};

const timerUpdate = ({ days, hours, mins, secs }) => {
  refs.dayRef.textContent = `${days}`;
  refs.hoursRef.textContent = `${hours} `;
  refs.minsRef.textContent = ` ${mins}  `;
  refs.secsRef.textContent = `${secs} `;
};

class CountdownTimer {
  constructor({ selector, targetDate, onTick }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.onTick = onTick;
  }
  start() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  padDays(value) {
    return String(value).padStart(3, '0');
  }
  getTimerFields(time) {
    const days = this.padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }
  updateTime() {
    const finalDate = this.targetDate.getTime();
    const currentTime = Date.now();
    const velTime = finalDate - currentTime;
    const time = this.getTimerFields(velTime);
    this.onTick(time);
  }
}

const newTimer = new CountdownTimer({
  selector: '.timer',
  targetDate: new Date('Jul 17, 2021'),
  onTick: timerUpdate,
});

newTimer.start();