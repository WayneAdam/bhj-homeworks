// получает доступ к счетчику попаданий
const dead = document.getElementById( "dead" );

// получает доступ к счетчику промахов
const lost = document.getElementById( "lost" );

// обнуляет статистику
function resetStatistic() {
  dead.textContent = 0;
  lost.textContent = 0;
};

// цикл
for(let i = 1; i <= 9; i++) {
  // получает доступ к лунке по индексу
  let hole = document.getElementById( `hole${i}` );

  // обработчик событий
  hole.addEventListener("click", () => {
    console.log("Клик!");

    // проверяет попадание
    if(hole.classList.contains( "hole_has-mole" )) {
      // увеличивает счетчик попаданий
      dead.textContent++;
    } else {
      // увеличивает счетчик промахов
      lost.textContent++;
    };

    // проверяет победу или поражение
    if(lost.textContent >= 5) {
      resetStatistic();
      return alert("Вы проиграли!");
    } else if (dead.textContent >= 10) {
      resetStatistic();
      return alert("Победа!");
    };

  });

};
