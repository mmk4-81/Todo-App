let button = document.querySelector('button');
let input = document.querySelector('input');
let TaskList = document.querySelector('ul');

function createTask(text){
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

button.addEventListener('click',()=>{
    let text = input.value;
    let task = createTask(text);
    TaskList.appendChild(task);
})