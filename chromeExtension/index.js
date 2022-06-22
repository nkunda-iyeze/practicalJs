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
    ulEl.innerHTML = listItems
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
const tabs = [{
    url: "https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
}]
tabBtn.addEventListener("click", function () {
    // save the tab url
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

// numbers as functions parameters practice
// parameters (number1, number2)
// function add(number1, number2) {
//     return number1 + number2;
// }
// // arguments (3,4),(9,102)
// console.log(add(3, 4)); // should logout 7
// console.log(add(9, 102)); // should logout 111

// // arrays as parameters
// function getFirst(arr) {
//     return arr[0];
// }
// console.log(getFirst([20, 30, 40]));