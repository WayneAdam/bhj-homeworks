/** находит все карточки товаров на странице */
const productAll = document.querySelectorAll('.product');
/** находит корзину */
const cart = document.querySelector('.cart__products');

/** цикл действий */
productAll.forEach(product => {
  /** получает элемент с количеством шт. */
  const quantityValue = product.querySelector('.product__quantity-value');
  /** все кнопки "добавитьв корзину" */
  const addToCartBtn = product.querySelector('.product__add');

  /** добавляет обработчик событий */
  addToCartBtn.addEventListener('click', (event) => {
    /** получает ID добавляемого продукта */
    const productDataId = product.getAttribute('data-id');
    /** получает ссылку на изображение добавляемого продукта */
    const productImage = product.querySelector('.product__image').src;
    /** получает количество шт. добавляемого товара в корзину */
    const productCount = parseInt(quantityValue.textContent);

    if(productCount >= 1) {
      /** находит продукт в корзине с таким же ID как и у добавляемого товара */
      const cartItem = cart.querySelector(`.cart__product[data-id="${productDataId}"]`);

      /** проверяет, если товар уже есть в корзине */
      if (cartItem) {
        /** получает его количество */
        const cartItemCount = parseInt(cartItem.querySelector('.cart__product-count').textContent);

        /** суммирует количество добавленных шт. с теми, что уже есть в корзине */
        cartItem.querySelector('.cart__product-count').textContent = cartItemCount + productCount;

      } else { // если товара нет в корзине
        /** создает элемент для добавляения */
        const cartProduct = document.createElement('div');

        cartProduct.classList.add('cart__product');
        /** задает атрибут и ID */
        cartProduct.setAttribute('data-id', productDataId);
        cartProduct.innerHTML = `
          <img class="cart__product-image" src="${productImage}">
          <div class="cart__product-count">${productCount}</div>
        `;
        /** добавляет товар в корзину */
        cart.appendChild(cartProduct);
      }
    }
    /** сброс количества товаров в карточке */
    quantityValue.textContent = '1';
  });
  /**  // находит кнопки "+" и "-" */
  const quantityControlUp = product.querySelector('.product__quantity-control_inc');
  const quantityControlDown = product.querySelector('.product__quantity-control_dec');

  /** добавялет обработчик событий + */
  quantityControlUp.addEventListener('click', (e) => {
    /** получает актуальное количество */
    const currentValue = parseInt(quantityValue.textContent);
    /** проверяет, что передано число */
    if (!isNaN(currentValue)) {
      quantityValue.textContent = currentValue + 1;
    }

  });
  /** добавялет обработчик событий - */
  quantityControlDown.addEventListener('click', () => {
    const currentValue = parseInt(quantityValue.textContent);
    /** проверяет, что передано число и что значение больше еденицы */
    if (!isNaN(currentValue) && currentValue > 1) {
      quantityValue.textContent = currentValue - 1;
    }

  });

});