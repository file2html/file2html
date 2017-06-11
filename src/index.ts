let readers: Array<typeof Reader> = [];

export type FileBuffer = ArrayBuffer|Buffer;

export interface ConfigOptions {
    readers: Array<typeof Reader>;
}

export const FileTypes: {
    document: number;
    presentation: number;
    spreadsheet: number;
    drawing: number;
    image: number;
} = {
    document: 1,
    presentation: 2,
    spreadsheet: 3,
    drawing: 4,
    image: 5
};

export type Partial<T> = {
    [P in keyof T]?: T[P];
};

export interface FileMetaInformation {
    fileType: number;
    mimeType: string;
    name: string;
    size: number;
    creator: string;
    createdAt: string;
    modifiedAt: string;
    [key: string]: any;
}

export type PartialFileMetaInformation = Partial<FileMetaInformation>;

export interface FileInfo {
    content: Uint8Array;
    meta: PartialFileMetaInformation;
}

export interface ReaderParams {
    fileInfo: FileInfo;
}

export interface FileData {
    meta: FileMetaInformation;
    styles: string;
    content: string;
}

export class File {
    data: FileData;

    constructor (data: FileData) {
        this.data = data;
    }

    getMeta (): FileMetaInformation {
        return this.data.meta;
    }

    getData (): FileData {
        return this.data;
    }
}

export class Reader {
    read (_params: ReaderParams): Promise<File> {
        return Promise.reject(new Error('Invalid file')) as any;
    }

    static testFileMimeType (_mimeType: string): boolean {
        return false;
    }
}

export function config (options: ConfigOptions) {
    readers = options.readers.slice(0);
}

export function read (options: {fileBuffer: FileBuffer; meta: PartialFileMetaInformation}): Promise<File> {
    const {meta} = options;
    const ReaderConstructor: typeof Reader = readers.find((ReaderConstructor: typeof Reader) => {
        return ReaderConstructor.testFileMimeType(meta.mimeType);
    });

    if (!ReaderConstructor) {
        return Promise.reject(new Error('file2html.errors.unsupportedFile')) as any;
    }

    const fileContent: Uint8Array = new Uint8Array(options.fileBuffer as ArrayBuffer);
    const fileInfo: FileInfo = {
        meta,
        content: fileContent
    };

    return new ReaderConstructor().read({
        fileInfo
    });
}