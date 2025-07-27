let todoItemContainer = document.getElementById("todoItemsContainer");

let todoElement = document.createElement('li');
todoElement.classList.add('todo-item-container', 'd-flex', 'flex-row');
todoItemContainer.appendChild(todoElement);

let inputElement = document.createElement('input');
inputElement.type = "checkbox";
inputElement.id = "checkboxInput"; 
inputElement.classList.add('checkbox-input');
todoElement.appendChild(inputElement);

let labelContainer = document.createElement('div');
labelContainer.classList.add('label-container', 'd-flex','flex-row');
todoElement.appendChild(labelContainer);


