/*effect typewritter when landing on page for the placeholder in input*/
let i = 0;
let placeholder = "";
const text = " Write your tasks here !";
const speed = 150;

function type(){
    placeholder += text.charAt(i);
    document.getElementById("placeholder-id").setAttribute("placeholder",placeholder);
    i++;
    setTimeout (type, speed);
}

type ();

console.log(" Write your tasks here !".length)//24 characters


/**/