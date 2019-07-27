const syncValidate = (values, validation) => {
    let errors = {};

    for (let attr in values) {
        for (let value in validation[attr]) {
            const func = validation[attr][value];
            const error = func(values[attr]);
            if (error) {
                if (!errors[attr]) {
                    errors[attr] = `${error}`;
                }
            }
        }
    }

    return errors;
};

export default syncValidate;
