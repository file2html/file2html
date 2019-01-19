import {decode, encode} from '../../src/text-encoding';

describe('text-encoding', () => {
    const {TextDecoder: OriginTextDecoder, TextEncoder: OriginTextEncoder} = global as any;
    const text = 'Hello';
    const bytes = new Uint8Array([72, 101, 108, 108, 111]);
    const decoder = {
        decode: jest.fn(() => text)
    };
    const TextDecoder = jest.fn(() => {
        return decoder;
    });
    const encoder = {
        encode: jest.fn(() => bytes)
    };
    const TextEncoder = jest.fn(() => {
        return encoder;
    });

    beforeAll(() => {
        (global as any).TextDecoder = TextDecoder;
        (global as any).TextEncoder = TextEncoder;
    });

    afterEach(() => {
        decoder.decode.mockClear();
        encoder.encode.mockClear();
        TextDecoder.mockClear();
        TextEncoder.mockClear();
    });

    afterAll(() => {
        (global as any).TextDecoder = OriginTextDecoder;
        (global as any).TextEncoder = OriginTextEncoder;
    });

    describe('decode()', () => {
        it('should convert a bytes array to string', () => {
            const textResult = decode(bytes);

            expect(TextDecoder).toHaveBeenCalledWith(undefined, undefined);
            expect(decoder.decode).toHaveBeenCalledWith(bytes);
            expect(textResult).toBe(text);
        });
    });

    describe('encode()', () => {
        it('should convert a string to bytes array', () => {
            const bytesResult = encode(text);

            expect(TextEncoder).toHaveBeenCalledWith(undefined, undefined);
            expect(encoder.encode).toHaveBeenCalledWith(text);
            expect(bytesResult).toBe(bytes);
        });
    });
});