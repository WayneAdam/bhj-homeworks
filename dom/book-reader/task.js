'use strict'
const bookControlFontSize = document.querySelectorAll('.font-size'); // получает доступ к всем элементам управления размером текста
const bookControlPanel = document.querySelector('.book__control'); // получает доступ к обертке элементов управления
const book = document.querySelector('.book'); // получает доступ к общей обертке читалки
// let indexItem = 0;

// const p = document.querySelectorAll('p'); // получает доступ ко всем параграфам
// console.log(bookControlFontSize);

bookControlPanel.addEventListener('click', (event) => { // добавляет обработчик событий
  event.preventDefault(); // сбрасывает поведение браузера по умолчанию
  let targetItem = event.target; // получает доступ ко кликнутому элементу
  
  bookControlFontSize.forEach(item => {
    if(item.classList.contains('font-size_active')) {
      item.classList.remove('font-size_active'); // удаляет класс

    }

  });

  if(!targetItem.classList.contains('font-size_active')) {
    // console.log('Условие работает');
    targetItem.classList.add('font-size_active'); // добавляет класс

  };

  let indexItem = 0; // записывает индекс активного элемента

  bookControlFontSize.forEach((item, index) => { // получает индекс активного элемента
    if(item.classList.contains('font-size_active')) {
      indexItem = index; // присваивает индекс активного элемента
    }

  });

  if(indexItem === 0) { // устанавливает нужный font-size читалке
    book.classList.add('book_fs-small');
    book.classList.remove('book_fs-big');

  } else if(indexItem === 1) {
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');

  } else if(indexItem === 2) {
    book.classList.add('book_fs-big');
    book.classList.remove('book_fs-small');

  };

});