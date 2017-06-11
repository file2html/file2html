/// <reference types="node" />
export declare type FileBuffer = ArrayBuffer | Buffer;
export interface ConfigOptions {
    readers: Array<typeof Reader>;
}
export declare const FileTypes: {
    document: number;
    presentation: number;
    spreadsheet: number;
    drawing: number;
    image: number;
};
export declare type Partial<T> = {
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
export declare type PartialFileMetaInformation = Partial<FileMetaInformation>;
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
export declare class File {
    data: FileData;
    constructor(data: FileData);
    getMeta(): FileMetaInformation;
    getData(): FileData;
}
export declare class Reader {
    read(_params: ReaderParams): Promise<File>;
    static testFileMimeType(_mimeType: string): boolean;
}
export declare function config(options: ConfigOptions): void;
export declare function read(options: {
    fileBuffer: FileBuffer;
    meta: PartialFileMetaInformation;
}): Promise<File>;
