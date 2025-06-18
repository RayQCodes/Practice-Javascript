//load the DOM
document.addEventListener("DOMContentLoaded", () => {
  const submitbtn = document.getElementById("add-task-btn");
  const parents = document.getElementById("todo-list");
  let inputs = document.getElementById("todo-input");

  let items = [];

  submitbtn.addEventListener("click", function () {
    let tasks = inputs.value.trim();
    if (tasks === "") {
      return;
    }
    //creating
    let tasksobj = {
      text: tasks,
      time: Date.now(),
      completed: false,
    };
    items.push(tasksobj);
    tasks.value = "";
    let li = document.createElement("li");
    li.textContent = tasks;
    parents.appendChild(li);

    let removebtn = document.createElement("button");
    removebtn.textContent = "delete";
    li.appendChild(removebtn);
    removebtn.addEventListener("click", function () {
      li.remove();
    });
    
  });
});
