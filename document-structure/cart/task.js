const cartProducts = document.querySelector('.cart__products'); // находит корзину
const productQuantityControls = document.querySelectorAll('.product__quantity-controls'); // получает доступ ко всем элементам-оберткам для кнопок управления
const productQuantityValue = document.querySelectorAll('.product__quantity-value'); // находит все элементы с количеством товаров
const productAddBtns = document.querySelectorAll('.product__add'); // находит все кнопки "добавить в корзину"
const cartProductAll = document.querySelectorAll('.cart__product'); // находит все товары в корзине

for(const item of cartProductAll) { // бежит по всем товарам корзины
  item.remove(); // очищает корзину
};

function changeQuantityValue(e) { // изменяет количество товаров
  let clickedItem = e.target; // находит кликнутый элемент
  let parentClickedItem = clickedItem.parentElement; // находит родительский элемент клинутого элемента
  let parentValueItem = parentClickedItem.children[1]; // находит элемент количества у кликнутого товара
  // let sumValue = 0; // счётчик количества едениц одного товара

  if(clickedItem.innerText === "+" && parentValueItem.innerText > 0) { // проверяет нажатие на плюс и значение не меньше 1
    parentValueItem.innerText++; // увеличивает значение счетчика
    // sumValue = Number(parentValueItem.innerText); // сохраняет результат значения счетчика
  }

  if(clickedItem.innerText === "-" && parentValueItem.innerText > 1) { // проверяет нажатие на минус и значение не меньше 1
    parentValueItem.innerText--; // уменьшает значение счетчика
    // sumValue = Number(parentValueItem.innerText); // сохраняет результат значения счетчика
  }

};

function addToCart(e) { // добавляет товар в корзину
  const productItem = cartProductAll[0].cloneNode(true); // клонирует шаблон товара для добавляения в корзину

  let mainCardProdactItem = e.target.closest('.product'); // находит родителя кликнутого элемента с классом "product"
  let srcCardImg = mainCardProdactItem.children[1].currentSrc; // находит ссылку на изображение элемента
  let idCard = mainCardProdactItem.dataset.id; // находит ID товара
  const quantityValue = mainCardProdactItem.querySelector('.product__quantity-value').innerText; // находит количество товаров для добавления в корзину

  productItem.dataset.id = idCard; // присваевает ID товара добавляемому элементу в корзине
  productItem.children[0].src = srcCardImg; // вставляет изображение товара добавляемому элементу в корзине
  productItem.children[1].innerText = quantityValue; // присваивает количество товара добавляемому элементу в корзине

  if(cartProducts.children.length >= 1) { // 1 условие
    let allInCart = cartProducts.querySelectorAll('.cart__product'); // собирает все товары в корзине


    for(const product of allInCart) { // бежит по всем товарам в корзине
      let productId = Number(product.dataset.id); // получает ID продукта
      let addedProductId = Number(productItem.dataset.id); // получает ID добавляемого товара

      if(productId === addedProductId) { // 2 условие
        let countValue = Number(productItem.children[1].innerHTML); // получает количество штук добавляемого товара
        let getProductCountValue = Number(product.children[1].innerHTML); // получает количество штук товара в корзине

        product.children[1].innerHTML = countValue + getProductCountValue;

        // console.log('Условие 2');

      }

      if(productId !== addedProductId) { // 3 условие
        cartProducts.appendChild(productItem);
        // console.log('Условие 3', productItem);

      }

    }

  }

  if(cartProducts.children.length === 0) { // 4 проверяет наличие товаров в корзине
    cartProducts.appendChild(productItem); // добавляет товар в корзину
  }
  
};

for(const item of productQuantityControls) { // бежит по всем кнопкам "-" и "+"
  item.addEventListener('click', changeQuantityValue); // добавляет обработчик событий
};

for(const item of productAddBtns) {  // бежит по всем кнопкам "добавить в корзину"
  item.addEventListener('click', addToCart); // добавляет обработчик событий
};