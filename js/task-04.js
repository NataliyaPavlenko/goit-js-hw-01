"use strict";

let credits = 23580;
const pricePerDroid = 3000;
let totalPrice = 0;

const numberOfDroids = prompt("Укажите количество дроидов");
totalPrice = pricePerDroid * numberOfDroids;

if (numberOfDroids === null) {
  console.log("Отменено пользователем!");
} else if (credits < totalPrice) {
  console.log("Недостаточно средств на счету!");
} else {
  credits -= totalPrice;
  console.log(
    `Вы купили ${numberOfDroids} дроидов, на счету осталось ${credits} кредитов.`
  );
  console.log(totalPrice);
}
