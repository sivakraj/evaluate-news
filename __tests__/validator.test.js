import { checkForValidValue } from '../src/client/js/validator';

describe('Valid value check', () => {

    it('should return false if the value is null', () => {
        const input = null;
        expect(checkForValidValue(input)).toBeFalsy();
    });

    it('should return false if the value is empty', () => {
        const input = '';
        expect(checkForValidValue(input)).toBeFalsy();
    });

    it('should return true if the value contains at least one character', () => {
        const input = 'a';
        expect(checkForValidValue(input)).toBeTruthy();
    });

});