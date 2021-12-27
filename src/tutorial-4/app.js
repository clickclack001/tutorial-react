let tasks = [];

window.onload = render(tasks);

function handleClickAdd(){
    let input = document.querySelector('.form-task-name');
    if(input.value.trim().length < 1){
        alert('Введите название задачи');
        return false;
    }
    tasks.push(input.value);
    input.value = '';
    render(tasks);
}


function handleClickRemove(index){
    tasks.splice(index, 1);
    render(tasks);
}

function render(tasks = []){
    let list = document.querySelector('.tasks');
    if(tasks.length < 1){
        list.innerHTML = 'Список задач пуст.'
    } else {
        list.innerHTML = '';
        tasks.forEach(function (task, i, tasks){
            let li = document.createElement('li');
            li.innerHTML = "<li id='"+i+"'>"+task+" <button class='btn' onclick='handleClickRemove("+i+")'>X</button></li>";
            list.appendChild(li);
        })
    }
}