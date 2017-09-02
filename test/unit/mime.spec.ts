import {lookup} from '../../src/mime';

describe('mime', () => {
    describe('lookup()', () => {
        it('fb2.zip', () => expect(lookup('file.fb2.zip')).toBe('application/x-zip-compressed-fb2'));
    });
});