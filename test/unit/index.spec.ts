import {config, FileTypes, read, Reader, File} from '../../src';

describe('index', () => {
    describe('File', () => {
        it('should create a File instance', () => {
            const file = new File({
                meta: {mimeType: 'text/plain'}
            } as any);

            expect(file.getMeta()).toEqual({mimeType: 'text/plain'});
            expect(file.getData()).toEqual({
                meta: {mimeType: 'text/plain'}
            });
        });
    });

    describe('Reader', () => {
        it('should return a false on file check by default', () => {
            expect(Reader.testFileMimeType('text/plain')).toBe(false);
        });

        it('should return an error on file read by default', () => {
            const reader = new Reader();

            expect.assertions(1);
            return reader.read({
                fileInfo: {
                    content: new Uint8Array([]),
                    meta: {}
                }
            }).catch((error: Error) => {
                expect(error).toEqual(new Error('Invalid file'));
            });
        });
    });

    describe('FileTypes', () => {
        it('should export a file types map', () => {
            expect(FileTypes).toEqual({
                document: 1,
                presentation: 2,
                spreadsheet: 3,
                drawing: 4,
                image: 5
            });
        });
    });

    describe('config(), read()', () => {
        const reader1 = {
            read: jest.fn()
        };
        const ReaderConstructor1: any = jest.fn(() => reader1);

        ReaderConstructor1.testFileMimeType = jest.fn();
        const reader2 = {
            read: jest.fn()
        };
        const ReaderConstructor2: any = jest.fn(() => reader2);

        ReaderConstructor2.testFileMimeType = jest.fn();

        beforeAll(() => {
            config({
                readers: [
                    ReaderConstructor1 as any,
                    ReaderConstructor2 as any
                ]
            });
        });

        afterEach(() => {
            reader1.read.mockClear();
            reader2.read.mockClear();
            ReaderConstructor1.mockClear();
            ReaderConstructor1.testFileMimeType.mockClear();
            ReaderConstructor2.mockClear();
            ReaderConstructor2.testFileMimeType.mockClear();
        });

        it('should find an appropriate reader for the file', () => {
            ReaderConstructor2.testFileMimeType.mockImplementationOnce(() => true);
            reader2.read.mockImplementationOnce(() => Promise.resolve());

            return read({fileBuffer: Buffer.from([]), meta: {mimeType: 'text/plain'}}).then(() => {
                expect(ReaderConstructor1).toHaveBeenCalledTimes(0);
                expect(reader1.read).toHaveBeenCalledTimes(0);
                expect(ReaderConstructor2.testFileMimeType).toHaveBeenCalledWith('text/plain');
                expect(ReaderConstructor2).toHaveBeenCalledTimes(1);
                expect(reader2.read).toHaveBeenCalledWith({
                    fileInfo: {
                        content: new Uint8Array([]),
                        meta: {mimeType: 'text/plain'}
                    }
                });
            });
        });

        it('should return an error if there is no reader for the file', () => {
            expect.assertions(3);
            return read({fileBuffer: Buffer.from([]), meta: {}}).catch((error) => {
                expect(ReaderConstructor1).toHaveBeenCalledTimes(0);
                expect(ReaderConstructor2).toHaveBeenCalledTimes(0);
                expect(error).toEqual(new Error('file2html.errors.unsupportedFile'));
            });
        });
    });
});