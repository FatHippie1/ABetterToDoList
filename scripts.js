const date = document.getElementById('date');
const toDo = document.getElementById('todo');
const submitBtn = document.getElementById('submitBtn');
const tableItem = document.querySelector('table');
const remove = document.getElementById('dlt');
const todos = document.getElementsByClassName('td');
const checkedBox = document.getElementById('checkbox');


submitBtn.addEventListener('click', createTodo);
//remove.addEventListener('click', removeTodo);

function createTodo() {
    tableItem.innerHTML += `
    <td class='td'id="createdTodo">
    ${toDo.value}
    </td>
    <td>
    <input type='checkbox' id="checkbox" onclick="completeTodo(event)">
    </td>
    <td>
    <button id="dlt2" onclick="deleteToDoItem(event)" type='button'>Delete</button>
    </td>`;
}

function deleteToDoItem(e) {
    console.log('clicked button');
    const button = e.target;
    const parentTD = button.parentElement;
    const parentTR = parentTD.parentElement;
    parentTR.remove();
    //e.target.remove();
}

//checkedBox.addEventListener('checked',completeTodo)
function completeTodo(e) {
    console.log('got it');
    
    const checkBox = e.target;
    const completedTodo = checkBox.parentElement;
    const actualCompletedTodo = completedTodo.previousElementSibling;
    console.log(actualCompletedTodo.style.textDecoration);
    completedTodo.style.textDecoration = 'line-through';
    //e.target.style.textDecoration = 'line-through';
    
    }

//function removeTodo() {
    
    // console.log("clicked");
    //console.log(tableItem)
//tableItem.remove();

//}

//const items = document.querySelectorAll('td');

//items.forEach(item => {
   // item.addEventListener('click', e => {
       // e.target.remove();
   // });
//});
//<td><input type='checkbox></td>