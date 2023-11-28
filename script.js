const birthday = new Date('2024-11-31');

const countdown = document.getElementById('countdown');

let d = document.getElementById('days');
let h = document.getElementById('hours');
let m = document.getElementById('minutes');
let s = document.getElementById('seconds');

function updateCountdown() {
  const currentDate = new Date();
  const difference = birthday - currentDate;

  if (difference <= 0) {
    countdown.innerHTML = '<h1>THE PROMO IS OVER...</h1>';
  } else {
    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    days = days <= 9 ? `0${days}` : days;
    hours = hours <= 9 ? `0${hours}` : hours;
    minutes = minutes <= 9 ? `0${minutes}` : minutes;
    seconds = seconds <= 9 ? `0${seconds}` : seconds;

    countdown.innerHTML = `
    <span id="days">${days}</span>
    <span id="hours">${hours}</span>
    <span id="minutes">${minutes}</span>
    <span id="seconds">${seconds}</span>
    `;

    setTimeout(updateCountdown, 1000);
  }
}

updateCountdown();
