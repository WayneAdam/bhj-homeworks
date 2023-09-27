/** Получение доступа к элементу */
const text = document.querySelector('#editor');

/** Сохранение текста из поля */
function saveTextFromLocalStorage() {
  localStorage.setItem('text', text.value);
};

/** Восстановление текста из поля */
function restoreFromLocalStorage() {
  const storedText = localStorage.getItem('text');

  document.querySelector('#editor').value = storedText;
};

document.addEventListener('keyup', saveTextFromLocalStorage);

restoreFromLocalStorage();