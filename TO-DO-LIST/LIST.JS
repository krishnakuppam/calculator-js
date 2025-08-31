let taskInput = document.getElementById("taskInput");
let addTaskButton = document.getElementById("addTaskButton");
let taskList = document.getElementById("taskList");
let removeTaskButton = document.getElementById("removeTaskButton");


addTaskButton.addEventListener("click",(event) => {
  if(taskInput) {
    let newli = document.createElement("li");
    newli.textContent = taskInput.value;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      taskList.removeChild(newli);
    });
    newli.appendChild(removeButton);
    taskList.appendChild(newli);
    taskInput.value = "";
  }

});
