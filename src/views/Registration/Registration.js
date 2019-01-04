import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Registration.scss';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);

        this.state = { 
            error: '',
            username: '',
            email: '', 
            password: '',
            confirmPassword: ''
        };
    }

    onSubmit(e) {
        e.preventDefault();

        let regexUsername = /^[a-zA-Z][a-zA-Z0-9]{0,20}$/;
        let regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,}$/;

        let isNotEmptyField = this.state.username && 
                            this.state.email && 
                            this.state.password && 
                            this.state.confirmPassword;

        if(!isNotEmptyField) {
            this.setState({ error: 'Не все поля заполнены' });
        } else if(this.state.password != this.state.confirmPassword) {
            this.setState({ error: 'Пароли не совпадают' });
        } else if(!regexUsername.test(this.state.username)) {
            this.setState({ error: 'Имя пользывателя должно начинаться с буквы a-Z, может содержать буквы латинского алфавита и цифры' });
        } else if(!regexPassword.test(this.state.password)) {
            this.setState({ error: 'Пароль должен содержать как минимум 1 большую и 1 маленькую букву a-Z и 1 цифру и должен быть более 8 символов' });
        } else {
            this.setState({ error: '' });
        }
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }
    onEmailChange(e) {
        this.setState({ email: e.target.value });
    }
    onPasswordChange(e) {
        this.setState({ password: e.target.value });
    }
    onConfirmPasswordChange(e) {
        this.setState({ confirmPassword: e.target.value });
    }

    render() {
        return (
            <div className='registrationView'>

                <span className='global-title'>Регистрация</span>

                <label className='registrationView__errorMessage'>{this.state.error}</label>

                <form className='registrationView__form' onSubmit={this.onSubmit}>

                    <span>
                        <label>Имя пользывателя</label>
                        <input onChange={this.onUsernameChange} type='text' name='username' />
                    </span>

                    <span>
                        <label>e-mail</label>
                        <input onChange={this.onEmailChange} type='email' name='email' />
                    </span>

                    <span>
                        <label>Пароль</label>
                        <input onChange={this.onPasswordChange} type='password' name='password' />
                    </span>

                    <span>
                        <label>Подтверждение пароля</label>
                        <input onChange={this.onConfirmPasswordChange} type='password' name='confirmPassword' />
                    </span>

                    <span>
                        <input type='submit' value='Регистрация'/>
                    </span>

                </form>

            </div>
        );
    }
}

export default Registration;