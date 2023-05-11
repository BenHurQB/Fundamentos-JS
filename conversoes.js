//tipo de dado
//booleanos

// conversão implicita
    // Number() e String()
const numero = 456;
const numeroString = "456";
const numeroString1 = "456a";

console.log(numero === numeroString);

console.log(numero == numeroString);

console.log(numero + numeroString); // concatenou

console.log(numero + Number(numeroString));
console.log(numero + Number(numeroString1)); // resultado é NaN - não é número.