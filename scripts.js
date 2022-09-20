const toDo = document.getElementById('todo');
const submitBtn = document.getElementById('submitBtn');
const tableItem = document.querySelector('table');


submitBtn.addEventListener('click', createTodo);
toDo.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        submitBtn.click();
    }
});

function createTodo() {
    tableItem.innerHTML += `
    <td class='td'id="createdTodo">
    ${toDo.value}
    </td>
    <td>
    <input type='checkbox' id="checkbox" onclick="isChecked(event)">
    </td>
    <td>
    <button id="dlt2"  type='button'><i id="" class="fa-solid fa-trash" onclick="deleteToDoItem(event)"></i></button>
    </td>`;
    toDo.value = '';

}

function deleteToDoItem(e) {
    const tshcan = e.target;
    const button = tshcan.parentElement;
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