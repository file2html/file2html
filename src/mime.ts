const mimeTypes: {[key: string]: string} = {
    png: 'image/png',
    gif: 'image/gif',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    pjpeg: 'image/pjpeg',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    txt: 'tetx/plain',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fb: 'application/x-fictionbook+xml',
    fb2: 'application/x-fictionbook+xml'
};

export function lookup (filename: string) {
    const name: string = filename.toLowerCase();
    const extension: string = name.split('.').pop();

    return mimeTypes[extension];
}

export function isSupportedExtension (extension: string): boolean {
    return Boolean(mimeTypes[extension.replace(/^\./, '')]);
}

export function isSupportedMimeType (mimeType: string): boolean {
    for (const extension in mimeTypes) {
        if (mimeTypes.hasOwnProperty(extension)) {
            if (mimeType === mimeTypes[extension]) {
                return true;
            }
        }
    }

    return false;
}