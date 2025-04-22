let screen = document.getElementById('screen');

    function appendValue(val) {
      screen.value += val;
    }

    function clearScreen() {
      screen.value = '';
    }

    function changeSign() {
      if (screen.value.startsWith("-")) {
        screen.value = screen.value.substring(1);
      } else {
        screen.value = "-" + screen.value;
      }
    }

    function calculate() {
      let expression = screen.value;
      let result = 0;

      if (expression.includes('+')) {
        let parts = expression.split('+');
        result = Number(parts[0]) + Number(parts[1]);
      } else if (expression.includes('-')) {
        let parts = expression.split('-');
        result = Number(parts[0]) - Number(parts[1]);
      } else if (expression.includes('*')) {
        let parts = expression.split('*');
        result = Number(parts[0]) * Number(parts[1]);
      } else if (expression.includes('/')) {
        let parts = expression.split('/');
        if (Number(parts[1]) === 0) {
          screen.value = 'Error';
          return;
        }
        result = Number(parts[0]) / Number(parts[1]);
      } else if (expression.includes('%')) {
        let parts = expression.split('%');
        result = Number(parts[0]) % Number(parts[1]);
      } else {
        result = expression;
      }

      screen.value = result;
    }

    function toggleMode() {
      document.body.classList.toggle('dark');
    }