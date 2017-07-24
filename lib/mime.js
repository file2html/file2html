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
    fb2: 'application/x-fictionbook+xml',
    odt: 'application/vnd.oasis.opendocument.text',
    epub: 'application/epub+zip',
    woff: 'application/font-woff',
    woff2: 'application/font-woff2'
};
function lookup(filename) {
    var name = filename.toLowerCase();
    var extension = name.split('.').pop();
    return mimeTypes[extension];
}
exports.lookup = lookup;
