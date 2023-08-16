const dropdownValue = document.querySelector('.dropdown__value'); // находит элемент с текущим значением выпадающего списка
const dropdownList = document.querySelector('.dropdown__list'); // находит выпадающий список
const dropdownItems = document.querySelectorAll('.dropdown__item'); // получает досутп ко всем выпадающим элементам

function changeDropdown(event) { // открывает и закрывает выпадающий список
  if(!dropdownList.classList.contains('dropdown__list_active') && 
      dropdownList.closest('.dropdown')) {
    dropdownList.classList.add('dropdown__list_active');

  } else {
    dropdownList.classList.remove('dropdown__list_active');

  }
};

dropdownValue.addEventListener('click', changeDropdown); // добавляет обработчик событий

dropdownItems.forEach(item => { // добавляет обработчик событий на элементы выпадащего списка
  item.addEventListener('click', (event) => {
    dropdownValue.textContent = item.textContent; // устанавливает выбранное значение
    event.preventDefault(); // запрещает переход по ссылке
    changeDropdown();

  });
  
});