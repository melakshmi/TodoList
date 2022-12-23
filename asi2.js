let todoText = document.querySelector('.todo-text');
let todoList = document.querySelector('.todo-list');
 
function addTask() {
    if (todoText.value.trim() === '') {
        alert('Enter some todo task..');
    } else {
        let newList = createATodoList(todoText.value);
        todoText.value = '';
        todoList.appendChild(newList);
    }
}

function todoChecked(e) {
    console.log(e.classList.toggle('done'));
}

function createATodoList(text) {
    let list = document.createElement('li');
    let span = document.createElement('span');
    let textNode = document.createTextNode(text);
    let closeSpan = document.createElement('span');
    closeSpan.classList.add('close');
    closeSpan.innerHTML = '&times;';
    span.appendChild(textNode);
    list.appendChild(span);
    list.appendChild(closeSpan);
    span.addEventListener('click', (e) => {
        todoChecked(e.target);
    });
    closeSpan.addEventListener('click', (e) => {
        let li = e.target.parentElement;
        li.parentElement.removeChild(li)
    });
    return list;
}