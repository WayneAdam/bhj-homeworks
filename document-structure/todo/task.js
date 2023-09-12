const tasksInput = document.querySelector('.tasks__input'); // находит поле ввода текста задачи
const tasksList = document.querySelector('.tasks__list'); // находит список задач
const tasksAddBtn = document.querySelector('.tasks__add'); // нахдодит кнопку "добавить"
const tasks = document.querySelectorAll('.task'); // находит все задачи
const task = document.querySelector('.task'); // находит одну задачу для клонирования

for(const item of tasks) { // удаляет все задачи
  item.remove();

};

function removeTask(e) {
  const deletedTask = e.target.parentElement; // находит удаляемую задачу
  deletedTask.remove();

};

function addTasks(e) { // добавляет задачу в лист задач
  e.preventDefault(); // сбрасывает настройки браузера 

  if(e.key === 'Enter' && tasksInput.value ||
  e.type === 'click' && tasksInput.value) { // проверяет нажатие Enter и наличие текста в поле ввода
    const taskClone = task.cloneNode(true); // клонирует задачу
    taskClone.children[0].innerHTML = tasksInput.value; // добавляет текст задачи в элемент из поля ввода
    tasksList.appendChild(taskClone); // добавляет задачу в список задач
    tasksInput.value = '';  // очищает поле ввода
  };
  
  let taskRemove = document.querySelectorAll('.task__remove'); // находит все кнопки для удаления

  for(const item of taskRemove) { // бежит по всем задачам из списка
    item.addEventListener('click', removeTask); // добавляет обработчик событий
  };

};

addEventListener('keyup', addTasks); // добавляет обработчик событий на Enter

tasksAddBtn.addEventListener('click', addTasks); // добавляет обработчик событий на кнопку "Добавить"