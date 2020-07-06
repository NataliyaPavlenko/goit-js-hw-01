"use strict";

let country = prompt("Enter country");

let price;

const message = "В вашей стране доставка не доступна";

switch (country) {
  case "китай":
    price = 100;
    break;
  case "чили":
    price = 250;
    break;
  case "австралия":
    price = 170;
    break;
  case "индия":
    price = 80;
    break;
  case "ямайка":
    price = 120;
    break;
  default:
    alert(message);
}
