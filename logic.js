let display = document.getElementById('screen');
let button = document.querySelectorAll('.btn');

console.log(button);
for (item of button) {
  item.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'C':
        display.value = '';
        break;

      case 'DEL':
        if (display.value) {
          display.value = display.value.slice(0, -1);
        }
        break;

      case '=':

        display.value = eval(display.value);
        break;

      default:
        display.value += e.target.innerText;
    }
  })
}


