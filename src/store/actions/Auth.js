import api from '../../api';
import { AUTH_LOGIN, AUTH_LOGIN_ERROR, AUTH_IS_AUTH, AUTH_REGISTRATION, AUTH_REGISTRATION_ERROR } from '../constants';

export const login = (username, password) => dispatch => {

    let regexUsername = /^[a-zA-Z][a-zA-Z0-9]{0,20}$/;
    let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    let isValid = regexUsername.test(username) && regexPassword.test(password);

    if(!isValid) {
        dispatch({ type: AUTH_LOGIN_ERROR, payload: 'Имя пользывателя или пароль введены не в верном формате' });
        return;
    } else {
        return api.login({
            username: username,
            password: password
        }).then(res => {
            dispatch({ type: AUTH_LOGIN, payload: res.data.token });
            dispatch({ type: AUTH_LOGIN_ERROR, payload: '' });
            localStorage.setItem('token', res.data.token);
        }).catch(err => {
            if(err.response.status === 401) {
                dispatch({ type: AUTH_LOGIN_ERROR, payload: 'Не верное имя пользывателя или пароль' });
            } else {
                dispatch({ type: AUTH_LOGIN_ERROR, payload: 'Ошибка соеденения с сервером' });
            }
        })
    }
}

export const registration = (username, email, password, confirmPassword) => dispatch => {
    let regexUsername = /^[a-zA-Z][a-zA-Z0-9]{0,20}$/;
    let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    let isNotEmptyField = username && email && password && confirmPassword;

    if(!isNotEmptyField) {
        dispatch({ type: AUTH_REGISTRATION_ERROR, payload: 'Не все поля заполнены' });
    } else if(password !== confirmPassword) {
        dispatch({ type: AUTH_REGISTRATION_ERROR, payload: 'Пароли не совпадают' });
    } else if(!regexUsername.test(username)) {
        dispatch({ type: AUTH_REGISTRATION_ERROR, payload: 'Имя пользывателя должно начинаться с буквы a-Z, может содержать буквы латинского алфавита и цифры' });
    } else if(!regexPassword.test(password)) {
        dispatch({ type: AUTH_REGISTRATION_ERROR, payload: 'Пароль должен содержать как минимум 1 большую и 1 маленькую букву a-Z и 1 цифру и должен быть более 8 символов' });
    } else {
        return api.registration({
            username: username,
            email: email,
            password: password
        }).then(res => {
            dispatch({ type: AUTH_REGISTRATION, payload: 'Регистрация прошла успешно. На ваш email отправлено письмо с подтверждением.' });
            dispatch({ type: AUTH_REGISTRATION_ERROR, payload: '' });
        }).catch(err => {
            if(err.response.status === 406) {
                dispatch({ type: AUTH_REGISTRATION_ERROR, payload: 'Пользыватель уже зарегистрирыван' });
            } else {
                dispatch({ type: AUTH_REGISTRATION_ERROR, payload: 'Ошибка соеденения с сервером' });
            }
        })
    }
}

export const isAuth = () => dispatch => {
    const token = localStorage.getItem('token');

    if(token) {
        return api.tokenVerification(token)
        .then(res => {
            dispatch({ type: AUTH_IS_AUTH, payload: res.data.isAuth });
        }).catch(err => {
            dispatch({ type: AUTH_IS_AUTH, payload: false });
        })
    } else {
        dispatch({ type: AUTH_IS_AUTH, payload: false });
    }
}

export const logout = () => dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: AUTH_IS_AUTH, payload: false });
}