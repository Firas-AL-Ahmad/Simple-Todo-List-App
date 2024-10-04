document.getElementById("add-bnt").addEventListener("click", createTask);

window.onload = getAllTasks;

function getAllTasks() {
  getTasksFromLocalStorage();
  document.getElementById("todo-list").innerHTML = "";
  let index = 0;
  for (let task of tasks) {
    let content = `
                    <div class="todo-item ${
                      task.isDone ? "completedTask" : ""
                    }">
                        <!-- CHECKBOX -->
                        <label class="container">
                            <input onclick="toggleTaskCompletion(${index})"
                             ${task.isDone ? "checked" : ""} type="checkbox">
                            <div class="checkmark"></div>
                        </label>
                        <!-- CONTENT -->
                        <p id="content-todo-item">${task.title}</p>
                        <div class="actions">
                            <div id="actions-bnt">
                                <!-- EDIT -->
                                <button onclick="updateTask(${index})" id="edit-btn" class="btn">
                                    <span id="edit-icon" class="material-symbols-outlined">
                                        edit_square
                                    </span>
                                </button>
                                <!-- DELETE -->
                                <button onclick="deleteTask(${index})" id="delete-btn" class="btn">
                                    <span id="delete-icon" class="material-symbols-outlined">
                                        delete_sweep
                                    </span>
                                </button>
                            </div>
                            <!-- DATE -->
                            <div id="date">
                                <span>${task.date}</span>
                                <span class="material-symbols-outlined">
                                    calendar_month
                                </span>
                            </div>
                        </div>
                    </div>
                `;
    document.getElementById("todo-list").innerHTML += content;
    index++;
  }
}

function createTask() {
  const taskTitle = document.getElementById("input-content").value;

  if (taskTitle.trim() === "") {
    alert("Please enter a task title.");
    return;
  }

  const now = new Date();
  const task = {
    title: taskTitle,
    date: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
    isDone: false,
  };

  tasks.push(task);

  storTasks(tasks);

  getAllTasks();

  document.getElementById("input-content").value = "";
}

function deleteTask(index) {
  let task = tasks[index];
  if (confirm(`Are you sure you want to delete "${task.title}" task?`)) {
    tasks.splice(index, 1);
    storTasks(tasks);
    getAllTasks();
  }
}

function updateTask(index) {
  let newTaskContent = prompt("Modify what you want", tasks[index].title);
  tasks[index].title = newTaskContent;
  storTasks(tasks);
  getAllTasks();
}

function toggleTaskCompletion(index) {
  let task = tasks[index];
  task.isDone = !task.isDone;
  storTasks(tasks);
  getAllTasks();
}

//**! local Storage Functions */

function storTasks(tasks) {
  let taskString = JSON.stringify(tasks);
  localStorage.setItem("tasks", taskString);
}

function getTasksFromLocalStorage() {
  let tasksStored = JSON.parse(localStorage.getItem("tasks"));
  tasks = tasksStored ?? [];
}
