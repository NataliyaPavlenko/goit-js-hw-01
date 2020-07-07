let message;
let price;
let normalizedInput;
let country = prompt("Введите название страны");

if (country === null) {
  price = "canceled";
} else if (country === "") {
  price = "not entered";
} else {
  normalizedInput =
    country[0].toUpperCase() +
    country
      .slice(1)
      .toLowerCase(); /*не очень понятно, этот момент найден в интернете, почему так?!*/

  switch (normalizedInput) {
    case "Китай":
      price = 100;
      break;

    case "Чили":
      price = 250;
      break;

    case "Австралия":
      price = 170;
      break;

    case "Индия":
      price = 80;
      break;

    case "Ямайка":
      price = 120;
      break;

    default:
      price = "default";
  }
}

switch (price) {
  case "canceled":
    message = "Отменено пользователем";
    break;

  case "not entered":
    message = "Укажите название страны";
    break;

  case "default":
    message = "В вашей стране доставка не доступна";
    break;

  default:
    message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
    break;
}
alert(message);

/*if (price === "canceled") {
  message = "Отменено пользователем";
} else if (price === "not entered") {
  message = "Укажите название страны";
} else if (price === "default") {
  message = "В вашей стране доставка не доступна";
} else {
  message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
}
alert(message);*/
