let myLeads = ["Good Morning", "Bonjour", "Mwaramutse", "Dobriden"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
inputBtn.addEventListener("click", function () {
    // console.log("Add Event listener clicked !🥰");
    myLeads.push(inputEl.value);
    console.log(myLeads)
});

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}
// practice
const container = document.getElementById("container");
container.innerHTML = "<button onclick=buy()> Buy ! </button> ";

function buy() {
    container.innerHTML += "<p> Thank you for buying with us ! </p>"
}