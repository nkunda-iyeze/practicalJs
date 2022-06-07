let myLeads = ["Good Morning", "Bonjour", "Mwaramutse", "Dobriden"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
inputBtn.addEventListener("click", function () {
    // console.log("Add Event listener clicked !🥰");
    myLeads.push(inputEl.value);
    console.log(myLeads)
});

let listItems = "";

for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    listItems += "<li>" + myLeads[i] + "</li>";

    console.log(listItems);
    // // create an element
    // const li = document.createElement("li");
    // // set text content
    // li.textContent = myLeads[i];
    // // append
    // ulEl.append(li);

}
ulEl.innerHTML = listItems

// practice 
// const container = document.getElementById("container");
// container.innerHTML = "<button onclick=buy()> Buy ! </button> ";

// function buy() {
// container.innerHTML += "<p> Thank you for buying with us ! </p>"
// }