import "bootstrap";
import "./style.css";

function excusegenerator() {
/* Variables clasificadas */ 
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


/*Creamos una funcion que genere variables aletorias, que usaremos con
 los elementos what y when, ya que en uno falta y en otro sobra. */
function whatwhengenerator(array){
  let random = Math.floor(Math.random() * array.length);
  return array [random]; 
}


/* creamos las excusas en forma de arrays 
- llamamos a la funcion creada anteriormente y le damos las variables con las que queremos que trabaje*/ 
let excuse1 = who[0] + " " + action[0]+  " " + whatwhengenerator(what)+ " " + whatwhengenerator(when);
let excuse2 = who[1] + " " + action[1]+  " " + whatwhengenerator(what)+ " " + whatwhengenerator(when);
let excuse3 = who[2] + " " + action[2]+  " " + whatwhengenerator(what)+ " " + whatwhengenerator(when);                    
let excuse4 = who[3] + " " + action[3]+  " " + whatwhengenerator(what)+ " " + whatwhengenerator(when);


let totalexcuses = [excuse1, excuse2, excuse3, excuse4]; 


function randomexcuse(array) {
  let random = Math.floor(Math.random()* array.length);
  return array[random]; 
}

return randomexcuse (totalexcuses);


}

console.log(excusegenerator());



document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("button");
    const box = document.getElementById("box");

    button.addEventListener("click", function() {
        const newExcuse = excusegenerator();
        box.textContent = newExcuse;
    });
});
