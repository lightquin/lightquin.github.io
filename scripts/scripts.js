// Coverflow logic (Page 1)
if (document.querySelector('.coverflow')) {
  const slides = Array.from(document.querySelectorAll('.coverflow .slide'));
  let centerIndex = 2;

  function render() {
    const len = slides.length;
    const leftIndex  = (centerIndex - 1 + len) % len;
    const rightIndex = (centerIndex + 1) % len;

    slides.forEach((s, i) => {
      s.className = 'slide';
      if (i === centerIndex) s.classList.add('center');
      else if (i === leftIndex) s.classList.add('left');
      else if (i === rightIndex) s.classList.add('right');
      else s.classList.add('hidden');
    });
  }

  window.next = function () {
    centerIndex = (centerIndex + 1) % slides.length;
    render();
  };

  window.prev = function () {
    centerIndex = (centerIndex - 1 + slides.length) % slides.length;
    render();
  };

  window.addEventListener('load', render);
  window.addEventListener('resize', render);
}

// Star generator (Page 2)
if (document.body.classList.contains('stars')) {
  for (let i = 0; i < 40; i++) {
    const star = document.createElement('div');
    const sizeClass = ['small', 'medium', 'large'][Math.floor(Math.random() * 3)];
    const delay = (Math.random() * 4).toFixed(2) + 's';
    const top = Math.floor(Math.random() * 100) + '%';
    const left = Math.floor(Math.random() * 100) + '%';

    star.className = `star ${sizeClass}`;
    star.style.top = top;
    star.style.left = left;
    star.style.animationDelay = delay;

    document.body.appendChild(star);
  }
}
