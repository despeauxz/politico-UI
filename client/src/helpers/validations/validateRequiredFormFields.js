/**
 * checks if all required fields are filled
 * @function validateRequiredFormFields
 * @param {array} requiredFields - required fields
 * @param {object} values - field values
 * @returns {bool}  true or false
 */
const validateRequiredFormFields = (error) => {
    const valid = Object.values(error).length ? false : true;
    
    return valid;
};

export default validateRequiredFormFields;
