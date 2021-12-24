import { isDefined } from './is-defined';

describe('is-defined', () => {
    it('should be truthy', () => {
        expect.hasAssertions();
        expect(isDefined).toBeTruthy();
    });

    it('should be defined', () => {
        expect.hasAssertions();
        expect(true).toBeFalsy();
    });
});
