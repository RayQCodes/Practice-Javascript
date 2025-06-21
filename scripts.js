document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("add-task-btn");
    const inputs = document.getElementById("todo-input");
    const todolist = document.getElementById("todo-list");

    button.addEventListener("click", function () {
        let newtask = inputs.value.trim();

        if (newtask === "") {
            window.alert("yo u gotta push a value");
            return;
        }

        let li = document.createElement("li");
        li.textContent = newtask;
        todolist.appendChild(li);

        let delbutton = document.createElement("button");

        delbutton.textContent = "delete"; // should set text for delete button
        li.appendChild(delbutton);

        delbutton.addEventListener("click", function () {
            li.remove();
        });

        inputs.value = "";
    });
});
