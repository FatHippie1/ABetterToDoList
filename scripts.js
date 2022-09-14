const date = document.getElementById('date');
const toDo = document.getElementById('todo');


document.getElementById('submitBtn').addEventListener('click', submitTodo);

function submitTodo() {
    console.log(date.value);
    console.log(toDo.value);

}
submitTodo();