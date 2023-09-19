/** Получение доступа к нужным элементам */
const itemsWrapper = document.querySelector('#items');
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';

/** Создание и отправка и обработка запроса */
let xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.onreadystatechange = function(event) {
  if(this.readyState === 4 && this.status === 200) {
    let responseText = this.responseText;
    let parsedResponse = JSON.parse(responseText);
    let valuteObj = parsedResponse.response.Valute;

    for(const currencyCode in valuteObj) {
      if(valuteObj.hasOwnProperty(currencyCode)) {
        /** Получает объект с данными по валюте */
        const currencyItem = valuteObj[currencyCode];

        /** Создание шаблона и его заполнение */
        let divItemCode = document.createElement('div');
        divItemCode.className = 'item__code';
        divItemCode.innerHTML = currencyItem.CharCode;

        let divItemValue = document.createElement('div');
        divItemValue.className = 'item__value';
        divItemValue.innerHTML = currencyItem.Value;

        let divItemCurrency = document.createElement('div');
        divItemCurrency.className = 'item__currency';
        divItemCurrency.innerHTML = 'руб.';

        let itemsContainer = document.createElement('div');
        itemsContainer.className = 'item';

        itemsContainer.appendChild(divItemCode);
        itemsContainer.appendChild(divItemValue);
        itemsContainer.appendChild(divItemCurrency);

        itemsWrapper.appendChild(itemsContainer);
      };
    };

    loader.classList.toggle('loader_active');
  };
};

xhr.send();