import {SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_ERROR} from "../constants/Auth"

const initialState = {
    signInError: "",
    customerData: {},
    signInLoading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                signInLoading: true,
            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                customerData: action.data,
                signInLoading: false,
            };
        case SIGN_IN_ERROR:
            return {
                ...state,
                signInError: action.error,
            };
        default:
            return state;
    }
};
