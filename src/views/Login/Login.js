import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRememberChange = this.onRememberChange.bind(this);

        this.state = { username: '', password: '', isRemember: false, error: '' };
    }

    //Обработка отправки формы
    onSubmit(e) {
        e.preventDefault();

        let regexUsername = /^[a-zA-Z][a-zA-Z0-9-_\.]{0,20}$/;
        let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

        let isValid = regexUsername.test(this.state.username) && regexPassword.test(this.state.password);

        if(!isValid) {
            this.setState({ error: 'Имя пользывателя или пароль введены не в верном формате!' });
            return;
        }

        //Тут должна быть отправка данных
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    onRememberChange(e) {
        this.setState({ isRemember: e.target.checked });
    }

    render() {
        return (
            <div className='loginView'>

                <span className='loginView__title'>Авторизация</span>

                <label className='loginView__errorMessage'>{this.state.error}</label>

                <form className='loginView__form' onSubmit={this.onSubmit}>

                    <span>
                        <label>Имя пользывателя: </label>
                        <input onChange={this.onUsernameChange} type='text' name='username' />
                    </span>

                    <span>
                        <label>Пароль: </label>
                        <input onChange={this.onPasswordChange} type='password' name='password' />
                    </span>

                    <span>
                        <input type='submit' value='Войти'/>
                        <label className='form__label-checkbox'>
                            <input onChange={this.onRememberChange}  type='checkbox' name='isRemember' />
                            Запомнить меня?
                        </label>
                    </span>

                    <span>
                        <Link className='form__recovery' to='/auth/recovery'>Забыл пароль?</Link>
                    </span>

                </form>
            </div>
        )
    }
}

export default Login;