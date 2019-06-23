import validateRequiredFields from '@helpers/validations/validateRequiredFormFields';

const values = {
    email: 'johndoe@gmail.com',
    password: '',
};

describe('Validate Required Fields', () => {
    it('should return true if all required fields are filled', () => {
        const check = validateRequiredFields(['email'], values);

        expect(check).toBeTruthy();
    });

    it('should return false if all required fields are not filled', () => {
        const check = validateRequiredFields(['password'], values);

        expect(check).toBeFalsy();
    });
});