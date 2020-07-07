let message;
let price;
let normalizedInput;
let country = prompt("Введите название страны");

if (country === null) {
  price = "canceled";
} else if (country === "") {
  price = "not entered";
} else {
  normalizedInput = country[0].toUpperCase() + country.slice(1).toLowerCase();

  switch (normalizedInput) {
    case "Китай":
      price = 100;
      message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
      break;

    case "Чили":
      price = 250;
      message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
      break;

    case "Австралия":
      price = 170;
      message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
      break;

    case "Индия":
      price = 80;
      message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
      break;

    case "Ямайка":
      price = 120;
      message = `Доставка в ${normalizedInput} будет стоить ${price} кредитов`;
      break;

    default:
      message = "В вашей стране доставка не доступна";
  }
}

alert(message);
