const inputbox = document.querySelector("#input-box");
const addtaskbtn = document.querySelector("#add-task-btn");
const taskcontainer = document.querySelector("#task-container");

addtaskbtn.addEventListener("click",() => {

    //  Creating Elements

    const div = document.createElement("div");




    const newTaskInput = document.createElement("input");
    newTaskInput.classList.add("new-task-input");
    newTaskInput.value = inputbox.value;
    newTaskInput.readOnly = true;


    const editbtn = document.createElement("button");
    editbtn.innerText = "Edit"

    //  step 1 : state variable 
    let isEditing = false;

    editbtn.addEventListener("click", () => {
        if(isEditing === false){
            isEditing = true;
            newTaskInput.readOnly = false;
            editbtn.innerText = "Save";
        } else {
            isEditing = false ;
            newTaskInput.readOnly = true;
            editbtn.innerText= "Edit";
        }
    })

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";

    deletebtn.addEventListener("click", () => {
        deletebtn.parentElement.remove();

    })
    



    div.insertAdjacentElement("afterbegin",deletebtn);
    div.insertAdjacentElement("afterbegin",editbtn);
    div.insertAdjacentElement("afterbegin",newTaskInput);

    taskcontainer.insertAdjacentElement("beforeend",div);




inputbox.value = "";
});

