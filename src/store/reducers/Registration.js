import { AUTH_REGISTRATION, AUTH_REGISTRATION_ERROR } from '../constants';

const INITIAL_STATE = {
    error: '',
    successMessage: ''
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_REGISTRATION:
            return { ...state, successMessage: action.payload };
        case AUTH_REGISTRATION_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}