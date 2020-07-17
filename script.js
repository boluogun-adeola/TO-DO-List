//dom selection
let addTodo = document.querySelector("#task");
let button = document.querySelector("#btn");
let ul = document.querySelector("#list");
let btndel = document.querySelector("#btndel");
let btndone = document.querySelector('#btndone')

// Array of Tasks
let items = [];

// Function to Remove Done Task
    const del = (a) => {
       event.srcElement.parentElement.style.display = "none"  

    }

// Function to Mark-out Finished Task
    const done = (a) => {
       event.srcElement.parentElement.classList.toggle("striker") 

     }

// Eventlistener
    button.addEventListener("click",(b)=>{
        
        b.preventDefault();
        if(task.value != ""){
        items.push(task.value);
        items.reverse();
        ul.innerHTML += "<li>"+items[0]+"<span id='btndel'onclick='del()' >&#9747;</span><span id='btndone' onclick='done()'>&#x2714</span></li>"
        task.value = "";
        }
    }
    )
