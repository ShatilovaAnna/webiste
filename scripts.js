function formatDateOfBirth(input) {
    // Удаляем все точки из введенного текста
    var inputValue = input.value.replace(/\./g, '');

    // Добавляем точку после второго и пятого символов
    var formattedValue = inputValue.replace(/^(\d{2})(\d{2})?(\d{0,4})/, function(match, p1, p2, p3) {
        return [p1, p2 ? '.' + p2 : '', p3 ? '.' + p3 : ''].join('');
    });

    // Устанавливаем отформатированное значение обратно в поле ввода
    input.value = formattedValue;
}


/*const matrixField = document.getElementById('matrixField1');

function addNumbersFromString(numbersString) {
    // Разбиваем строку на отдельные числа по запятой и пробелу
    const numbersArray = numbersString.split(', ');
  
    // Проходимся по каждому числу в массиве
    numbersArray.forEach((number, index) => {
      // Обрезаем возможные пробелы вокруг числа и преобразуем его в целое число
      const trimmedNumber = parseInt(number.trim());
  
      // Проверяем, является ли значение числом от 1 до 99
      if (!isNaN(trimmedNumber) && trimmedNumber >= 1 && trimmedNumber <= 99) {
        // Если значение в допустимом диапазоне, добавляем его в поле
        matrixField.value += trimmedNumber;
  
        // Добавляем запятую, если текущее число не последнее
        if (index < numbersArray.length - 1) {
          matrixField.value += ', ';
        }
      }
    });
  }

let counter = 0;

// Функция для генерации случайного числа и его установки в поле
function changeRandomNumber() {
  // Проверяем, была ли достигнута максимальная частота вызовов
  if (counter >= 20) {
    // Если да, прекращаем вызовы функции
    clearInterval(intervalID);
    return;
  }

  // Генерируем случайное число от 0 до 4
  const randomNum = Math.floor(Math.random() * 5);
  
  // Задаем это случайное число в значение поля с классом matrix-field
  matrixField.textContent = randomNum;

  // Увеличиваем счетчик вызовов
  counter++;
  
}

// Вызываем функцию для изменения числа каждые 2 секунды (2000 миллисекунд)
const intervalID = setInterval(changeRandomNumber, 40);

// Вызываем функцию сразу после загрузки страницы, чтобы значение было случайным сразу
changeRandomNumber();
addNumbersFromString('18, 9, 16, 7');*/

// Функция для генерации случайного числа от min до max


function generateRandomNumbersString() {
    const numbers = [];
    for (let i = 0; i < 4; i++) {
      numbers.push(getRandomNumber(1, 20)); // Генерируем случайное число от 1 до 20
    }
    return numbers.join(', '); // Собираем числа в строку с разделителями ', '
  }
  
  // Функция для генерации случайного числа от min до max
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Функция для изменения числа с плавной анимацией
  async function changeRandomNumber() {
    for (let i = 0; i < 10; i++) { // Генерируем 5 случайных строк
      const randomNumbersString = generateRandomNumbersString(); // Генерируем случайные числа
      matrixField.textContent = randomNumbersString; // Устанавливаем случайные числа в поле
      await new Promise(resolve => setTimeout(resolve, 50)); // Ожидаем 1 секунду
    }
  }
  
  // Функция для вставки заготовленных значений
  function insertPredefinedValues() {
    matrixField.textContent = '1, 4, 3, 7'; // Здесь вставляем заготовленные значения
  }
  
  // Получаем доступ к полю для ввода числа
  const matrixField = document.getElementById('matrixField1');
  
  // Вызываем функцию для изменения числа с плавной анимацией
  changeRandomNumber().then(insertPredefinedValues); // Сначала меняем случайные числа, затем вставляем заготовленные значения
  
  $('input').on('change', function() {
    $('body').toggleClass('blue');
  });
  
  