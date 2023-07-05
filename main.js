function handleSubmit() {
  event.preventDefault();
  let x = +event.target.x.value;
  let y = +event.target.y.value;
  let r = +event.target.r.value;
  circle(x,y,r);
  event.target.x.value = '';
  event.target.y.value = '';
  event.target.r.value = '';
}

function circle(x,y,r) {
  let circle = document.createElement('div');
  circle.classList.add('circle');
  let canvas = document.querySelector('#canvas');
  let xOffset = canvas.getBoundingClientRect().left;
  let yOffset = canvas.getBoundingClientRect().top;
  circle.style.left = x - r + xOffset + 'px';
  circle.style.top = y - r + yOffset + 'px';
  circle.style.width = r*2 + 'px';
  circle.style.height = r*2 + 'px';

  canvas.append(circle);
}


function easterEgg() {
  let circles = document.querySelectorAll('.circle');
  for (let c of circles) {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    c.style.background = `rgb(${r},${g},${b})`;
    c.style.transform = `rotate3D(0,1,0,180deg)`;
  }
}

function easterEasterEgg() {
  if (event.target.classList.contains('circle')) {
    event.target.style.top = `${Math.random()*100}%`;
    event.target.style.left = `${Math.random()*100}%`;
  }
}

document.addEventListener('click', easterEasterEgg);
