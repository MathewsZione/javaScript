//•Implemente a solução para os seguintes desafios: 

//2. Dado um array numérico qualquer sem valores repetidos, 
//descubra qual é o índice do maior valor e o índice do menor valor.

function encontrarIndicesMaiorEMenor(array) {
    if (!Array.isArray(array) || array.length === 0) {

        console.log("O array fornecido é inválido ou vazio.");
        return;
    }

    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {

            indiceMaior = i;
        }

        if (array[i] < array[indiceMenor]) {

            indiceMenor = i;
        }
    }

    console.log("Índice do Maior Valor:", indiceMaior);
    console.log("Índice do Menor Valor:", indiceMenor);
}

const arrayNumerico = [5, 2, 8, 1, 7];

encontrarIndicesMaiorEMenor(arrayNumerico);

module.exports = { encontrarIndicesMaiorEMenor };