const hasTooltip = document.querySelectorAll('.has-tooltip'); // находит все элементы для подсказок
const tooltip = document.querySelector('.tooltip'); // получает элемент подсказки

function showTooltip(event) { //  показывает подсказку
  event.preventDefault(); // сбрасывает настр. браузера

  const targetElement = event.target; // получает кликнутый элемент
  const targetElementHeight = targetElement.offsetHeight; // полчает высоту кликнутого элемента
  const targetElementY = targetElement.getBoundingClientRect().y; // получает координату "y"
  const targetElementX = targetElement.getBoundingClientRect().x; // получает координату "x"

  tooltip.style.top = (targetElementY + targetElementHeight) + 'px'; // устанавливает расположение подсказки по координате "y"
  tooltip.style.left = targetElementX + 'px'; // устанавливает по расположение подсказки по координате "x"

  tooltip.innerHTML = targetElement.title; // вставляет текст подсказки

  if(!tooltip.classList.contains('tooltip_active')) { // проверяет активна ли подсказка
    tooltip.classList.add('tooltip_active'); // добавляет класс
  } else {
    tooltip.classList.remove('tooltip_active'); // удаляет класс
  };

};

for(const item of hasTooltip) { // бежит по всем элементам
  item.addEventListener('click', showTooltip); // добавляет обработчик событий
  
};