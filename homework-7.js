function showCityWeather(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию.`);
}
cityWeather ("Торонто", 23)


const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость.");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость.");
    } else {
        console.log("Скорость света.");
    }
}
checkSpeed (302500500)


const productName = "Телевизор";
const productPrice = 150;

function buyProduct(budget) {
    if (budget >= productPrice) {
        console.log(`${productName} приобретён. Спасибо за покупку!`);
    } else {
        const deficit = productPrice - budget;
        console.log(`Вам не хватает ${deficit}$, пополните баланс.`);
    }
}
buyProduct (100)

function changeRubToTl(currencyRub) {
    const currencyTurkishLira = currencyRub / 1.89;
    console.log(`${currencyRub} российских рублей = ${currencyTurkishLira.toFixed(2)} турецких лир.`);
}
changeRubToTl (1000)


const userName = "Шамиль";
const userAge = 38;
const сountryOfResidence = "Россия";


