const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]'),
}

const timer = {
    start() { 
        const targetDate = new Date('Jul 17, 2021');

        setInterval(() => {
            const curretnTime = Date.now();

            const deltaTime = targetDate - curretnTime;

            upDateClockfase(deltaTime);
    }, 1000);
    }
   
}

timer.start();

function upDateClockfase(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    
    
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = mins;
  refs.seconds.textContent = secs;
}

function pad(value) {
    return String(value).padStart(2, '0');
}

