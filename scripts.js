const date = document.getElementById('date');
const toDo = document.getElementById('todo');
const submitBtn = document.getElementById('submitBtn');
const tableItem = document.querySelector('table');
const remove = document.getElementById('dlt');
const todos = document.getElementsByClassName('td');


submitBtn.addEventListener('click', submitTodo);
remove.addEventListener('click', removeTodo);

function submitTodo() {
    tableItem.innerHTML += `<td class='td'>${toDo.value}</td><td><input type='checkbox'></td><td><button id="dlt2" type='button'>Delete</button></td>`;

}



function removeTodo() {

    console.log("clicked");
    //console.log(tableItem)
    //tableItem.remove();

}

const items = document.querySelectorAll('td');

items.forEach(item => {
    item.addEventListener('click', e => {
        //e.target.style.textDecoration = 'line-through';
        e.target.remove();
    });
});
//<td><input type='checkbox></td>