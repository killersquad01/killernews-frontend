import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR} from "../constants/Auth"

export const signIn = (data) => {
    return {
        type: SIGN_IN_SUCCESS,
        data
    };
};

export const signInSuccess = (data) => {
    return {
        type: SIGN_IN,
        data,
    };
};

export const signInError = (err) => ({
    type: SIGN_IN_ERROR,
    payload: err.message,
});