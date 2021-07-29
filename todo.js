const clear = document.querySelector(".todo-clear");
const dateElement = document.getElementById("todo-date");
const list = document.getElementById("list");
const input = document.getElementById("todo-list-input");

const CHECK = "check-circle";
const UNCHECK = "circle";
const LINETHROUGH = "lineThrough";

const options = {weekday: "long", month: "long", day: "numeric"};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//this function adds something to the todo list
function addToDo(toDo){
    const item  = `<li class= "item">
                   <i class= "material-icons">circle</i>
                   <p class="text">${toDo}</p>
                   <i class="material-icons">garbage</i>
                   </li>
                   `;

    const position = "beforeend";

    list.insertAdjacentElement(position,item);
}

document.addEventListener("keyup",function(event){
    if(event.key === 'Enter'){
        const toDo = input.value;
        document.getElementById("list").append("hi!");

        //if the input isn't empty
        if(toDo){
            addToDo(toDo);
        }
        input.value = "";
    }
    
});