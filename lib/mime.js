"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mimeTypes = {
    png: 'image/png',
    gif: 'image/gif',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    pjpeg: 'image/pjpeg',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    txt: 'text/plain',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fb: 'application/x-fictionbook+xml',
    fb2: 'application/x-fictionbook+xml'
};
function lookup(filename) {
    var name = filename.toLowerCase();
    var extension = name.split('.').pop();
    return mimeTypes[extension];
}
exports.lookup = lookup;
function isSupportedExtension(extension) {
    return Boolean(mimeTypes[extension.replace(/^\./, '')]);
}
exports.isSupportedExtension = isSupportedExtension;
function isSupportedMimeType(mimeType) {
    for (var extension in mimeTypes) {
        if (mimeTypes.hasOwnProperty(extension)) {
            if (mimeType === mimeTypes[extension]) {
                return true;
            }
        }
    }
    return false;
}
exports.isSupportedMimeType = isSupportedMimeType;
