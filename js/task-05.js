const country = prompt("Введите название страны");

const china = "китай";
const chile = "чили";
const australia = "австралия";
const india = "индия";
const jamaica = "ямайка";

const chinaDeliveryCost = 100;
const chileDeliveryCost = 250;
const australiaDeliveryCost = 170;
const indiaDeliveryCost = 80;
const jamaicaDeliveryCost = 120;

if (country === null) {
  alert("Отменено пользователем!");
} else {
  switch (country.toLowerCase()) {
    case "китай":
      alert(`Доставка в ${china} будет стоить ${chinaDeliveryCost} кредитов`);
      break;

    case "чили":
      alert(`Доставка в ${chile} будет стоить ${chileDeliveryCost} кредитов`);
      break;

    case "австралия":
      alert(
        `Доставка в ${australia} будет стоить ${australiaDeliveryCost} кредитов`
      );
      break;

    case "индия":
      alert(`Доставка в ${india} будет стоить ${indiaDeliveryCost} кредитов`);
      break;

    case "ямайка":
      alert(
        `Доставка в ${jamaica} будет стоить ${jamaicaDeliveryCost} кредитов`
      );
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}
