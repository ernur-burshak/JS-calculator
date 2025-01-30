let calculation = localStorage.getItem('calculation') || '0';

      displayCalculation();

      function updateCalculation(value) {
        // Получаем последнее число в выражении (после последнего оператора)
        let lastNumber = calculation.split(/[\+\-\*\/]/).pop();

        // Если нажата точка и последнее число пустое (например, после оператора), добавляем '0.'
        if (value === '.' && lastNumber === '0') {
          calculation += '.';
        }
        // Если в последнем числе уже есть точка, не добавляем новую
        else if (value === '.' && lastNumber.includes('.')) {
          return;
        }
        // Если выражение равно '0', заменяем его новым значением
        else if (calculation === '0') {
          calculation = value;
        }
        // Добавляем новое значение к существующему выражению
        else {
          calculation += value;
        }
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-display-calculation')
          .innerHTML = calculation;
      }