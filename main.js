let todoIndex = 1;

// Adding content to To-Do List 
function addtolist(e) {
    e.preventDefault();
    let formData = document.getElementById("form-todo");
    let todoTable = document.getElementById("todo-list");
    let tablerow = document.createElement('tr');
    let tabledata1 = document.createElement('td');
    tabledata1.innerHTML = ">>";
    tablerow.append(tabledata1);
    let tabledata2 = document.createElement('td');
    tabledata2.id = todoIndex;
    tabledata2.innerHTML = formData.value;
    tablerow.append(tabledata2);
    let tabledata3 = document.createElement('td');
    tabledata3.innerHTML = '<button class="delete" onclick="deleteFromList(event,' + todoIndex + ')">Delete</button>';
    tablerow.append(tabledata3);
    let tabledata4 = document.createElement('td');
    tabledata4.innerHTML = '<button class="edit" onclick="updateListItem(event,' + todoIndex + ')">Edit</button>';
    tablerow.append(tabledata4);
    if (formData.value != "") {
        todoTable.appendChild(tablerow);
        formData.value = "";
    }
    todoIndex++;
    resetColor();
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
    tabledata.innerHTML = prompt("Update To-do list Item", document.getElementById('form-todo').value)
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

    for (var i = 0; i < todoIndex; i++) {
        let temp = document.getElementById(i);

        if (temp != null) {
            if (temp.innerHTML.includes(str) && str != "") {
                console.log("temp = " + temp.innerHTML);
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
    elem.style.display = "none";
    inputElement.style.display = "block";
}

function saveData(event, inputElement) {
    event.preventDefault();
    if (event.keyCode === 13) {
        console.log("Function saveData triggered !");
        newData = inputElement.value;
        let elemId = inputElement.id;
        elemId = elemId.replace("-input", "");
        let elem = document.getElementById(elemId);
        elem.innerHTML = newData;

        elem.style.display = "block";
        inputElement.style.display = "none";
    }
}