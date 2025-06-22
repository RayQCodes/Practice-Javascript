document.addEventListener("DOMContentLoaded", ()=> {
    const addTaskButton = document.getElementById("add-task-btn");
    const todoInput = document.getElementById("todo-input")
    const todoList = document.getElementById("todo-list")

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {renderTasks(task)});

    addTaskButton.addEventListener("click", function(){
        const taskText = todoInput.value.trim();
        if(taskText === "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        }

        tasks.push(newTask);
        saveTask();
        renderTasks(newTask);
        todoInput.value = ""; // CLEAr input
             
    })


    function saveTask(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    
    function renderTasks(task){
        const li = document.createElement("li");
        li.setAttribute('data-id', task.id)
        if(task.completed) li.classList.add('completed');
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `;

        li.addEventListener("click", function(e){
            if (e.target.button === "BUTTON")return;
            task.completed = !task.completed;
            li.classList.toggle("completed")
            saveTask();
        })

        li.querySelector('button').addEventListener("click", function(e){
            e.stopPropagation();
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTask();
        })
        todoList.appendChild(li)
    }
})