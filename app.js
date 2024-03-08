let button = document.querySelector('button');
let input = document.querySelector('input');
let TaskList = document.querySelector('ul');
let tasks ;
if(!localStorage.getItem('todo')){
    tasks=[];
}
else{

}


function createTask(text) {
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

button.addEventListener('click', () => {
    let text = input.value;
    if (!(text === '')) {
        let task = createTask(text);
        task.innerHTML += '<span class="closeBtn"><i class="fa-solid fa-trash-can"></i></span><span class="editBtn"><i class="fa-solid fa-edit"></i></span>';
        TaskList.appendChild(task);
        SaveTask(task);
        input.value = '';
    }
})



TaskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-trash-can')) {
        event.target.parentElement.parentElement.style.display = 'none';
    }
    
    if (event.target.nodeName === 'LI') {
    event.target.classList.toggle('done');
}
})


function SaveTask(text){
    tasks.push(text);
    localStorage.setItem('todo',tasks);
}

function getTasks(){
    return localStorage.getItem('todo').split(',');
}