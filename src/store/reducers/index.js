import LoginReducer from './Login';
import RegistrationReducer from './Registration';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    Login: LoginReducer,
    Registration: RegistrationReducer
});