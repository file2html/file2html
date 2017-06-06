/**
 * @param {number[]|Uint8Array} bytes
 * @returns {string}
 */
export default function bytesToString (bytes: number[]|Uint8Array): string {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    const QUANTUM: number = 32768;
    const {length} = bytes;
    let result: string = '';

    for (let i = 0; i < length; i += QUANTUM) {
        result += String.fromCharCode.apply(null, bytes.slice(i, i + QUANTUM));
    }

    return result;
}