let todoIndex = 1;

function addtolist(e) {
    e.preventDefault();
    let formData = document.getElementById("form-todo");
    let todoTable = document.getElementById("todo-list");
    let tablerow = document.createElement('tr');
    tablerow.id = todoIndex;
    let tabledata1 = document.createElement('td');
    tabledata1.innerHTML = ">>";
    tablerow.append(tabledata1);
    let tabledata2 = document.createElement('td');
    tabledata2.innerHTML = formData.value;
    tablerow.append(tabledata2);
    let tabledata3 = document.createElement('td');
    tabledata3.innerHTML = '<button id="' + todoIndex + '" class="delete" onclick="deleteFromList(event,this.id)">Delete</button>';
    tablerow.append(tabledata3);
    let tabledata4 = document.createElement('td');
    tabledata4.innerHTML = '<button id="' + todoIndex + '" class="edit" onclick="deleteFromList(event,this.id)">Edit</button>';
    tablerow.append(tabledata4);
    if (formData.value != "") {
        todoTable.appendChild(tablerow);
        formData.value = "";
    }
    todoIndex++;
}

function deleteFromList(e, id) {
    e.preventDefault();
    let todoTable = document.getElementById("todo-list");
    let tablerow = document.getElementById(id);
    tablerow.parentNode.removeChild(tablerow);
}