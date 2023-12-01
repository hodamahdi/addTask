let mainInput = document.querySelector('.inp');
let addBtn = document.getElementById('Btn');
let tasksDiv = document.querySelector('.tasks');
let alertBtn = document.getElementById('alertBtn');
let popup = document.querySelector('.popup');
let taskMessage = document.querySelector('.task-message');

let newTasks =[];
// console.log(input ,tasksDiv ,addBtn) 


window.onload =()=>{
    mainInput.focus();
    taskMessage.classList.replace('d-none','d-block');
    
}
if(localStorage.getItem('task') != null){
    newTasks = JSON.parse(localStorage.getItem('task'));
    addElementsToPage(newTasks)
}

addBtn.addEventListener('click',function(){
   if(mainInput.value !== ""){
    taskMessage.classList.replace('d-block','d-none');
     addTask(mainInput.value);
     mainInput.value ='';
     mainInput.focus();
   }
   else{
    popup.style.display="flex"
   }
});
// add task to array
function addTask(taskText){
    const task = {
        id:Date.now(),
        title : taskText,
        complete : false
    }
    newTasks.push(task);
    addElementsToPage(newTasks)
    // add elements to local storage
localStorage.setItem('task',JSON.stringify(newTasks));

}

// add task to html page
function addElementsToPage( newTasks){

    tasksDiv.innerHTML="";
    // create task div
   newTasks.forEach(task => {
   
    let div = document.createElement('div');
    let input = document.createElement('input');
    input.setAttribute('type','checkbox');
    div.appendChild(input)
    div. className="task";
    div.setAttribute('data-id', task.id);
    div.appendChild(document.createTextNode(task.title))
    // create delete  btn 
    let button = document.createElement('button');
    button.className='btn'
    button.appendChild(document.createTextNode('X'));
    div.appendChild(button);

    
    tasksDiv.appendChild(div)
    
     console.log(tasksDiv)
     input.addEventListener('click',function(){
        div.classList.toggle('done');
       
     // remove task from page
   
   });
   tasksDiv.addEventListener('click',function(e){
    if(e.target.classList.contains('btn')){
        e.target.parentElement.remove();

      
    }
   
 })

 
   })

}


// alert btn 
alertBtn.addEventListener('click',function(){
  popup.style.display="none";
  input.focus()
})

