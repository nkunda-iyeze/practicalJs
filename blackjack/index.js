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
// Practice Time 

// challenge 1
let person = {
    name: "Nkunda Iyeze Shalom",
    age: 27,
    country: "Rwanda,Kigali"
}

function logData() {
    return person.name + "  is " + person.age + " years old and lives in " + person.country;
}
let log = logData();
console.log(log);

// challenge 2

let age = 29;
if (age <= 6) {
    console.log("Free Tickets");
} else if (age > 6 && age <= 17) {
    console.log("Child Discount Allowed !");
} else if (age > 18 && age <= 26) {
    console.log("Student Discount Allowed!");
} else if (age > 27 && age <= 66) {
    console.log("Full price!");
} else {
    console.log("Senior citizens discount");
}
// challenge 3

let largeCountries = ["China", "India", "Usa", "Indonesia", "Pakistan"];
for (let i = 0; i < largeCountries.length; i++) {
    console.log("- " + largeCountries[i]);
}
// challenge 4
let largeCountries2 = ["Tuvalu", "India", "Usa", "Indonesia", "Monaco"];
console.log(largeCountries2);
largeCountries2.pop();
largeCountries2.shift();
console.log(largeCountries2);
largeCountries2.push("Pakistan");
largeCountries2.unshift("China");
console.log(largeCountries2);
// challenge 5
let dayOfMonth = 13;
let weekDay = "Friday";
if (dayOfMonth === 13 && weekDay === "Friday") {
    console.log("This is Spooky face: 😱 !");
} else {
    console.log("This is Funny Face 😃 !");
}
// challenge 6
let hands = ["rock", "paper", "scissor"];

function randomHands() {
    console.log(hands[Math.floor(Math.random() * hands.length - 1) + 1]);

}
randomHands();
// challenge 7
let fruits = ["Apple", "Orange", "Apple", "Apple", "Orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

function getApple() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "Apple") {
            appleShelf.textContent += fruits[i] + " , ";
        } else {

        }
    }
}

function getOrange() {
    for (let i = 0; i < fruits.length; i++) {
        if (fruits[i] === "Orange") {
            orangeShelf.textContent += fruits[i] + " , ";

        } else {

        }
    }
}