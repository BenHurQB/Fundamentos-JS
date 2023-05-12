
// declaracao de funcao

function minhaFuncao(param){
    //bloco de código
}
minhaFuncao("param");

//expressao de funcao

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,1));

// diferença principal: hoisting
// funções e var são "Listadas" no topo do arquivo

console.log(apresentar())
function apresentar(){
    return "Olá";
}
console.log(soma(1,1))
const soma = function(num1, num2){return num1 + num2}