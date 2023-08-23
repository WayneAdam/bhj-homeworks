const reveal = document.querySelectorAll('.reveal');

addEventListener('scroll', (event) => { // отслеживает изменение прокрутки окна
  const innerHeight = window.innerHeight; // получает высоту viewport
  const yElementFirst = reveal[0].getBoundingClientRect().y; // Y-координата элемента первого элемента
  const yElementSecond = reveal[1].getBoundingClientRect().y; // Y-координата элемента второго элемента
  const bottomElementFirst = reveal[0].getBoundingClientRect().bottom; // координаты нижней границы первого элемента
  const bottomElementSecond = reveal[1].getBoundingClientRect().bottom; // координаты нижней границы второго элемента

  if(yElementFirst >= 0 && bottomElementFirst <= innerHeight) {
    reveal[0].classList.add('reveal_active');
  } else {
    reveal[0].classList.remove('reveal_active');
  }

  if(yElementSecond >= 0 && bottomElementSecond <= innerHeight) {
    reveal[1].classList.add('reveal_active');
  } else {
    reveal[1].classList.remove('reveal_active');
  }

});