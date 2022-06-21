let myLeads = [];
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.google.com");
// myLeads = JSON.stringify(myLeads);
// console.log(typeof myLeads);
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    // console.log(localStorage.getItem("myLeads"));
    renderLeads();

});

function renderLeads() {
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        listItems += `
        <li>
        <a target='_blank' href='${myLeads[i]}'>
        ${myLeads[i]}
        </a>
        </li>
        `;
    }
    ulEl.innerHTML = listItems
}
// template string practice
let name = "James";
let sender = "Shalom"
const email = `Hey ${name} ! How is it going ?
Cheers ${ sender}
`;
console.log(email);


// Truthy and falsey (Guess the Expression)
console.log(Boolean("")); // falsey
console.log(Boolean("0")); // Truthy
console.log(Boolean(100)); // Truthy
console.log(Boolean(null)); // falsey
console.log(Boolean([0])); // Truthy
console.log(Boolean(-0)); // False 