const rotatorCases = document.querySelectorAll('.rotator__case'); // получает список элементов
let cunrrentCaseIndex = 0; // текущий индекс элемента

function changeCase() { // меняет текст
  const newCase = rotatorCases[cunrrentCaseIndex]; // получает элемент по индексу
  
  rotatorCases.forEach(item => {
    if(item.closest('rotator')) { // проверяет отношение к действующему ротатору на странице
      throw new Error('У этого элемента другой родитель!');
    };
  });

  cunrrentCaseIndex++; // увеличивает текущий индекс

  if(cunrrentCaseIndex >= rotatorCases.length) {
    cunrrentCaseIndex = 0; // обнуляет индекс, чтобы начать сначала
  };

  newCase.classList.remove('rotator__case_active'); // удаляет класс

  // if(rotatorCases[cunrrentCaseIndex].textContent.indexOf('Бог JS')) {
  //   rotatorCases[cunrrentCaseIndex].setAttribute('data-speed', 1000);
  //   rotatorCases[cunrrentCaseIndex].setAttribute('data-color', 'red');
  // }

  rotatorCases[cunrrentCaseIndex].classList.add('rotator__case_active'); // добавляет класс

};

setInterval(() => {
  changeCase();
}, 1000);