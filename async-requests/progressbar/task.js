/** Получение доступа к необходимым элементам */
const progress = document.querySelector('#progress');
const form = document.forms.form;

/** Отслеживание события отправки формы */
form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append('filename', file);

    /** Создание, обработка и отправка запроса */
    const xhr = new XMLHttpRequest();

    xhr.open('POST', form.action);

    xhr.upload.addEventListener('progress', event => {
        if(event.lengthComputable) {
            let progressLoad = event.loaded / event.total;

            progress.value = progressLoad;
        };
    });

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== xhr.DONE && xhr.status !== 200) {
            console.log('Ошибка загрузки файла!');
        } else {
            console.log('Загрузка успешно завершена!');
        };
    };

    xhr.send(formData);
    
});