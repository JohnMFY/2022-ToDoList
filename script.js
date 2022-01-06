/*effect typewritter when landing on page for the placeholder in input
j'aimerai bien looper cette marde lô ! PROBABLY setInterval()
let i = 0;
let placeholder = "";
const text = " Write your tasks here !";
const speed = 150;
function type(){
    placeholder += text.charAt(i);
    document.getElementById("placeholder-id").setAttribute("placeholder",placeholder);
    i++;
    setTimeout (type, speed)
}
type ();
*/

/************************************/
//ADD NEW TODO// 100%
const addButton = document.querySelector('#add_btn')
const inputText = document.querySelector('#newitem')
const todolist = document.querySelector ('#todolist')

const items = document.querySelectorAll('.item')


addButton.addEventListener('click', testAdd)

function testAdd(){
    const taskName = inputText.value // = what the user write on the input
    inputText.value = '' //put back the value to empty
    console.log(taskName)

    const divItem = document.createElement('div')
    divItem.classList.add('item')
    divItem.innerHTML = `<h4>${taskName}</h4>`
    addValidation(divItem)
    addCross(divItem)
    //addEdit(divItem)
    todolist.appendChild(divItem)
}

/**************************************/
//VALIDATION & DELETE BUTTON 100%
for(let item of items){
    addValidation(item);
    addCross(item);
}
//VALIDATION BUTTON 100%
function addValidation(item){
    //<button class="validate"><i class="far fa-check-circle icon"></i></button>
    const validation = document.createElement('button')
    validation.classList.add('validate')
    validation.innerHTML='<i class="far fa-check-circle icon">'
    item.appendChild(validation)
    validation.addEventListener('click', function(event) {
        this.parentElement.classList.add("valid")
        this.parentElement.classList.add("val_anim")
    })
}
//DELETE BUTTON 100%
function addCross(item){
    //<button class="delete"><i class="far fa-times-circle icon"></i></button>
    
    const cross = document.createElement('button')
    cross.classList.add('delete')
    cross.innerHTML='<i class="far fa-times-circle icon">'
    item.appendChild(cross) 
    
    cross.addEventListener('click', function(event) {
        this.parentElement.classList.add("not_valid")
        this.parentElement.classList.add("del_anim")

        setTimeout(deleteTodo, 600);
        function deleteTodo(){
            cross.parentElement.remove()
        } 
    })   
}

/*******************************************/
//MODIFICATION OF TODO 10%

/*function addEdit(){
    const edition = document.createElement('button')
    edition.classList.add('edit')
    edit.innerHTML='<i class="fas fa-edit">'
    item.appendChild(edition)
    edit.addEventListener('click', function(event){

    })
}*/

/************************************************/
//BUTTON WHO ADD 5 TODOS 100%
const X5 = document.querySelector('#add_5')
X5.addEventListener('click', function(event){
    const todos = [{name:'The'},{name:'Cake'},{name:'Is'},{name:'A'},{name:'Lie'}];//forEach() probably the solution : IT WAS 😏
    console.log(todos.length)
    todos.forEach(function(todo) {
        const divItem = document.createElement('div')
        divItem.classList.add('item')
        divItem.innerHTML = `<h4>${todo.name}</h4>`
        addValidation(divItem)
        addCross(divItem)
        todolist.appendChild(divItem)
    });
})

/***********************************************/
//MINIMUM OF 3 CHARACTERS FOR INPUT 100%
const input = document.getElementById("newitem")
console.log(input)
wordLength()
console.log(wordLength)
input.addEventListener("input", wordLength)
function wordLength(){
    
    const inputWordLength = input.value.length
    console.log(inputWordLength)
    const minLenght = 3
    if (inputWordLength < minLenght) {
        input.classList.add("not_valid")
        const addButton = document.querySelector('#add_btn')
        console.log(addButton)
        addButton.removeEventListener('click', testAdd )
    }
    if(inputWordLength == 0) {
        input.classList.remove("not_valid")
        addButton.removeEventListener('click', testAdd)
    } else if (inputWordLength >= minLenght) {
        input.classList.remove("not_valid")
        addButton.addEventListener('click', testAdd)
    }
}