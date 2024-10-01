let tasks = [
  {
    title: "Math Homework",
    date: "1/4/2024",
    isDone: true,
  },
  {
    title: "Science Project",
    date: "1/5/2024",
    isDone: false,
  },
  {
    title: "History Essay",
    date: "1/6/2024",
    isDone: false,
  },
  {
    title: "English Reading",
    date: "1/7/2024",
    isDone: true,
  },
];

function getAllTasks() {
  document.getElementById("todo-list").innerHTML = "";
  let index = 0;
  for (let task of tasks) {
    let content = `
                    <div id="todo-item">
                        <!-- CHECKBOX -->
                        <label class="container">
                            <input ${
                              task.isDone ? "checked" : ""
                            } type="checkbox">
                            <div class="checkmark"></div>
                        </label>
                        <!-- CONTENT -->
                        <p id="content-todo-item">${task.title}</p>
                        <div class="actions">
                            <div id="actions-bnt">
                                <!-- EDIT -->
                                <button id="edit-btn" class="btn">
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
    date: `${now.getDay()}/${now.getMonth() + 1}/${now.getFullYear()}`,
    isDone: false,
  };

  tasks.push(task);

  getAllTasks();

  document.getElementById("input-content").value = "";
}

function deleteTask(index) {
  let task = tasks[index];
  if (confirm(`Are you sure you want to delete "${task.title}" task?`)) {
    tasks.splice(index, 1);
    getAllTasks();
  }
}

document.getElementById("add-bnt").addEventListener("click", createTask);

window.onload(getAllTasks());
