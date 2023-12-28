const { calcularMDC } = require('../Exercicio/calculoMDC'); 

describe('calcularMDC', () => {
    it('deve calcular corretamente o MDC', () => {
        expect(calcularMDC(48, 18)).toBe(6);
        expect(calcularMDC(24, 36)).toBe(12);
        expect(calcularMDC(17, 5)).toBe(1);
        
    });
})