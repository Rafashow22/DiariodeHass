const scene = document.getElementById('scene');
const cursor = document.getElementById('cursor');

/* CURSOR */
let mx = window.innerWidth / 2;
let my = window.innerHeight / 2;
let cx = mx, cy = my;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cx += (mx - cx) * 0.18;
  cy += (my - cy) * 0.18;

  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';

  requestAnimationFrame(animateCursor);
}
animateCursor();

/* LEAN */
function lean(side) {
  scene.classList.remove('lean-left', 'lean-right');
  scene.classList.add(`lean-${side}`);
}

function resetLean() {
  scene.classList.remove('lean-left', 'lean-right');
}

/* EVENTS */
document.getElementById('panel-left')
  .addEventListener('mouseenter', () => lean('left'));

document.getElementById('panel-right')
  .addEventListener('mouseenter', () => lean('right'));

document.getElementById('panel-left')
  .addEventListener('mouseleave', resetLean);

document.getElementById('panel-right')
  .addEventListener('mouseleave', resetLean);

  function lockScroll() {

    const scrollY = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

}

function unlockScroll() {

    const scrollY = document.body.style.top;

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    window.scrollTo(0, parseInt(scrollY || '0') * -1);

}