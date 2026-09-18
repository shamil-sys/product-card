import { products } from './productCards.js';


function renderProductCards(products) {
    const container = document.getElementById("cards");
    const template = document.getElementById("card-template");
    const input = prompt("Сколько карточек отобразить? от 1 до 5");
    const count = Number(input);

    if (count < 1) {
        alert("Слишком мало! Минимум 1.");
        return;
    }

    if (count > 5) {
        alert("Слишком много! Максимум 5.");
        return;
    }
    
    const selected = products.slice(0, count);

  selected.forEach(product => {
    const cardClone = template.content.cloneNode(true);

    cardClone.querySelector(".card__image").src = product.image;
    cardClone.querySelector(".card__image").alt = product.title;
    cardClone.querySelector(".card__category").textContent = product.category;
    cardClone.querySelector(".card__name").textContent = product.title;
    cardClone.querySelector(".card__description").textContent = product.description;

    const compositionList = cardClone.querySelector(".compaund__list");
    product.composition.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      compositionList.appendChild(li);
    });

    cardClone.querySelector(".sum").textContent = product.price;

    container.appendChild(cardClone);
  });
}

  renderProductCards(products);

