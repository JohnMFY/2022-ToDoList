/*effect typewritter when landing on page for the placeholder in input
j'aimerai bien looper cette marde lô ! 
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
//ADD NEW TODO//
const addButton = document.querySelector('#add_btn')
const inputText = document.querySelector('#newitem')
const todolist = document.querySelector ('#todolist')

const items = document.querySelectorAll('.item')


addButton.addEventListener('click', function (event) {
    const taskName = inputText.value // = what the user write on the input
    inputText.value = '' //put back the value to empty
    console.log(taskName)

    const divItem = document.createElement('div')
    divItem.classList.add('item')
    divItem.innerHTML = 
    `
    <h4>${taskName}</h4>
    `
    addValidation(divItem)
    addCross(divItem)
    todolist.appendChild(divItem)
})

/**************************************/
//VALIDATION & DELETE BUTTON
//change color of background if validate or not
for(let item of items){
    addValidation(item);
    addCross(item);
}

function addValidation(item){
    //<button class="validate"><i class="far fa-check-circle icon"></i></button>
    const validation = document.createElement('button')
    validation.classList.add('validate')
    validation.innerHTML='<i class="far fa-check-circle icon">'
    item.appendChild(validation)
    validation.addEventListener('click', function(event) {

    })
}

function addCross(item){
    //<button class="delete"><i class="far fa-times-circle icon"></i></button>
    const cross = document.createElement('button')
    cross.classList.add('delete')
    cross.innerHTML='<i class="far fa-times-circle icon">'
    item.appendChild(cross)
    cross.addEventListener('click', function(event) {
        
    })
}
/************************************************/
//CREATION OF A BUTTON WHO ADD 5 TODOS
const X5 = document.querySelector('#add_5')
X5.addEventListener('click', function(event){
    const divItem = document.createElement('div')
    divItem.classList.add('item')
    const todos = ['The', 'Cake', 'Is', 'A', 'Lie'];
    divItem.innerHTML = `
    <h4>${todos}</h4>
    `
    addValidation(divItem)
    addCross(divItem)
    todolist.appendChild(divItem) 
})
/***********************************************/
//MINIMUM OF 3 CHARACTERS FOR INPUT
const input = document.getElementById("newitem")
console.log(input)
input.addEventListener("input", wordLength)
function wordLength(){
    const inputWordLength = input.value.length
    console.log(inputWordLength)
    const minLenght = 3
    if (inputWordLength < minLenght) {
        input.classList.add("not_valid")
    }
    if(inputWordLength == 0) {
        input.classList.remove("not_valid")
        addButton.removeEventListener('click')
    } else if (inputWordLength >= minLenght) {
        input.classList.remove("not_valid")
        addButton.removeEventListener('click')
    }
}
//option de modification