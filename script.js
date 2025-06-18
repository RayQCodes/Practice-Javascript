document.addEventListener("DOMContentLoaded", () => {
  const todolist = document.getElementById("todo-list");
  const button = document.getElementById("add-task-btn");
  let inputs = document.getElementById("todo-input");

  let totaltasks = JSON.parse(localStorage.getItem("totaltasks")) || [];

  totaltasks.forEach((taskobj) => {
    let li = document.createElement("li");
    li.textContent = taskobj.text;

    let button2 = document.createElement("button");
    button2.textContent = "delete";
    li.appendChild(button2);

    button2.addEventListener("click", () => {
      totaltasks = totaltasks.filter((t) => t.text !== taskobj.text);
      localStorage.setItem("totaltasks", JSON.stringify(totaltasks));
      li.remove();
    });

    todolist.appendChild(li);
  });

  button.addEventListener("click", function () {
    let tasks = inputs.value.trim();
    if (tasks === "") {
      return;
    }

    let taskobj = {
      text: tasks,
    };
    totaltasks.push(taskobj);
    localStorage.setItem("totaltasks", JSON.stringify(totaltasks));

    let li = document.createElement("li");
    li.textContent = taskobj.text;

    let button2 = document.createElement("button");
    button2.textContent = "delete";
    li.appendChild(button2);

    button2.addEventListener("click", () => {
      totaltasks = totaltasks.filter((t) => t.text !== taskobj.text);
      localStorage.setItem("totaltasks", JSON.stringify(totaltasks));
      li.remove();
    });

    todolist.appendChild(li); //
    inputs.value = "";
  });
});
