

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {

    const [min, secs] = timeCode.split(':').map(parseFloat);

    return (min * 60) + secs;

  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`%c ${hours}h:${mins}m:${secondsLeft}s Left`, 'font-size: 18px; color:lime;');