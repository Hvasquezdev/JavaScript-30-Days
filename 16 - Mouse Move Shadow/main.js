const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 50; // px

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;
  
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
  
  const xwalk = Math.round((x / width * walk) - (walk / 2));
  const ywalk = Math.round((y / width * walk) - (walk / 2));

  text.style.textShadow = `${xwalk}px ${ywalk}px 10px hsl(0, 0%, 21%, .50)`;
}

hero.addEventListener('mousemove', shadow);