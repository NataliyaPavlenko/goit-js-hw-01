let total = 0;
let input;

do {
  input = prompt("Введите число");

  if (input !== null) {
    input = Number(input);

    if (Number.isNaN(+input)) {
      alert("Было введено не число, попробуйте еще раз");
      continue;
    }
    total += input;
  }
} while (input !== null);

alert(`Общая сумма ${total}`);
