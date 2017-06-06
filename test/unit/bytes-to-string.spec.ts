import bytesToString from '../../src/bytes-to-string';

describe('bytes-to-string()', () => {
    it('should convert bytes array to string', () => {
        expect(bytesToString([72, 101, 108, 108, 111])).toBe('Hello');
    });
});