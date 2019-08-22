let todoIndex = 1;

// Fetching content from External API - JSON-Placeholder
// To limit the number of data elements to be fetched => set variable "NumberOfDataElements" below
const NUMBER_OF_ELEMENTS = 5;
var profileName = "Neelesh Singh Rajpurohit";
var profilePhone = "9971751205";
var profileAddr = "Chennai, Tamil Nadu";


function initialSetup() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(function(data) {
            for (let i = 0; i < NUMBER_OF_ELEMENTS; i++) {
                stringToHtml(data[i].title);
            }
        });
}

// Filling up To-do List with Dummy Data from Api
initialSetup();

// adding string to to-do list
function stringToHtml(str) {
    let todoTable = document.getElementById("todo-list");
    let tablerow = document.createElement('tr');
    let tabledata1 = document.createElement('td');
    tabledata1.innerHTML = ">>";
    tablerow.append(tabledata1);
    let tabledata2 = document.createElement('td');
    tabledata2.id = todoIndex;
    tabledata2.innerHTML = str;
    MarkStatusUnDone(tabledata2);
    tablerow.append(tabledata2);
    let tabledata3 = document.createElement('td');
    tabledata3.innerHTML = '<button class="delete" onclick="deleteFromList(event,' + todoIndex + ')">Delete</button>';
    tablerow.append(tabledata3);
    let tabledata4 = document.createElement('td');
    tabledata4.innerHTML = '<button class="edit" onclick="updateListItem(event,' + todoIndex + ')">Edit</button>';
    tablerow.append(tabledata4);
    if (str != "") {
        todoTable.appendChild(tablerow);
        str = "";
    }
    todoIndex++;
    resetColor();
}

function MarkStatusDone(elem) {
    elem.style.textDecoration = "line-through";
    elem.setAttribute("onclick", "MarkStatusUnDone(this);");
}

function MarkStatusUnDone(elem) {
    elem.style.textDecoration = "";
    elem.setAttribute("onclick", "MarkStatusDone(this);");
}

// Adding content to To-Do List 
function addtolist(e) {
    e.preventDefault();
    let formData = document.getElementById("form-todo");
    let str = formData.value;
    // Removing extra "spaces" in the todo list item.
    str = str.trim();

    stringToHtml(str);
    formData.value = "";
}

// Delete Content From To-Do List
function deleteFromList(e, id) {
    e.preventDefault();
    let tabledata = document.getElementById(id);
    tabledata.parentElement.parentElement.removeChild(tabledata.parentElement);
}

// Update Content in the To-do List
function updateListItem(e, id) {
    e.preventDefault();
    let tabledata = document.getElementById(id);
    let message = prompt("Update To-do list Item", tabledata.innerHTML);
    if (message == "null" || message == null || message == "") {;
    } else {
        tabledata.innerHTML = message;
    }
}

// Reset colors after search process  
function resetColor() {
    for (var i = 0; i < todoIndex; i++) {
        let temp = document.getElementById(i);

        if (temp != null) {
            temp.parentElement.style.color = "";
        }
    }
}

// Search among the content of todolist and highlight the matching content
function search() {
    let formData = document.getElementById("form-todo");
    let str = formData.value;
    str = str.trim();
    for (var i = 0; i < todoIndex; i++) {
        let temp = document.getElementById(i);

        if (temp != null) {
            if (temp.innerHTML.includes(str) && str != "") {
                temp.parentElement.style.backgroundColor = "yellow";
            } else {
                temp.parentElement.style.backgroundColor = "";
            }
        }
    }
}


// Profile click to update content
function updateProfile(elem) {
    let inputElementId = elem.id + "-input";
    let inputElement = document.getElementById(inputElementId);
    let oldData = elem.innerHTML;
    inputElement.value = oldData;
    switch (elem.id) {
        case "profile-name":
            profileName = oldData;
            break;
        case "profile-phone":
            profilePhone = oldData;
            break;
        case "profile-address":
            profileAddr = oldData;
            break;
    }
    elem.style.display = "none";
    inputElement.style.display = "block";
}

function saveData(event, inputElement) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("Function saveData triggered !");
        newData = inputElement.value;
        newData = newData.trim();
        let elemId = inputElement.id;
        elemId = elemId.replace("-input", "");

        if (newData == null || newData == "") {
            alert("Input filed cannot be left blank");
            switch (elemId) {
                case "profile-name":
                    newData = profileName;
                    break;
                case "profile-phone":
                    newData = profilePhone;
                    break;
                case "profile-address":
                    newData = profileAddr;
                    break;
            }
        }
        let elem = document.getElementById(elemId);
        elem.innerHTML = newData;

        elem.style.display = "block";
        inputElement.style.display = "none";
    }
}