const { encontrarIndicesMaiorEMenor } = require('./encontrarIndicesMaiorEMenor');

describe('encontrarIndicesMaiorEMenor', () => {
    it('deve encontrar os índices do maior e menor valor', () => {
        const arrayNumerico = [5, 2, 8, 1, 7];
        const resultado = encontrarIndicesMaiorEMenor(arrayNumerico);
        expect(resultado).toEqual({ indiceMaior: 2, indiceMenor: 3 });
    });
});