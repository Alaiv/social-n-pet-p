export const validateRequired = (value) => {
    let error;
    if (!value) {
        error = 'Required';
    } else if (value.length < 5) {
        error = 'Min length is 5 symbols'
    } else if (value.length > 30) {
        error = 'Max length is 30 symbols'
    }

    return error;
}