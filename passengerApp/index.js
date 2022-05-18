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
    console.log(saveCount)
}
let username = "shalom"
let message = "You have three new Notifications ";
// console.log(message);
// save();