
let inp = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");

// Apply the data from local storage to the page once it reloads or reopens
let arr = [];
if (JSON.parse(localStorage.getItem("tasks"))){
    arr = JSON.parse(localStorage.getItem("tasks"));
    for (let i = 0; i < arr.length; i++) {
        createTask(arr[i].title);
    }
};

add.addEventListener("click", function () {
    if (inp.value !== "") {
        createTask(inp.value); //add a task to the page
        let data = {
            id: Math.random(),
            title: inp.value
        };
        arr.push(data);
        localStorage.setItem("tasks",JSON.stringify(arr)); //add a task to local storage 
        inp.value = ""; //to empty the input once a task added
    }
});

// make an element as a new task        
function createTask(text) {
    let task = document.createElement("div");
    let title = document.createTextNode(`${text}`);
    let btn = document.createElement("button");
    let dele = document.createTextNode("Delete");

    task.classList.add("task");
    btn.classList.add("delete");

    btn.appendChild(dele);
    task.appendChild(title);
    task.appendChild(btn);
    tasks.appendChild(task);

    //delete a task from page
    btn.addEventListener("click", function (e) {
        e.target.parentElement.remove();

        //remove it from local storage
        arr = JSON.parse(localStorage.getItem("tasks"));
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].title === text) {
                arr.splice(i, 1);
                localStorage.setItem("tasks", JSON.stringify(arr));
        }}
    });
}
