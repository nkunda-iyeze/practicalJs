let cards = []; // Cards array !
let player = {
    name: "shalom",
    chips: 145
}
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");

let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
// get random  card function
function getRandomCard() {
    let getCardNumber = Math.floor((Math.random() * 12) + 1);
    if (getCardNumber === 1) {
        return 11
    } else if (getCardNumber > 10) {
        return 10;
    } else {
        return getCardNumber
    }

}
// start a game function 
function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    renderGame();

}

// function for button to render a game !
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw another card ?";

    } else if (sum === 21) {
        message = "You've got a black jack  !!!!!! ";
        hasBlackJack = true;

    } else {
        message = "You'are out of the game !";
        isAlive = false;

    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + "  ";
    }
    console.log(cards);
}

// function to start a new card 
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }

}


////////////////////////////////////////////////////////////////////////////////////////////////////

// let randomNumber = Math.floor((Math.random() * 6) + 1)
// console.log(randomNumber);