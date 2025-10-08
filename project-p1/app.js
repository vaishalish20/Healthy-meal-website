//variable to store tasks in an array
let tasks = [];

//Function to add a task
function addTask() { 
    //read what you type, adds it to the list, and clears the input box
    //Get value from input box
    let taskInput = document.getElementById('todo-input');
    let task = taskInput.value.trim(); //string value

    if(task === "") {
        alert("Please enter a task!");
        return;
    }

    //Add task to array
    tasks.push(task);

    // for logging
    console.log(tasks);

    //Clear input box to type new task easily
    taskInput.value = "";

    //call fuction to update the visible list
    renderTasks();
}

//show current tasks on the webpage
function renderTasks() { 
    // updates the visible task list whenever called.
    let list = document.getElementById('todo-list');

    //clear previous list items
    list.innerHTML = "";

    //loop through each task and create list item
    for(let i=0; i < tasks.length; i++) {
        let li = document.createElement('li'); //create <li> element
        li.textContent = tasks[i]; //put task text inside
        
        //create a Delete button for eah task
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function() {
            removeTask(i); //call removeTask with the index
        };
        
        li.appendChild(deleteBtn); //Add the button to the list item
        list.appendChild(li); //add it to <ul>
    }
}

function removeTask(index) {
    tasks.splice(index, 1); //Remove one task at this index
    renderTasks(); //update the list after removal
}

//set event listener on the button so it adds task on click
document.getElementById('add-button').addEventListener('click', addTask);