const tab = document.querySelectorAll('.tab'); // получает доступ ко всем вкладкам
const tabNavigation = document.querySelector('.tab__navigation'); // получает доступ к обертке вкладок
const tabContent = document.querySelectorAll('.tab__content'); // получает доступ к контенту всех вкладок

let indexEventElement = null;

tab.forEach((item, index) => {
  item.addEventListener('click', () => {
    indexEventElement = index;

  });
  
});

tabNavigation.addEventListener('click', (event) => { // добавляет обработчик событий
  let eventElement = event.target; // получает элемент на котором сработало событие

  if(eventElement.classList.contains('tab')) { // проверяет клик на нужном элементе
    tab.forEach((item, index) => { // делает все вкладки не активными
      // indexEventElement = index;
      item.classList.remove('tab_active');

    });

    eventElement.classList.add('tab_active'); // делает вкладку активной по кликнутому элементу

    tabContent.forEach(item => { // делает весь контент не активным
      item.classList.remove('tab__content_active');

    });

    tabContent[indexEventElement].classList.add('tab__content_active'); // делает контент активным по индексу вкладки

  };
  
});