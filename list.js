let task = document.getElementById("task")
let list = document.getElementById("list")

function addTask(){
    let newTask = task.value
    if (newTask !="") {
        let li = document.createElement("li")
        li.innerText = newTask
        list.appendChild(li)
        task.value = ""
    }else{
        alert("please enter a task")
    }
}
