document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter" && taskInput.value.trim() !== "") {
            addTask(taskInput.value.trim());
            taskInput.value = "";
        }
    });

    function addTask(taskContent) {
        const li = document.createElement("li");
        li.textContent = taskContent;
        taskList.appendChild(li);

        li.addEventListener("click", function() {
            li.classList.toggle("complete");
        });

        li.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            const confirmation = confirm("Tem certeza que deseja excluir esta tarefa?");
            if (confirmation) {
                taskList.removeChild(li);
            }
        });
    }
});