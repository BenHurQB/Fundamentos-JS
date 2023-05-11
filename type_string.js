const texto1 = "Olá, Mundo!!";
const texto2 = 'Olá, mundo!!';
const senha = "senhaSuperSegura456";
const StringDeNumeros = "34567";

const citacao = "Meu nome é";
const meuNome = " Leonardo";

console.log(citacao);

//concatenação (+)

console.log(citacao + meuNome);

//template string ou template literal

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false
console.log(cidade == input); // false

// o JavaScript diferencia minúsculas e maiúsculas, tanto nos valores dos dados quanto no código que escrevemos.

const cidade1 = "belo horizonte";
const input1 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade1 === inputMinusculo); // true

const senha1 = "minhaSenha123"
console.log(senha1.length) // 13 caracteres
