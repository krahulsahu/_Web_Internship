const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox">
      <label>${taskText}</label>
      <button class="removeBtn">Remove</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";

    const removeButton = taskItem.querySelector(".removeBtn");
    removeButton.addEventListener("click", removeTask);
    taskItem.querySelector("input").addEventListener("change", toggleTaskCompletion);
    saveTasks();
  }
}

function toggleTaskCompletion(event) {
  const checkbox = event.target;
  const label = checkbox.nextElementSibling;

  if (checkbox.checked) {
    label.classList.add("completed");
  } else {
    label.classList.remove("completed");
  }

  saveTasks();
}

function removeTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);

  saveTasks();
}

function saveTasks() {
  const tasks = [];
  const taskItems = taskList.querySelectorAll("li");

  taskItems.forEach((taskItem) => {
    const task = {
      text: taskItem.querySelector("label").innerText,
      completed: taskItem.querySelector("input").checked,
    };
    tasks.push(task);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    const tasks = JSON.parse(savedTasks);

    tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""}>
        <label ${task.completed ? 'class="completed"' : ""}>${task.text}</label>
        <button class="removeBtn">Remove</button>
      `;
      taskList.appendChild(taskItem);

      const removeButton = taskItem.querySelector(".removeBtn");
      removeButton.addEventListener("click", removeTask);
      taskItem.querySelector("input").addEventListener("change", toggleTaskCompletion);
    });
  }
}
