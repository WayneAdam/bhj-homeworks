/** контейнер для отображения задач */
const taskList = document.querySelector('.tasks__list');
/** получает кнопку "добавить" */
const addButton = document.querySelector('#tasks__add');

/** удаляет задачу */
function removeTask(event) {
  /** нахдодит ближайшего родителя */
  const newTask = event.target.closest('.task');

  if (newTask) {
    newTask.remove();
  }
}

/** добавление задачи */
function addTask(event) {
  event.preventDefault(); 

  /** находит поле ввода */
  const taskInput = document.querySelector('#task__input');
  /** удаляет лишние пробелы */
  const taskInputText = taskInput.value.trim();

  /** проверка поля на пустоту */
  if (taskInputText !== '') {
    /** создание нового элемента задачи */
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    /** создание заголовка новой задачи */
    const newTaskTitle = document.createElement('div');
  
    newTaskTitle.classList.add('task__title');
    newTaskTitle.textContent = taskInputText;

    /** создание кнопки удаления задачи */
    const taskDeletBtn = document.createElement('a');

    taskDeletBtn.classList.add('task__remove');
    taskDeletBtn.innerHTML = '&times;'; // значек "x"

    /** обавляет обработчик событий для удаления задачи */
    taskDeletBtn.addEventListener('click', removeTask);

    /** заполнение элемента задачи */
    newTask.appendChild(newTaskTitle);
    newTask.appendChild(taskDeletBtn);
    
    /** добавляет задачу в список */
    taskList.appendChild(newTask);

    /** очищает поле ввода */
    taskInput.value = '';
  }

};

/** добавляет обработчик событий */
addButton.addEventListener('click', addTask);