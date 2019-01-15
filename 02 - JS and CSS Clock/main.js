const secondHand = document.querySelector('.clock-second');
const minHand = document.querySelector('.clock-minute');
const hourHand = document.querySelector('.clock-hour');

const digitalHours = document.querySelector('.digital-hours');
const digitalMinutes = document.querySelector('.digital-minutes');
const digitalSeconds = document.querySelector('.digital-seconds');
const digitalTime = document.querySelector('.digital-time');
const digitalDay = document.querySelector('.digital-day');

const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function setDigitalDate(date) {
  digitalDay.innerHTML = week[date.getDay()];
  digitalHours.innerHTML = date.getHours() - 12;
  digitalMinutes.innerHTML = date.getMinutes();
  digitalSeconds.innerHTML = date.getSeconds();
  if (date.getHours() > 12) {
    digitalTime.innerHTML = 'PM'
  } else {
    digitalTime.innerHTML = 'AM'
  }
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 360;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 360;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 360;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // fix for animation bump on when clock hands hit zero
  if (secondsDegrees === 714 || secondsDegrees === 360) {
    secondHand.style.transition = "all 0s ease 0s";
  } else {
    secondHand.style.transition = "all 0.05s cubic-bezier(0, 0, 0.52, 2.51) 0s";
  }

  setDigitalDate(now);
}

setInterval(setDate, 1000);