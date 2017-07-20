/// <reference types="text-encoding" />
/**
 * @param {Uint8Array} content
 * @param {string} [encoding]
 * @param {TextEncoding.TextDecodeOptions} [options]
 * @returns {string}
 */
export declare function decode(content: Uint8Array, encoding?: string, options?: TextEncoding.TextDecoderOptions): string;
export declare function encode(text: string, encoding?: string, options?: TextEncoding.TextEncoderOptions): Uint8Array;
