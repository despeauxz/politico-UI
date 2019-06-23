import {
    isName,
    isRequired,
    isValidPasswordConfirm,
    isValidEmail,
    minLength6,
    maxLength40
} from './validationTypes';

const validation = {
    login: {
        email: [isRequired, isValidEmail],
        password: [isRequired]
    },
    signup: {
        firstname: [isRequired, maxLength40, isName],
        lastname: [isRequired, maxLength40, isName],
        email: [isRequired, isValidEmail],
        password: [isRequired, minLength6],
        passwordConfirm: [isRequired, isValidPasswordConfirm]
    }
};

export default validation;
