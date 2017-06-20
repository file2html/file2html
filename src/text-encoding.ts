/**
 * @param {Uint8Array} content
 * @param {string} [encoding]
 * @param {TextEncoding.TextDecodeOptions} [options]
 * @returns {string}
 */
export function decode (content: Uint8Array, encoding?: string, options?: TextEncoding.TextDecodeOptions): string {
    return new TextDecoder(encoding, options).decode(content);
}

export function encode (text: string, encoding?: string, options?: TextEncoding.TextEncoderOptions): Uint8Array {
    return new TextEncoder(encoding, options).encode(text);
}