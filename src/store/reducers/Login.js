import { AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_IS_AUTH } from '../constants';

const INITIAL_STATE = {
    token: '',
    error: '',
    isAuth: false
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_IS_AUTH:
            return { ...state, isAuth: action.payload };
        case AUTH_LOGIN:
            return { ...state, token: action.payload };
        case AUTH_LOGIN_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}