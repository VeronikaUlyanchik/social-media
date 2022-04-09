export const validateMessage = (value: string) => {
    let error;
    if (!value) {
        error = 'Message can not be empty';
    }
    return error;
}

export const validatePost = (value: string) => {
    let error;
    if (value.length>50) {
        error='50 symbols is available'
    }
    if (!value) {
        error = 'Post can not be empty';
    }
    return error;
}
export const validateLogin = (value: string) => {
    let error;
    if (!value) {
        error = 'Field is required';
    }
    return error;
}
export const validatePassword = (value: string) => {
    let error;
    if (!value) {
        error=  error = 'Field is required'}
    ;
    return error;
}