const notes_listsContainer = document.querySelector('[notes-data-lists]');
const notes_newListForm = document.querySelector('[notes-data-new-list-form]');
const notes_newListInput = document.querySelector('[notes-data-new-list-input]');
const notes_deleteListButton = document.querySelector('[notes-data-delete-list-button]');
const notes_listDisplayContainer = document.querySelector('[notes-data-list-display-container]');
const notes_listTitleElement = document.querySelector('[notes-data-list-title]');
const notes_listCountElement = document.querySelector('[notes-data-list-count]');
const notes_tasksContainer = document.querySelector('[notes-data-tasks]');
const notes_taskTemplate = document.getElementById('notes-task-template');
const notes_newTaskForm = document.querySelector('[notes-data-new-task-form');
const notes_newTaskInput = document.querySelector('[notes-data-new-task-input');
const notes_clearCompleteTasksButton = document.querySelector('[notes-data-clear-complete-tasks-button]');

const NOTES_LOCAL_STORAGE_LIST_KEY = "notes_task.lists";
const NOTES_LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "notes_task.notes_selectedListId";
let notes_lists= JSON.parse(localStorage.getItem(NOTES_LOCAL_STORAGE_LIST_KEY)) || [];
let notes_selectedListId = localStorage.getItem(NOTES_LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

notes_listsContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li'){
        notes_selectedListId = e.target.dataset.notes_listId
        saveAndRender()
    }
})

notes_tasksContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'input'){
        const notes_selectedList = notes_lists.find(notes_list => notes_list.id === notes_selectedListId);
        const notes_selectedTask = notes_selectedList.tasks.find(notes_task => notes_task.id === e.target.id);
        notes_selectedTask.complete = e.target.checked;
        save();
        renderTaskCount(notes_selectedList);
    }
});

notes_clearCompleteTasksButton.addEventListener('click', e => {
    const notes_selectedList = notes_lists.find(notes_list => notes_list.id === notes_selectedListId);
    if (notes_selectedList !== undefined){
    notes_selectedList.tasks = notes_selectedList.tasks.filter(notes_task => !notes_task.complete);
    }
    saveAndRender();
})

notes_deleteListButton.addEventListener('click', e => {
    notes_lists= notes_lists.filter(notes_list => notes_list.id !== notes_selectedListId)
    notes_selectedListId = null
    saveAndRender()
})

notes_newListForm.addEventListener('submit', e => {
    e.preventDefault();
    const notes_listName = notes_newListInput.value;
    if (notes_listName == null || notes_listName === '') return
    const notes_list = createList(notes_listName);
    notes_newListInput.value = null;
    notes_lists.push(notes_list);
    saveAndRender();
});

notes_newTaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const notes_taskName = notes_newTaskInput.value;
    if (notes_taskName == null || notes_taskName === '') return
    const task = createTask(notes_taskName);
    notes_newTaskInput.value = null;
    const notes_selectedList = notes_lists.find(notes_list => notes_list.id === notes_selectedListId);
    if (notes_selectedList !== undefined){
    notes_selectedList.tasks.push(notes_task);
    }
    saveAndRender();
});

function createList(name){
   return {id: Date.now().toString(), name: name, tasks: []};
}

function createTask(name){
   return {id: Date.now().toString(), name: name, complete: false};
}

function saveAndRender(){
    save();
    render();
}
//gotta call this function for it to save
function save(){
    localStorage.setItem(NOTES_LOCAL_STORAGE_LIST_KEY, JSON.stringify(notes_lists));
    localStorage.setItem(NOTES_LOCAL_STORAGE_SELECTED_LIST_ID_KEY, notes_selectedListId);
}

function render(){
    clearElement(notes_listsContainer);
    renderLists();
    const notes_selectedList = notes_lists.find(notes_list => notes_list.id === notes_selectedListId);
    //if some todolist is selected...
    if(notes_selectedListId == null){
        notes_listDisplayContainer.style.display = 'none';
    } else {
        if(notes_selectedList !== undefined){
        notes_listDisplayContainer.style.display = '';
        notes_listTitleElement.innerText = notes_selectedList.name;
        renderTaskCount(notes_selectedList);
        clearElement(notes_tasksContainer);
        renderTasks(notes_selectedList);
        }
    }
}

function renderTasks(notes_selectedList){
    notes_selectedList.notes_tasks.forEach(notes_task => {
        const notes_taskElement = document.importNode(notes_taskTemplate.content, true);
        const notes_checkbox = taskElement.querySelector('input');
        notes_checkbox.id = notes_task.id;
        notes_checkbox.checked = notes_task.complete;
        const notes_label = taskElement.querySelector('label');
        label.htmlFor = notes_task.id;
        label.append(notes_task.name);
        notes_tasksContainer.appendChild(taskElement);
    });
}

function renderTaskCount(notes_selectedList){
    const incompleteTaskCount = notes_selectedList.tasks.filter(task => !task.complete).length;
    const taskString = incompleteTaskCount === 1 ? "task": "tasks";
    notes_listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderLists(){
    notes_lists.forEach(notes_list => {
        const notes_listElement = document.createElement('li');
        notes_listElement.dataset.notes_listId = notes_list.id;
        notes_listElement.classList.add("list-name");
        notes_listElement.innerText = notes_list.name;
        if(notes_list.id === notes_selectedListId){
            notes_listElement.classList.add('active-list');
        };
        notes_listsContainer.appendChild(notes_listElement); 
    });
}

function clearElement(element){
    while(element.firstChild){
        element.removeChild(element.firstChild);
    }
}

render();