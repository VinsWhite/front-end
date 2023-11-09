let btn = document.querySelector("form button");
btn.addEventListener('click', function () {
    let newTaskContainer = document.querySelector("#nuoveTask");
    let inputElement = document.querySelector("#inserimento");

    let taskContainer = document.createElement("div");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.float = "right";

    let taskText = document.createElement("p");
    taskText.innerText = inputElement.value;

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(taskText);

    newTaskContainer.appendChild(taskContainer);

    inputElement.value = "";

    checkbox.addEventListener('change', function () {
        let taskTextContainer = document.querySelector("#nuoveTask");
        let taskCompletateContainer = document.querySelector("#taskCompletate");
    
        if (checkbox.checked) {
            taskText.style.color = 'green';
            taskText.style.textDecoration = "line-through";
            taskCompletateContainer.appendChild(checkbox);
            taskCompletateContainer.appendChild(taskText);
        } else {
            taskText.style.color = '';
            taskText.style.textDecoration = "none";
            taskTextContainer.appendChild(checkbox);
            taskTextContainer.appendChild(taskText);
        }
    });    
});


