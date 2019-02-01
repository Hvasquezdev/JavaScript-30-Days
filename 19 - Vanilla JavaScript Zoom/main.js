const container = document.querySelector('#my-gallery');

if(!container) {
  console.error('Please specify the correct element');
}

const firstImg = container.querySelector('.small-preview');
const zoomedImg = container.querySelector('.zoomed-image');

if(!zoomedImg) {
  console.error('Add a .zoomed-image to your gallery');
}

if(!firstImg) {
  console.error('Add images with the .small-preview class to your gallery');
} else {
  zoomedImg.style.backgroundImage = `url(${firstImg.src})`;
}

container.addEventListener('click', (e) => {
  const element = e.target;

  if(element.classList.contains('small-preview')) {
    zoomedImg.style.backgroundImage = `url(${element.src})`;
  }
});

zoomedImg.addEventListener('mouseenter', (e) => {
  zoomedImg.style.backgroundSize = '250%';
});

zoomedImg.addEventListener('mousemove', (e) => {
  // Information about the position of the element
  const dimentions = zoomedImg.getBoundingClientRect(); 

  // Calculate the position of the cursor on the element in pixels
  let x = e.clientX - dimentions.left;
  let y = e.clientY - dimentions.top;

  // Calculate the position of the cursor as a percentage of the total size of the element
  const xPercent = Math.round(100 / (dimentions.width / x));
  const yPercent = Math.round(100 / (dimentions.height / y));

  // Update the bg position of the image
  zoomedImg.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

zoomedImg.addEventListener('mouseleave', (e) => {
  zoomedImg.style.backgroundSize = 'cover';
  zoomedImg.style.backgroundPosition = 'center';
})