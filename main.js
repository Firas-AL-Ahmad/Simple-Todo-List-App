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

function displayTasks() {
  document.getElementById("todo-list").innerHTML = "";

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
                                <button id="delete-btn" class="btn">
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
  }
}

function createTask() {
  const taskTitle = document.getElementById("input-content").value;

  if (taskTitle.trim() === "") {
    alert("Please enter a task title.");
    return;
  }

  const task = {
    title: taskTitle,
    date: new Date().toLocaleString(),
    isDone: false,
  };

  tasks.push(task);

  displayTasks();

  document.getElementById("input-content").value = "";
}

document.getElementById("add-bnt").addEventListener("click", createTask);

displayTasks();
