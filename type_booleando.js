const primeiroNumero = 5;
const segundoNumero = 5;
let cadastroAtivado = true;

console.log(primeiroNumero === segundoNumero);

const texto1 = "Alura";
const texto2 = "a";
const texto3 = "alura";

console.log(texto1 === texto2);
console.log(texto1 === texto3);


const minhaVar = 1;
const MinhaVar = "texto";
const minhavar = "3";
const MINHAVAR = 2;

console.log(minhaVar, MinhaVar, minhavar, MINHAVAR);

let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}


let input2;

console.log(input); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false
