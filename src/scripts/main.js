'use strict';

setTimeout(function() {
  document.getElementById('popup').style.display = 'block';
}, 20000);

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.popup__close');

  closeBtn.addEventListener('click', () => {
    document.querySelector('#popup').remove();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#my-form');

  const goToFormBtn = document.querySelector('#go-to-form-btn');

  goToFormBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('.popup').style.display = 'none';
    form.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');

  body.addEventListener('mouseleave', function(event) {
    if (event.clientY <= 0) {
      document.getElementById('popup').style.display = 'block';
    }
  });
});

window.onload = function() {
  let timeLeft = 600;

  const timer = setInterval(function() {
    const minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    document.getElementById('timer').innerHTML = minutes + ':' + seconds;

    timeLeft -= 1;

    if (timeLeft < 0) {
      clearInterval(timer);
      document.getElementById('timer').innerHTML = 'Час закінчився';
    }
  }, 1000);
};
