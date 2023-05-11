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

let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

let telefone1 = 12341234;
console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.
let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

