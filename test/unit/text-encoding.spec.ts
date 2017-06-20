import {decode} from '../../src/text-encoding';
import {TextDecoder} from 'text-encoding';

describe('text-encoding', () => {
    beforeAll(() => {
        (window as any).TextDecoder = TextDecoder;
    });

    describe('decode()', () => {
        it('should convert bytes array to string', () => {
            expect(decode(new Uint8Array([72, 101, 108, 108, 111]))).toBe('Hello');
        });
    });
});