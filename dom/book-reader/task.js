'use strict'
const bookControlFontSize = document.querySelectorAll('.font-size'); // получает доступ к всем элементам управления размером текста
const book = document.querySelector('.book'); // получает доступ к общей обертке читалки

for(let i = 0; i < bookControlFontSize.length; i++) { // цикл проходит по кажждому элементу
  bookControlFontSize[i].addEventListener('click', (event) => { // добавляет обработчик
    event.preventDefault(); // сбрасывает поведение браузера по умолчанию
    bookControlFontSize.forEach(item => {
      if(item.classList.contains('font-size_active')) {
        item.classList.remove('font-size_active'); // удаляет класс у всех элементов

      }
  
    });

    if(!bookControlFontSize[i].classList.contains('font-size_active')) {
      bookControlFontSize[i].classList.add('font-size_active'); // добавляет класс
  
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

};