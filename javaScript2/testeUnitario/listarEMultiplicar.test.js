const { listarMultiplos } = require('./listarMultiplos');

describe('listarMultiplos', () => {
    it('deve listar os múltiplos de 3 e 5 até 10', () => {
        const resultado = listarMultiplos();
        expect(resultado).toEqual([3, 5, 6, 9]);
    });
});