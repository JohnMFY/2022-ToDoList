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
//change color of background if validate or not

//passer par class

//mettre un minimum du characters pour les tasks

//creer un bouton qui te donne 5 task (loop)

//option de modification