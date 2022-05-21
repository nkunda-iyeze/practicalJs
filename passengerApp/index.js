// document.getElementById("count-el").innerText = 10;
let count = 0;
let countEl = document.getElementById("count-el");
let savEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
    // console.log(count);
}

function save() {
    let saveCount = count + " - "
    savEl.textContent += saveCount;
    count = 0;
    countEl.textContent = count;
    // console.log(saveCount)
}
let username = "shalom"
let message = "You have three new Notifications ";
// console.log(message);
// save();


// ------------------------------    CHALLENGE FOR QUICK REVIEW OF WHAT WE STUDIED   ------------------
// exercise 1;
let firstName = "Nkunda Iyeze";
let lastName = "Shalom";
let fullName = firstName + " " + lastName;
console.log(fullName);

// exercise 2;

let name = "linda";
let greeting = "Hi, there";

function greet() {
    console.log(greeting + " " + name + "!");
}

greet()

// exercise 3
let myPoints = 3

function add3Points() {
    myPoints += 3
}

function remove1Point() {
    myPoints--;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();

// console.log(myPoints)
// small calculator
let num1 = document.getElementById("num1-el").textContent = 18;
let num2 = document.getElementById("num2-el").textContent = 8;
// console.log(num1);
let result = 0;
let sumEl = document.getElementById("sum-el");

function add() {
    result = num1 + num2;
    sumEl.textContent += result + " - ";
    // break;
}

function sub() {
    result = num1 - num2;
    sumEl.textContent += result + " - ";
}

function mult() {
    result = num1 * num2;
    sumEl.textContent += result + " - ";
}

function div() {
    result = num1 / num2;
    sumEl.textContent += result + " - ";
}