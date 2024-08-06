export const validator = {
    firstName: {
        required: true,
        pattern: {
            value: /^[a-zA-Z ]{1,30}$/,
            message: 'este campo es requerido *'
        }
    },
    lastName: {
        required: true,
        pattern: {
            value: /^[a-zA-Z ]{1,30}$/,
            message: 'este campo es requerido *'
        }
    },
    email: {
        required: true,
        pattern: {
            value:
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
            message: 'este campo es requerido *'
        }
    }
};
