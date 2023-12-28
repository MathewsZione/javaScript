//•Implemente a solução para os seguintes desafios: 

//1. Calcule o MDC (máximo divisor comum) entre dois números. 
function calcularMDC(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

const numero1 = 48;
const numero2 = 18;

const mdc = calcularMDC(numero1, numero2);

console.log(`O MDC de ${numero1} e ${numero2} é: ${mdc}`);

module.exports = { calcularMDC };