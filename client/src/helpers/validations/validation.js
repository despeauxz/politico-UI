import {
    isName,
    isRequired,
    isValidEmail,
    minLength6,
} from './validationTypes';

export default {
    signup: {
        firstname: [isRequired, isName],
        lastname: [isRequired, isName],
        email: [isRequired, isValidEmail],
        password: [isRequired, minLength6],
        passwordConfirm: [isRequired]
    },
    login: {
        email: [isRequired, isValidEmail],
        password: [isRequired]
    },
    createParty: {
        name: [isRequired, isName],
        fullname: [isRequired],
        hqAddress: [isRequired],
    }
};