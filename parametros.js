
// parametros de função


function soma(numero1, numero2){
    return numero1  + numero2;
}


console.log(soma(2, 2));
console.log(soma(245, 20));
console.log(soma(-500, 60));

// parametros x argumentos
// possuem ordem na hora da passagem

function nomeIdade(nome, idade){

    return `meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade(40, "Juliana"));

function multiplica(n1 = 1, n2 = 1){
    return n1 * n2;
}
console.log(multiplica(soma(4,5)));

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

   function cumprimentaPessoa(pessoa){
    console.log(`oi, ${pessoa}!`)
   }
   
   cumprimentaPessoa('Helena')
   function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

   function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
   operacaoMatematica(15, 30, 45) // 90
   console.log(operacaoMatematica(15,30,45));

   function comParametro(param) {
    console.log(param)
}
comParametro()