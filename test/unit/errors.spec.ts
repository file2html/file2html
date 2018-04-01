import {errorsNamespace} from '../../src/errors';

describe('errors', () => {
    it('should define general errors', () => {
        expect(errorsNamespace).toBe('file2html.errors');
    });
});