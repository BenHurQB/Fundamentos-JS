// == comparação implicita
const numero = 5;
const texto = "5";

console.log(numero == texto); // o js faz a conversao implicitamente. resultado true
console.log(numero === texto); // Não fez a conversão. Resultdo False

//typeof
console.log(typeof numero);
console.log(typeof texto);
// == só compara o valor
// === compara o valor e o tipo

// conversão explícita
Number()
String()