let todoIndex = 1;

function addtolist(e) {
    e.preventDefault();
    let formData = document.getElementById("form-todo");
    let todoTable = document.getElementById("todo-list");
    let tablerow = document.createElement('tr');
    let tabledata1 = document.createElement('td');
    tabledata1.innerHTML = ">>";
    tablerow.append(tabledata1);
    let tabledata2 = document.createElement('td');
    tabledata2.id = todoIndex
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
}

function deleteFromList(e, id) {
    e.preventDefault();
    let tabledata = document.getElementById(id);
    tabledata.parentElement.parentElement.removeChild(tabledata.parentElement);
}

function updateListItem(e, id) {
    e.preventDefault();
    let tabledata = document.getElementById(id);
    tabledata.innerHTML = prompt("Update To-do list Item", document.getElementById('form-todo').value)
}