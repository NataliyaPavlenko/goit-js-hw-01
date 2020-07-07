let total = 0;
let input;

do {
  input = prompt("Введите число");

  if (input !== null) {
    let number = Number(input);
    if (isNaN(number)) {
      console.log("Было введено не число, попробуйте еще раз");
      continue;
    }

    total += number;
  }
} while (input !== null);

console.log(`Общая сумма ${total}`);

/*(+input) - не работало*/
