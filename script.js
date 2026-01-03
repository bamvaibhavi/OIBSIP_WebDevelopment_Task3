const input = document.getElementById("task-input");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

// 1. Add Task Function
function addTask() {
    const taskText = input.value;

    if (taskText === "") {
        alert("Please write a task first!");
        return;
    }

    const li = document.createElement("li");
    const date = new Date().toLocaleString(); // Gets current date & time

    li.innerHTML = `
        <div class="task-info">
            <span>${taskText}</span>
            <span class="timestamp">Added: ${date}</span>
        </div>
        <div class="actions">
            <button class="btn-complete" onclick="completeTask(this)"><i class="fas fa-check"></i></button>
            <button class="btn-edit" onclick="editTask(this)"><i class="fas fa-edit"></i></button>
            <button class="btn-delete" onclick="deleteTask(this)"><i class="fas fa-trash"></i></button>
        </div>
    `;

    pendingList.appendChild(li);
    input.value = ""; // Clear input box
}

// 2. Complete Task Function
function completeTask(button) {
    const li = button.parentElement.parentElement; // Get the list item
    
    // Toggle styling
    li.classList.toggle("completed");
    
    // Remove the buttons for edit/complete (Clean look)
    button.remove(); // Remove check button
    li.querySelector(".btn-edit").remove(); // Remove edit button

    // Move to completed list
    completedList.appendChild(li);
}

// 3. Delete Task Function
function deleteTask(button) {
    const li = button.parentElement.parentElement;
    li.remove();
}

// 4. Edit Task Function
function editTask(button) {
    const li = button.parentElement.parentElement;
    const taskSpan = li.querySelector("span"); // Select the text part
    
    // Simple Prompt to get new text
    const newText = prompt("Update your task:", taskSpan.innerText);
    
    if (newText !== null && newText.trim() !== "") {
        taskSpan.innerText = newText;
        // Update timestamp to show it was edited
        const timeSpan = li.querySelector(".timestamp");
        timeSpan.innerText = "Edited: " + new Date().toLocaleString();
    }
}