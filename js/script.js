const todoControl = document.querySelector('.todo-control')
const headerInput = document.querySelector('.header-input')
const todoList = document.querySelector('.todo-list')
const todoCompleted = document.querySelector('.todo-completed')
const toDoRemove = document.querySelector('.todo-remove')

let todoItems;

const toDoData = []

const render = function () {
    todoList.innerHTML = ''
    todoCompleted.innerHTML = ''
    toDoData.forEach(function(item){
        const li = document.createElement('li')
        li.classList.add('todo-item')
        li.innerHTML = '<span class="text-todo">' + item.text + '</span>' + 
        '<div class="todo-buttons">' +
		'<button class="todo-remove"></button>' +
		'<button class="todo-complete"></button>' +
		'</div>'


        if(item.completed) {
            todoCompleted.append(li)
        } 
        else{
            todoList.append(li)
        }
        li.querySelector('.todo-complete').addEventListener('click', function() {
            item.completed = !item.completed
            render()
        })
    })
    todoItems =  document.querySelectorAll('.todo-item')
    todoItems.forEach((item, index) => {
        const todoRemove = item.querySelector('.todo-remove')
        todoRemove.addEventListener('click', () => {
        item.remove()
        toDoData.splice(index, 1)
        }) 
    })
}


todoControl.addEventListener('submit', function(event) {
    event.preventDefault()
    if (headerInput.value !== ''){
    const newToDo = {
            text: headerInput.value,
            completed: false
        }
        
    toDoData.push(newToDo)
    headerInput.value = ''
    render()
    }
})


