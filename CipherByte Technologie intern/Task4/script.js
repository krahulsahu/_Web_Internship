const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const taskTextSpan = document.createElement("span");
        taskTextSpan.textContent = taskText;
        taskTextSpan.classList.add("task-text");

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(taskTextSpan);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
