/** Получение доступа к нужным элементам */
const signin = document.querySelector('#signin');
const form = document.querySelector('#signin__form');
// localStorage.clear();

let url = 'https://students.netoservices.ru/nestjs-backend/auth';

if(localStorage.hasOwnProperty('userid')) {
  let userId = localStorage.userid;

  const welcomeDiv = document.querySelector('#welcome');

  welcomeDiv.innerHTML = `Добро пожаловать, пользователь #${userId}`;
  welcomeDiv.classList.add('welcome_active');

  signin.classList.remove('signin_active');
};

/** Добавление обработчика событий */
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  /** Создание, обработка и отпаравка запроса и ответа от сервера */
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.responseType = 'json';

  xhr.onload = function(e) {
    let response = xhr.response;
    // let response = JSON.parse(xhr.response);

    if(response.success) {
      const userId = response.user_id;

      localStorage.setItem('userid', userId);

      const welcomeDiv = document.querySelector('#welcome');
      welcomeDiv.innerHTML = `Добро пожаловать, пользователь #${userId}`;
      welcomeDiv.classList.add('welcome_active');

      signin.classList.remove('signin_active');
    } else {
      alert('Неверный логин/пароль');
    }
  };

  xhr.send(formData);
});