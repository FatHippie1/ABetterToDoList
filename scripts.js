const date = document.getElementById('date');
const toDo = document.getElementById('todo');
const submitBtn = document.getElementById('submitBtn');
const tableItem = document.querySelector('table');
const remove = document.getElementById('dlt');
const todos = document.getElementsByClassName('td');
const checkedBox = document.getElementById('checkbox');


submitBtn.addEventListener('click', createTodo);


function createTodo() {
    tableItem.innerHTML += `
    <td class='td'id="createdTodo">
    ${toDo.value}
    </td>
    <td>
    <input type='checkbox' id="checkbox" onclick="isChecked(event)">
    </td>
    <td>
    <button id="dlt2" onclick="deleteToDoItem(event)" type='button'>Delete</button>
    </td>`;


}


function deleteToDoItem(e) {
    const button = e.target;
    const parentTD = button.parentElement;
    const parentTR = parentTD.parentElement;
    const siblingTD = parentTD.previousElementSibling;
    const sibChildTD = siblingTD.querySelector('#checkbox');
    if (sibChildTD.checked) {
        parentTR.remove();
    }

}

function isChecked(e) {
    const checkbox = e.target;
    const parentTR = checkbox.parentElement;
    const siblingTD = parentTR.previousElementSibling;

    if (checkbox.checked) {
        siblingTD.style.textDecoration = 'line-through';
    }
    else {
        siblingTD.style.textDecoration = '';
    }
};

