
/** создание элемента подсказки */
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

/** поиск всех элементов для отображения подсказки */
const linksTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

/** добавление обработчика событий */
linksTooltip.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    /** текст подсказки */
    const tooltipText = link.getAttribute('title');

    tooltip.textContent = tooltipText;

    /** позиционирование подсказки */
    const linkPosition = link.getBoundingClientRect();
    tooltip.style.left = linkPosition.left + 'px';
    tooltip.style.top = linkPosition.bottom + 'px';

    /** отображение подсказки */
    tooltip.classList.toggle('tooltip_active');

    /** удалить подсказку */
    const removeTooltip = (e) => {
		if (!tooltip.contains(e.target) && !link.contains(e.target)) {
		  tooltip.classList.remove('tooltip_active');
		  document.removeEventListener('click', removeTooltip);
		}
	  };
  
	  document.addEventListener('click', removeTooltip);
  });
});