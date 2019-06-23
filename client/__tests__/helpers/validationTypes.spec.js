import {
    isRequired,
    maxLength,
    minLength,
    isValidEmail,
    isName,
    isPhoneNumber,
    isValidPasswordConfirm,
} from '@helpers/validations/validationTypes';


describe('Validation Types', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });

    describe('###Right Inputs', () => {
        it('isRequired', () => {
            const check = isRequired('Berry');
  
            expect(check).toEqual(undefined);
        });
  
        it('maxLength', () => {
            const check = maxLength(10)('Malikberry');
  
            expect(check).toEqual(undefined);
        });
  
        it('minLength', () => {
            const check = minLength(3)('Berry');
  
            expect(check).toEqual(undefined);
        });
  
        it('isEmail', () => {
            const check = isValidEmail('example@gmail.com');
  
            expect(check).toEqual(undefined);
        });
  
        it('isName', () => {
            const check = isName('Berry');
  
            expect(check).toEqual(undefined);
        });

        it('isValidPasswordConfirm', () => {
            const check = isValidPasswordConfirm('password', { password: 'password' });
  
            expect(check).toEqual(undefined);
        });
    });

    describe('###Wrong Inputs', () => {
        it('isRequired', () => {
            const check = isRequired('');

            expect(check).toEqual('Required!');
        });

        it('maxLength', () => {
            const check = maxLength(10)('interpolation');

            expect(check).toEqual('Must be 10 characters or less!');
        });

        it('minLength', () => {
            const check = minLength(3)('Em');

            expect(check).toEqual('Must be 3 characters or more!');
        });

        it('isEmail', () => {
            const check = isValidEmail('example@gmail');

            expect(check).toEqual('Invalid email address!');
        });

        it('isName', () => {
            const check = isName('Malik**');

            expect(check).toEqual("Only letters and the characters '- allowed!");
        });

        it('isPhoneNumber', () => {
            const check = isPhoneNumber(123456444);

            expect(check).toEqual('Phone number is invalid, must be in the format 080xxxxxxxx');
        });

        it('isValidPasswordConfirm', () => {
            const check = isValidPasswordConfirm('passwordy', { password: 'password' });

            expect(check).toEqual('Passwords do not match');
        });
    });
});