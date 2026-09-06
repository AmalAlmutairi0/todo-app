
const taskInput = document.querySelector("#task-input");
const addBtn = document.querySelector("#add-btn");
const taskList = document.querySelector(".task-list");


function addNewTask() {
    let newTask = taskInput.value.trim();
    if (newTask === "") return;

    let listItem = document.createElement("li");
    listItem.classList.add("task-item");

    listItem.innerHTML = `
        <span class="status-icon">✕</span>
        <span class="task-text">${newTask}</span>
        <span class="priority-badge">★</span>
    `;

    taskList.appendChild(listItem);
    taskInput.value = "";
}

addBtn.addEventListener("click", addNewTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addNewTask();
    }
});



taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("status-icon")) {
        event.target.parentElement.remove();
    } else if (event.target.classList.contains("priority-badge")) {
        event.target.parentElement.classList.toggle("urgent");
    }
});