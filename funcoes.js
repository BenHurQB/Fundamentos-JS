let x = "";
console.log(x);
x = "oi";

// Declaração de função

// 1)declara a função
                      // String
function imprimeTexto(texto){
    console.log(texto)
}
// 2)executa a função (1 ou + vezes)

imprimeTexto("Ben");
imprimeTexto("Rosa");
imprimeTexto(soma());
// tres formas de escrever funções

function soma(){

    return   2 + 2;
    
}
console.log(soma());