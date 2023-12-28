//3. Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, 
//ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. 

function listarMultiplos() {
    for (let i = 1; i < 10; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

listarMultiplos();

module.exports = { listarEMultiplicar };