import isEmail from 'validator/lib/isEmail';
// import { isEmpty } from 'lodash';


export const isRequired = value => value ? undefined : 'Required!';

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less!` : undefined;

export const maxLength40 = maxLength(40);

export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more!` : undefined;

export const minLength6 = minLength(6);

export const isValidEmail = value =>
    !value || !isEmail(value)
        ? 'Invalid email address!'
        : undefined;

export const isName = value =>
    value && !(/^[a-z'-]+$/i.test(value))
        ? "Only letters and the characters '- allowed!"
        : undefined;

export const isPhoneNumber = value =>
    value && !(/^\+?(0)[7-9]([0-9]{9})$/.test(value))
        ? 'Phone number is invalid, must be in the format 080xxxxxxxx'
        : undefined;

export const isValidPasswordConfirm = (value, allValues) => {
    if (value !== allValues.password) {
        return 'Passwords do not match';
    }
    return undefined;
};