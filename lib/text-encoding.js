"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {Uint8Array} content
 * @param {string} [encoding]
 * @param {TextEncoding.TextDecodeOptions} [options]
 * @returns {string}
 */
function decode(content, encoding, options) {
    return new TextDecoder(encoding, options).decode(content);
}
exports.decode = decode;
function encode(text, encoding, options) {
    return new TextEncoder(encoding, options).encode(text);
}
exports.encode = encode;
