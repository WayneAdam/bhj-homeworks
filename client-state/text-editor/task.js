/** Сохранение текста из поля */
function saveTextFromLocalStorage() {
  const text = document.querySelector('#editor').value;
  localStorage.setItem('text', text);
};

/** Восстановление текста из поля */
function restoreFromLocalStorage() {
  const storedText = localStorage.getItem('text');

  if(storedText) {
    document.querySelector('#editor').value = storedText;
  } 
};

document.addEventListener('keyup', saveTextFromLocalStorage);

restoreFromLocalStorage();