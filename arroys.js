function apresentar(nome){
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Ben"));
console.log(soma(1, 1));

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Somente números de 1 a 9";
    }else {
        return num1 + num2;
    }
}
console.log(somaNumerosPequenos(11,11));
console.log(somaNumerosPequenos(10,11));
console.log(somaNumerosPequenos(10,10));