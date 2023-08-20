console.log('Высота окна', window.innerHeight, 'Ширина окна', window.innerWidth);

const reveal = document.querySelector('.reveal');
console.log(reveal.getBoundingClientRect());

addEventListener('scroll', (event) => { // отслеживает изменение прокрутки окна
  const innerHeight = window.innerHeight; // получает высоту viewport
  const y = reveal.getBoundingClientRect().y; // Y-координата элемента
  const bottom = reveal.getBoundingClientRect().bottom; // координаты нижней границы элемента

  if(y >= 0 && bottom <= innerHeight) {
    reveal.classList.add('reveal_active');
  } else {
    reveal.classList.remove('reveal_active');
  }

});