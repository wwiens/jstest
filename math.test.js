const math = require('./math');

describe('Math Functions', () => {
    describe('add', () => {
        it('should return the sum of two numbers', () => {
            expect(math.add(1, 2)).toBe(3);
            expect(math.add(-1, -1)).toBe(-2);
            expect(math.add(0, 0)).toBe(0);
        });
    });

    describe('subtract', () => {
        it('should return the difference of two numbers', () => {
            expect(math.subtract(2, 1)).toBe(1);
            expect(math.subtract(-1, -1)).toBe(0);
            expect(math.subtract(0, 5)).toBe(-5);
        });
    });

    describe('multiply', () => {
        it('should return the product of two numbers', () => {
            expect(math.multiply(2, 3)).toBe(6);
            expect(math.multiply(-1, 5)).toBe(-5);
            expect(math.multiply(0, 5)).toBe(0);
        });
    });

    describe('isEven', () => {
        it('should return true for even numbers', () => {
            expect(math.isEven(2)).toBe(true);
            expect(math.isEven(-4)).toBe(true);
            expect(math.isEven(0)).toBe(true);
        });

        it('should return false for odd numbers', () => {
            expect(math.isEven(3)).toBe(false);
            expect(math.isEven(-5)).toBe(false);
            expect(math.isEven(1)).toBe(false);
        });
    });
});