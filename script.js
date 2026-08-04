const productCard = document.querySelector('.products__item');
const changeColorFirstCardButton = document.querySelector('#change-first-card-color-button');
const greenColorHash = "#49eb51"
changeColorFirstCardButton.addEventListener('click', () => {
  productCard.style.backgroundColor = greenColorHash;
})



const productCards = document.querySelectorAll('.products__item');
const changeColorALLCardButton = document.querySelector('#change-all-card-color-button');
const yelowColorHash = "#f3e73d"
changeColorALLCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = yelowColorHash)
})



const openGoogleButton = document.querySelector("#openGoogleButton")
const googleURL = "https://www.google.com";
openGoogleButton.addEventListener ("click", openGoogle)
function openGoogle() {
  const answer = confirm("Вы действительно хотите открыть Google?");

  if (answer === true) {
    window.open (googleURL);
  } else {
    return;
  }
}



const openConsoleLogButton = document.querySelector('#openConsoleLogButton');
function openConsoleLog(message) {
    alert('ДЗ №6');
    console.log(message);
}
openConsoleLogButton.addEventListener('click', () => {
    openConsoleLog('Мое ДЗ №6');
});




const head = document.querySelector('.catalog__title');

head.addEventListener('mouseenter', () => {
    console.log(head.textContent);
});


const buttonChangeColor = document.querySelector('#buttonColorChange');

buttonChangeColor.addEventListener('click', () => {
    buttonChangeColor.classList.toggle('button__aqua');
});


