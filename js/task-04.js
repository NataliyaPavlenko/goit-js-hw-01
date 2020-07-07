let credits = 23580;
const pricePerDroid = 3000;

const numberOfDroids = prompt("Укажите количество дроидов");

if (numberOfDroids === null) {
  console.log("Отменено пользователем!");
} else {
  const totalPrice = pricePerDroid * numberOfDroids;

  if (totalPrice > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    console.log(
      `Вы купили ${+numberOfDroids} дроидов, на счету осталось ${
        credits - totalPrice
      } кредитов.`
    );
  }
}
