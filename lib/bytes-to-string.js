"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {number[]|Uint8Array} bytes
 * @returns {string}
 */
function bytesToString(bytes) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    var QUANTUM = 32768;
    var length = bytes.length;
    var result = '';
    for (var i = 0; i < length; i += QUANTUM) {
        result += String.fromCharCode.apply(null, bytes.slice(i, i + QUANTUM));
    }
    return result;
}
exports.default = bytesToString;
