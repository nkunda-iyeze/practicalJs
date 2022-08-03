let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// render function
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    listItems += `
        <li>
        <a target='_blank' href='${leads[i]}'>
        ${leads[i]}
        </a>
        </li>
        `;
  }
  ulEl.innerHTML = listItems;
}

// delete button
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

// input button
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

// tab button

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // save the tab url
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});


// practice time 
// Exercise 1 
// SETTING THE STAGE
const player = "per";
const opponent = "Nick";
const game = "AmazingFighter";
let points = 0;
let hasWon = false;
//PLAYING THE GAME
points += 100;
hasWon = true;
if (hasWon) {
  console.log(`${player} got ${points} points and won the ${game} game !`);
} else {
  console.log(`The winner is ${opponent} ! ${player} Lost the game`);
}

// Exercise 2
// Log out items from an array 
let myCourses = ["Learn CSS Animation", "UI Design Fundamentals", "Intro to Clean Code"];

function getArray(course) {
  for (let i = 0; i < course.length; i++) {
    console.log(course[i]);
  }
}
getArray(myCourses);

// Exercise 3
// save to local storage
window.localStorage.setItem("name", "Nkunda Iyeze Shalom");
// window.localStorage.clear();
console.log(window.localStorage.getItem("name"));