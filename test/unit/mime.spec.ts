import {lookup} from '../../src/mime';

describe('mime', () => {
    describe('lookup()', () => {
        it('should check invalid or unknown extensions', () => {
            expect(lookup(undefined)).toBeUndefined();
            expect(lookup('')).toBeUndefined();
            expect(lookup('file.unknown')).toBeUndefined();
        });

        it('should return a mime-type for compressed FB2 file', () => {
            expect(lookup('file.fb2.zip')).toBe('application/x-zip-compressed-fb2');
        });

        it('should return a mime-type for Apple Pages file', () => {
            expect(lookup('file.pages')).toBe('application/vnd.apple.pages');
        });
    });
});